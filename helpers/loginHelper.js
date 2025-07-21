const { LoginPage } = require("../pages/LoginPage")

async function loginWithValidCredentials(page) {
  const loginPage = new LoginPage(page)
  await loginPage.goto()
  await loginPage.login(process.env.GITHUB_EMAIL, process.env.GITHUB_PASSWORD)
}

module.exports = { loginWithValidCredentials }
