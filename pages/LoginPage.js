class LoginPage {
  constructor(page) {
    this.page = page
    this.usernameInput = page.locator("#login_field")
    this.passwordInput = page.locator("#password")
    this.signInButton = page.locator('input[type="submit"]')
    this.errorMessage = page.locator('div[role="alert"]')
  }

  async goto() {
    await this.page.goto("https://github.com/login")
  }

  async login(username, password) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.signInButton.click()
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent()
  }
}

module.exports = { LoginPage }
