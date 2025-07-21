# Hướng dẫn thiết lập dự án Playwright cơ bản cho người mới bắt đầu

## 📚 Mục lục

1. [CHUẨN BỊ MÔI TRƯỜNG](#1-chuẩn-bị-môi-trường)

   - [1.1. CÀI ĐẶT NODE.JS (LTS)](#11-cài-đặt-nodejs-lts)
   - [1.2. CÀI VISUAL STUDIO CODE (VS CODE)](#12-cài-visual-studio-code-vs-code)
   - [1.3. CÀI ĐẶT GIT](#13-cài-đặt-git)
   - [1.4. (TÙY CHỌN) CÀI GITHUB DESKTOP](#14-tùy-chọn-cài-github-desktop)

2. [TẠO REPO RỖNG TRÊN GITHUB](#2-tạo-repo-rỗng-trên-github)
3. [TẠO DỰ ÁN PLAYWRIGHT TRONG MÁY LOCAL](#3-tạo-dự-án-playwright-trong-máy-local)
4. [KẾT NỐI VỚI REPO GITHUB](#4-kết-nối-với-repo-github)
5. [GIẢI THÍCH CẤU TRÚC DỰ ÁN](#5-giải-thích-cấu-trúc-dự-án)
6. [GIẢI THÍCH FILE CẤU HÌNH PLAYWRIGHT.CONFIG.TS](#6-giải-thích-file-cấu-hình-playwrightconfigts)
7. [CHẠY SOURCE CODE](#7-chạy-source-code)
8. [VIẾT TEST CASE MẪU](#8-viết-test-case-mẫu)
9. [CÁC LỆNH GIT CƠ BẢN](#9-các-lệnh-git-cơ-bản)

## 1. CHUẨN BỊ MÔI TRƯỜNG

| Phần mềm               | Mục đích                                      | Link tải                                                         |
| ---------------------- | --------------------------------------------- | ---------------------------------------------------------------- |
| **Node.js (LTS)**      | Chạy được Playwright và dùng npm              | [https://nodejs.org/](https://nodejs.org/)                       |
| **Visual Studio Code** | Viết test script, debug                       | [https://code.visualstudio.com/](https://code.visualstudio.com/) |
| **Git**                | Quản lý mã nguồn, push/pull code              | [https://git-scm.com/downloads](https://git-scm.com/downloads)   |
| **GitHub Desktop**     | (Tùy chọn) Hỗ trợ thao tác Git bằng giao diện | [https://desktop.github.com/](https://desktop.github.com/)       |

> 💡 Ghi chú: Mặc dù có thể sử dụng giao diện GitHub Desktop để thực hiện các thao tác như push/pull một cách trực quan, mình khuyến khích sử dụng dòng lệnh Git để làm quen với thao tác cơ bản và hiểu rõ hơn về luồng làm việc với Git.

> 👉 Các lệnh Git quan trọng sẽ được giới thiệu chi tiết ở phần [8. Các lệnh git cơ bản](#-8-các-lệnh-git-cơ-bản).

### 1.1. CÀI ĐẶT NODE.JS (LTS)

B1: Truy cập [https://nodejs.org/](https://nodejs.org/)

B2: Chọn Node.js LTS (Recommended for most users) → tải file .msi (cho Windows) (đề xuất Windows 64-bit Installer)

B3: Mở file vừa tải và làm theo các bước cài đặt mặc định (Next → Next → Install)

B4: Sau khi cài xong, mở Command Prompt (window + R, gõ cmd rồi enter) -> và kiểm tra:

```bash
node -v
npm -v
```

Kết quả trả về version là thành công, ví dụ:

```
node -v ➔ v20.11.1
npm -v ➔ 10.2.4
```

### 1.2. CÀI VISUAL STUDIO CODE (VS CODE)

B1: Truy cập: [https://code.visualstudio.com/](https://code.visualstudio.com/)

B2: Tải bản Stable cho Windows

B3: Cài đặt:
Tick chọn "I accept the agreement" -> Click button "Next" --> Giữ các tùy chọn mặc định --> Install

B4: Mở VS Code, đề xuất cài thêm các extension sau:

- Playwright Test for VSCode
- ESLint
- Prettier - Code Formatter

_Cách cài extension:_ Vào tab Extensions (Ctrl+Shift+X) → gõ tên extension → bấm Install

### 1.3. CÀI ĐẶT GIT

B1: Truy cập: [https://git-scm.com/downloads](https://git-scm.com/downloads)

B2: Chọn hệ điều hành (Windows) → tải file "Git for Windows/x64 Setup" về

B3: Chạy cài đặt:

- Giữ tất cả thiết lập mặc định
- Bấm Next liên tục → Install → Finish

B4: Kiểm tra Git đã cài chưa:

```bash
git --version
```

Ví dụ kết quả:

```
git version 2.43.0.windows.1
```

### 1.4. (TÙY CHỌN) CÀI GITHUB DESKTOP

> 💡 Ghi chú: Mặc dù có thể sử dụng giao diện GitHub Desktop để thực hiện các thao tác như push/pull một cách trực quan, mình khuyến khích sử dụng dòng lệnh Git để làm quen với thao tác cơ bản và hiểu rõ hơn về luồng làm việc với Git.

> 👉 Các lệnh Git quan trọng sẽ được giới thiệu chi tiết ở phần [8. Các lệnh git cơ bản](#-8-các-lệnh-git-cơ-bản)

B1: Truy cập: [https://desktop.github.com/](https://desktop.github.com/)

B2: Nhấn Download for Windows

B3: Cài đặt → Mở ứng dụng → Đăng nhập tài khoản GitHub

B4: Từ đây, bạn có thể:

- Clone repo về máy (không cần dùng terminal)
- Commit, push, pull code bằng nút bấm

## 2. TẠO REPO RỖNG TRÊN GITHUB

Truy cập: [https://github.com](https://github.com)

Nhấn **+ > New repository**

Điền:

- **Repository name:** `playwright-demo` (tên tùy chọn)
- Chọn **Public** hoặc **Private**
- ❌ KHÔNG chọn “Initialize with README” (vì sẽ tạo repo rỗng)

Bấm **Create repository**

## 3. TẠO DỰ ÁN PLAYWRIGHT TRONG MÁY LOCAL

Mở Terminal (hoặc PowerShell):

```bash
# Tạo thư mục mới
mkdir playwright-demo
cd playwright-demo

# Khởi tạo Playwright
npm init playwright@latest
```

## 4. KẾT NỐI VỚI REPO GITHUB

Giả sử repo bạn tạo trên GitHub có đường dẫn:

`https://github.com/your-username/playwright-demo.git`

👉 Hãy thay _`your-username`_ và _`playwright-demo`_ bằng thông tin tài khoản và tên repo thực tế của bạn.

Ví dụ:
`https://github.com/mni-linh/playwright-demo.git`

Thêm remote Git và commit code đầu tiên:

```bash
# Khởi tạo Git
git init

# Add tất cả file
git add .

# Commit lần đầu
git commit -m "Initial commit with Playwright setup"

# Đặt nhánh chính tên là main (nếu chưa có)
git branch -M main

# Thêm remote GitHub
# 👉 Thay YOUR-USERNAME và REPO-NAME bằng thông tin thực tế của bạn
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Push lần đầu lên nhánh main
git push -u origin main
```

> 📜 _Lưu ý: Nếu bạn sử dụng GitHub Desktop, bạn có thể dễ dàng "Publish repository" trực tiếp từ ứng dụng. Tuy nhiên, mình vẫn khuyến khích làm quen với thao tác bằng dòng lệnh Git – đây là kỹ năng quan trọng sẽ được giới thiệu trong phần [8. Các lệnh git cơ bản](#-8-các-lệnh-git-cơ-bản). Vì vậy, phần này sẽ không đi sâu hướng dẫn bằng giao diện GitHub Desktop._

## 5. GIẢI THÍCH CẤU TRÚC DỰ ÁN

Sau khi bạn khởi tạo dự án bằng lệnh `npm init playwright@latest`, cấu trúc thư mục dự án sẽ trông như sau:

```md
playwright-demo/
├── tests/ # 📂 Chứa các file test script
│ └── example.spec.js # ✅ Test mẫu được tạo sẵn
├── playwright.config.ts # ⚙️ [File cấu hình chính của Playwright](#6-giải-thích-file-cấu-hình-playwrightconfigts)
├── package.json # 📦 Khai báo các dependency và script
├── package-lock.json # 🔒 Tự động tạo khi cài package (quản lý version cụ thể)
├── node_modules/ # 📁 Thư mục chứa các package đã cài (tự sinh ra sau `npm install`)
└── .gitignore # 🚫 Bỏ qua các file/thư mục không cần push lên Git
```

## 6. GIẢI THÍCH FILE CẤU HÌNH `playwright.config.ts`

File `playwright.config.ts` là nơi cấu hình các thông số quan trọng cho dự án Playwright. Dưới đây là giải thích chi tiết từng phần cấu hình:

### 🔹 Cấu trúc chính của file

```ts
import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
})
```

### 🔹 Giải thích các mục cấu hình chính

| Thuộc tính      | Giải thích                                                              |
| --------------- | ----------------------------------------------------------------------- |
| `testDir`       | Đường dẫn đến thư mục chứa các file test                                |
| `fullyParallel` | Cho phép chạy test song song giữa các file                              |
| `forbidOnly`    | Dùng để ngăn push code nếu còn `test.only` (thường dùng khi chạy CI/CD) |
| `retries`       | Số lần lặp lại nếu test fail (trên môi trường CI)                       |
| `workers`       | Số lượng worker dùng chạy test (CI thường là 1)                         |
| `reporter`      | Cách hiển thị kết quả test, `html` sẽ tạo file báo cáo đẹp              |
| `trace`         | Bật theo dõi chi tiết hành động khi test fail (rất hữu ích để debug)    |
| `projects`      | Cấu hình test trên nhiều trình duyệt khác nhau                          |

## 7. CHẠY SOURCE CODE

```bash
npx playwright test
```

Hoặc chạy từng file:

```bash
npx playwright test tests/example.spec.ts
```

---

## 8. VIẾT TEST CASE MẪU

Tạo file: `tests/example.spec.js`

```js
const { test, expect } = require("@playwright/test")

test("Check Wikipedia homepage title", async ({ page }) => {
  await page.goto("https://www.wikipedia.org")
  await expect(page).toHaveTitle(/Wikipedia/)
})
```

Chạy test:

```bash
npx playwright test
```

## 9. CÁC LỆNH GIT CƠ BẢN

```bash
git status               # Kiểm tra trạng thái file

git add .                # Thêm tất cả thay đổi vào staging

git commit -m "Message"  # Tạo commit mới

git push                 # Đẩy code lên GitHub

git pull                 # Kéo code mới nhất từ GitHub về

git branch               # Xem danh sách nhánh

git checkout -b tên-nhanh  # Tạo và chuyển sang nhánh mới

git switch main          # Chuyển về nhánh chính
```

> 💡 Ghi chú:
>
> - Đây là các lệnh Git cơ bản mà bạn nên làm quen khi mới bắt đầu sử dụng Git để quản lý source code.
>
> - Không cần phải học thuộc tất cả lệnh Git. Cứ dùng nhiều sẽ quen và khi cần thì hoàn toàn có thể tra cứu.
>
> - Nếu muốn tìm hiểu thêm, bạn có thể tham khảo tài liệu chính thức tại:
>   [Git official page](https://git-scm.com/docs)
> hoặc tài liệu tham khảo dễ hiểu hơn ở  [Bỏ túi 21 lệnh Git cơ bản - Fullstack.edu.vn](https://fullstack.edu.vn/blog/bo-tui-21-lenh-git-co-ban-cach-nho-giup-newdev-lam-chu-git-quan-ly-tot-ma-ngu)
