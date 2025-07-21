require("dotenv").config()
const { test, expect } = require("@playwright/test")
const { LoginPage } = require("../pages/LoginPage")
const { loginWithValidCredentials } = require("../helpers/loginHelper")
const { EXPECTED_LOGIN_ERROR } = require("../utils/constants")
const translations = require("../translation/en.json")

test("Đăng nhập thất bại với sai tài khoản", async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.login("tranthitulinh1305@gmail.com", "sai_pass")

  await expect(loginPage.errorMessage).toBeVisible()
  const msg = await loginPage.getErrorMessage()
  expect(msg).toContain(translations.login_error)
})

test("Đăng nhập thành công (dùng helper)", async ({ page }) => {
  await loginWithValidCredentials(page)
  await expect(page).toHaveURL(/github\.com/)
})
