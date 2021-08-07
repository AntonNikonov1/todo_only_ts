import CreateElement from '../../components/CreateElement'
import PAGE_NAVIGATION from '../../utils/pageNavigation'
import registeredUsers from '../../utils/registeredUsers'
import ErrorPage from '../ErrorPage/ErrorPage'
import Home from '../Home/Home'
import Login from '../Login/Login'

class App {
  private static bodyElement = document.body

  static renderNewPage(pageId: string) {
    document.body.innerHTML = ''
    let page: HTMLElement | null = null

    switch (!!pageId) {
      case pageId === PAGE_NAVIGATION.Home:
        page = new Home().render()
        break

      case pageId === PAGE_NAVIGATION.Login:
        page = new Login().render()
        break

      default:
        page = new ErrorPage().render()
        break
    }

    if (page) document.body.append(page)
  }

  private enablePageChange() {
    const isRegisteredUser = registeredUsers.some((user) => {
      const userEmail = localStorage.getItem('userEmail')
      const userPassword = localStorage.getItem('userPassword')

      if (userEmail === user.email && userPassword === user.password)
        return true
    })

    if (isRegisteredUser) {
      App.renderNewPage(PAGE_NAVIGATION.Home)
      console.log('home')
    } else {
      App.renderNewPage(PAGE_NAVIGATION.Login)
      console.log('login')
    }

    window.addEventListener('hashchange', () => {
      const hash = window.location.hash
      App.renderNewPage(hash)
    })
  }

  run() {
    this.enablePageChange()
  }
}

export default App
