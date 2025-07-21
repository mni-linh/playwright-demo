# HƯỚNG DẪN HỌC PLAYWRIGHT VỚI MÔ HÌNH POM (Page Object Model)

## 1. POM LÀ GÌ?

**Page Object Model (POM)** là một mẫu thiết kế trong automation testing, tách riêng logic xử lý từng trang ra thành các class hoặc file, giúp:

- Dễ bảo trì (nếu UI thay đổi, chỉ cần sửa ở Page)
- Tái sử dụng code
- Code test gọn gàng, dễ đọc

## 2. CẤU TRÚC THƯ MỤC CHUẨN (dùng cho Playwright + JavaScript)

```pgsql
github-login-test/
├── page/                   # POM chính - mỗi file là 1 trang web (LoginPage, HomePage...)
│ └── LoginPage.js
│
├── utils/                 # Tiện ích dùng chung (constant, logger...)
│ └── constants.js
│ └── logger.js
│
├── translation/           # Đa ngôn ngữ (key-value message, label...)
│ └── en.json
│ └── vi.json
│
├── helpers/               # Hàm helper dùng nhiều nơi (login nhanh, tạo data...)
│ └── loginHelper.js
│
├── project/              # File cấu hình khởi tạo project (config, env loader...)
│ └── config.js
│ └── env.js
│
├── tests/                # Thư mục chứa test case theo module
│ └── login.spec.js
│
├── .env                  # Biến môi trường (email, password, token...)
├── .env.example          # Mẫu file .env
├── .gitignore            # Bỏ qua .env
├── package.json          # Khai báo dependencies và script
├── playwright.config.js  # Cấu hình chính của Playwright

```

## 3. SETUP DỰ ÁN

```bash
npm init -y
npm i -D @playwright/test dotenv
npx playwright install
```

Tạo file playwright.config.js với cấu hình cơ bản:

```js
// playwright.config.js
const { defineConfig } = require("@playwright/test")

module.exports = defineConfig({
  testDir: "./Tests",
  timeout: 30000,
  retries: 1,
  reporter: [["list"], ["html"]],
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    baseURL: "https://github.com",
  },
})
```

## 4. CÁCH VIẾT THEO POM

Ví dụ: `page/LoginPage.js`

```js
class LoginPage {
  constructor(page) {
    this.page = page
    this.usernameInput = page.locator("#login_field")
    this.passwordInput = page.locator("#password")
    this.signInButton = page.locator('[name="commit"]')
  }

  async goto() {
    await this.page.goto("/login")
  }

  async login(email, password) {
    await this.usernameInput.fill(email)
    await this.passwordInput.fill(password)
    await this.signInButton.click()
  }
}

module.exports = { LoginPage }
```

Ví dụ: `tests/login.spec.js`

```js
const { test, expect } = require("@playwright/test")
const { LoginPage } = require("../Page/LoginPage")
require("dotenv").config()

test("Đăng nhập GitHub thất bại", async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.goto()

  await loginPage.login(process.env.GITHUB_EMAIL, process.env.GITHUB_PASSWORD)

  await expect(page).toHaveURL(/.*login/)
  await expect(page.locator("#js-flash-container")).toBeVisible()
})
```
## 5. QUẢN LÝ BIẾN MÔI TRƯỜNG AN TOÀN
Tạo `.env` (dùng thật):

```dotenv
GITHUB_EMAIL=your-email@example.com
GITHUB_PASSWORD=your-password
```
Thêm vào `.gitignore`:
```bash
.env
```

Tạo `.env.example` để chia sẻ mẫu:
```dotenv
GITHUB_EMAIL=
GITHUB_PASSWORD=
```
Load vào code:
```js
require('dotenv').config();
```

## 6. CHẠY TEST
🔹 Chạy toàn bộ:
```bash
npx playwright test
```

🔹 Chạy 1 file:
```bash
npx playwright test Tests/login.spec.js
```

🔹 Chạy 1 test case theo tên:
```bash
npx playwright test -g "Đăng nhập GitHub thất bại"
```
🔹 Chạy với UI:
```bash
npx playwright test --ui
```

🔹 Xem HTML Report:
```bash
npx playwright show-report
```
## 7. TIPS KHI LÀM POM
- Mỗi file trong Page/ đại diện 1 màn hình chính (login, dashboard…)
- Không xử lý logic test trong page, chỉ định nghĩa thao tác và element
- Dùng Helper để viết các action phổ biến (login nhanh, logout, tạo user…)
- Tách constants và translation để dễ bảo trì

## 8. TÀI LIỆU THÊM
[Playwright Docs]()

[Playwright GitHub]()

[Playwright Test Configuration]()

