# Hướng dẫn thiết lập dự án Playwright cơ bản cho người mới bắt đầu

## 1. CHUẨN BỊ MÔI TRƯỜNG

| Phần mềm               | Mục đích                                      | Link tải                                                         |
| ---------------------- | --------------------------------------------- | ---------------------------------------------------------------- |
| **Node.js (LTS)**      | Chạy được Playwright và dùng npm              | [https://nodejs.org/](https://nodejs.org/)                       |
| **Visual Studio Code** | Viết test script, debug                       | [https://code.visualstudio.com/](https://code.visualstudio.com/) |
| **Git**                | Quản lý mã nguồn, push/pull code              | [https://git-scm.com/downloads](https://git-scm.com/downloads)   |
| **GitHub Desktop**     | (Tùy chọn) Hỗ trợ thao tác Git bằng giao diện | [https://desktop.github.com/](https://desktop.github.com/)       |

> 💡 **Ghi chú:** Khuyến khích sử dụng dòng lệnh Git thay vì giao diện GitHub Desktop để làm quen thao tác Git cơ bản. Tuy nhiên, với người mới, có thể dùng GitHub Desktop để hình dung luồng push/pull trước khi chuyển sang dòng lệnh.

---

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

---

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

---

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

---

### 1.4. (TÙY CHỌN) CÀI GITHUB DESKTOP

> 👉 Dành cho người mới chưa quen dòng lệnh. Tuy nhiên nên chuyển dần sang dùng terminal để hiểu rõ Git hơn, vì vậy mình sẽ không hướng dẫn quá chi tiết cho phần này.

B1: Truy cập: [https://desktop.github.com/](https://desktop.github.com/)

B2: Nhấn Download for Windows

B3: Cài đặt → Mở ứng dụng → Đăng nhập tài khoản GitHub

B4: Từ đây, bạn có thể:

- Clone repo về máy (không cần dùng terminal)
- Commit, push, pull code bằng nút bấm

---

## 2. TẠO REPO RỖNG TRÊN GITHUB

Truy cập: [https://github.com](https://github.com)

Nhấn **+ > New repository**

Điền:

- **Repository name:** `playwright-demo` (tên tùy chọn)
- Chọn **Public** hoặc **Private**
- ❌ KHÔNG chọn “Initialize with README” (vì sẽ tạo repo rỗng)

Bấm **Create repository**

---

## 3. TẠO DỰ ÁN PLAYWRIGHT TRONG MÁY LOCAL

Mở Terminal (hoặc PowerShell):

```bash
# Tạo thư mục mới
mkdir playwright-demo
cd playwright-demo

# Khởi tạo Playwright
npm init playwright@latest
```

---

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

> 📜 _Lưu ý: Nếu bạn dùng GitHub Desktop, cũng có thể Publish repository từ app luôn, đơn giản hơn nhưng mình vẫn khuyến khích làm quen với câu lệnh git, nên mình sẽ không hướng dẫn chi tiết ở phần này._

---

## 5. GIẢI THÍCH CẤU TRÚC DỰ ÁN

Sau khi bạn khởi tạo dự án bằng lệnh `npm init playwright@latest`, cấu trúc thư mục dự án sẽ trông như sau:

```md
playwright-demo/
├── tests/                    # Chứa các file test script
│   └── example.spec.js       # Test mẫu được tạo sẵn
├── playwright.config.ts     # File cấu hình chính của Playwright
├── package.json             # Khai báo các dependency và script
├── package-lock.json        # Tự động tạo khi cài package (quản lý version cụ thể)
├── node_modules/            # Thư mục chứa các package đã cài (Tự động sinh ra sau khi npm install, chứa các thư viện cần thiết để chạy test)
└── .gitignore               # Bỏ qua các file/thư mục không cần push lên Git
```

---

## 6. CHẠY SOURCE CODE

```bash
npx playwright test
```

Hoặc chạy từng file:

```bash
npx playwright test tests/example.spec.ts
```

---

## 7. VIẾT TEST CASE MẪU

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

---

## 8. CÁC LỆNH GIT CƠ BẢN

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
