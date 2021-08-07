import CreateElement from '../../components/CreateElement'

class ErrorPage {
  private pageContainer: CreateElement
  private title: CreateElement

  constructor() {
    this.pageContainer = new CreateElement({
      element: 'selection',
    })
    this.title = new CreateElement({
      element: 'h1',
      text: '404 page not found',
    })
  }

  render() {
    const pageContainerHTML = this.pageContainer.render()
    pageContainerHTML.appendChild(this.title.render())

    return pageContainerHTML
  }
}

export default ErrorPage
