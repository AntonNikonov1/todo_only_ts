import CreateElement from '../../components/CreateElement'

class Home {
  private homeContainer: CreateElement
  private title: CreateElement

  constructor() {
    this.homeContainer = new CreateElement({
      element: 'selection',
    })
    this.title = new CreateElement({
      element: 'h1',
      text: 'HOME',
    })
  }

  render() {
    const homeContainerHTML = this.homeContainer.render()
    homeContainerHTML.appendChild(this.title.render())

    return homeContainerHTML
  }
}

export default Home
