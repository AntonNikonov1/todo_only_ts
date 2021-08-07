import CreateElement from '../../components/CreateElement'

class Login {
  private loginContainer: CreateElement
  private emailInput: CreateElement
  private passwordInput: CreateElement

  constructor() {
    this.loginContainer = new CreateElement({ element: 'selection' })
    this.emailInput = new CreateElement({
      element: 'input',
      placeholder: 'Enter your email',
    })
    this.passwordInput = new CreateElement({
      element: 'input',
      placeholder: 'Enter your password',
    })
  }

  render() {
    const loginContainerHTML = this.loginContainer.render()

    loginContainerHTML.append(this.emailInput.render())
    loginContainerHTML.append(this.passwordInput.render())

    return loginContainerHTML
  }
}

export default Login
