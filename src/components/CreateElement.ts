interface CreateElementProps {
  element: string
  text?: string
  children?: Node
  id?: string
  className?: string[]
  onClick?: void
  placeholder?: string
  type?: string
  value?: string
  href?: string
}

class CreateElement {
  public element: string
  public text?: string
  public children?: Node
  public id?: string
  public className?: string[]
  public onClick?: void
  public placeholder?: string
  public type?: string
  public value?: string
  public href?: string

  constructor(props: CreateElementProps) {
    this.element = props.element
    this.text = props.text
    this.className = props.className
    this.id = props.id
    this.onClick = props.onClick
    this.children = props.children
    this.placeholder = props.placeholder
    this.type = props.type
    this.value = props.value
    this.href = props.href
  }

  render() {
    const createElement = document.createElement(this.element)

    if (this.text) createElement.innerText = this.text
    if (this.children) createElement.appendChild(this.children)
    if (this.className) createElement.classList.add(...this.className)
    if (this.id) createElement.id = this.id

    if (this.onClick) createElement.onclick = this.onClick

    if (this.placeholder)
      createElement.setAttribute('placeholder', this.placeholder)
    if (this.type) createElement.setAttribute('type', this.type)
    if (this.value) createElement.setAttribute('value', this.value)
    if (this.href) createElement.setAttribute('href', this.href)

    return createElement
  }
}

export default CreateElement
