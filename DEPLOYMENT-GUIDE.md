# Prawn Popper 网站部署指南

## ✅ 已完成的功能

### 1. 新增照片
- ✅ 添加了夜市摊位照片（品牌故事区域）
- ✅ 添加了包装虾片照片（产品特色区域）
- 📁 图片需要保存在 `images/` 文件夹中：
  - `images/night-market-stall.jpg` (夜市摊位照片)
  - `images/packaged-crackers.jpg` (包装虾片照片)

### 2. 邮件发送功能
- ✅ 使用 **FormSubmit.co** 免费服务
- ✅ 表单自动发送至：`australiaprawnpopper@gmail.com`
- ✅ 无需服务器端代码
- ⚠️ **重要**: 首次提交后需要验证邮箱（FormSubmit会发送确认邮件）

---

## 💰 使用 CrazyDomains 部署网站 - 最经济方案

### 方案对比

| 方案 | 月费用 | 适合场景 | 优点 | 缺点 |
|------|--------|----------|------|------|
| **方案1: GitHub Pages** | **免费** | 小型静态网站 | 完全免费、稳定可靠 | 需要GitHub账户 |
| **方案2: Netlify/Vercel** | **免费** | 现代静态网站 | 免费、自动部署、CDN | 需要注册账户 |
| **方案3: CrazyDomains 基础托管** | ~$5-8 AUD/月 | 需要cPanel管理 | 传统虚拟主机、易用 | 有月费 |

---

## 🎯 推荐方案：GitHub Pages + CrazyDomains域名（最经济）

### 总成本：
- **域名**: ~$15-30 AUD/年（在CrazyDomains购买）
- **托管**: **$0**（使用GitHub Pages）
- **总计**: ~$15-30 AUD/年

### 步骤详解：

#### 第1步：在 CrazyDomains 购买域名
1. 访问 [crazydomains.com.au](https://www.crazydomains.com.au)
2. 搜索并购买域名（如：`prawnpopper.com.au`）
3. **只购买域名，不需要购买托管服务**

#### 第2步：准备网站文件
1. 创建文件夹结构：
```
prawn-popper-website/
├── index.html                    (重命名 prawn-popper-website-final.html)
└── images/
    ├── night-market-stall.jpg    (您的夜市摊位照片)
    └── packaged-crackers.jpg     (您的包装虾片照片)
```

2. 将您上传的两张照片保存到 `images/` 文件夹中

#### 第3步：创建 GitHub 仓库（免费）
1. 访问 [github.com](https://github.com) 并注册账户（免费）
2. 点击 "New Repository"
3. 仓库名称：`prawn-popper-website`
4. 选择 "Public"（公开）
5. 点击 "Create repository"

#### 第4步：上传文件到 GitHub
**方法A - 使用网页界面（简单）：**
1. 在您的仓库页面，点击 "Add file" > "Upload files"
2. 拖拽所有文件（index.html 和 images 文件夹）
3. 点击 "Commit changes"

**方法B - 使用 GitHub Desktop（推荐）：**
1. 下载 [GitHub Desktop](https://desktop.github.com/)
2. Clone 您的仓库
3. 将所有文件复制到本地仓库文件夹
4. Commit 并 Push 到 GitHub

#### 第5步：启用 GitHub Pages
1. 在您的 GitHub 仓库，进入 "Settings"
2. 点击左侧 "Pages"
3. 在 "Source" 下，选择 "main" 分支
4. 点击 "Save"
5. 等待1-2分钟，您的网站将在 `https://您的用户名.github.io/prawn-popper-website` 上线

#### 第6步：连接 CrazyDomains 域名
1. 登录 CrazyDomains 账户
2. 进入域名管理 > DNS 设置
3. 添加以下 DNS 记录：

**A记录（用于根域名）：**
```
Type: A
Host: @
Value: 185.199.108.153
TTL: 3600
```

**CNAME记录（用于www）：**
```
Type: CNAME
Host: www
Value: 您的用户名.github.io
TTL: 3600
```

4. 在 GitHub 仓库中创建文件 `CNAME`（无扩展名）
5. 在文件中写入您的域名：`www.prawnpopper.com.au`
6. Commit 文件

#### 第7步：等待DNS生效
- 通常需要 **1-24小时**
- 之后您的网站将在 `www.prawnpopper.com.au` 可访问

---

## 🔧 备选方案：使用 Netlify（推荐）

### 优点：
- ✅ 完全免费
- ✅ 更简单的域名连接
- ✅ 自动HTTPS证书
- ✅ 拖拽上传文件

### 步骤：
1. 访问 [netlify.com](https://www.netlify.com)
2. 注册免费账户
3. 点击 "Add new site" > "Deploy manually"
4. 拖拽您的网站文件夹到页面
5. 在 "Domain settings" 中添加您的 CrazyDomains 域名
6. 按照 Netlify 的指示在 CrazyDomains 中设置 DNS

---

## 📧 表单邮件设置

### 首次使用 FormSubmit：
1. 部署网站后，访问申请表单页面
2. 填写并提交一次测试表单
3. FormSubmit 会发送确认邮件到 `australiaprawnpopper@gmail.com`
4. 点击邮件中的确认链接
5. 之后所有表单提交都会自动发送到该邮箱

### 邮件内容包含：
- 申请人姓名
- 电话号码
- 邮箱地址
- 城市
- 投资预算
- 商业经验
- 留言内容

---

## 📝 替换图片说明

在 `prawn-popper-website-final.html` 中，找到以下代码并确保图片路径正确：

```html
<!-- 夜市摊位照片 -->
<img src="images/night-market-stall.jpg" alt="Prawn Popper Night Market Stall" class="story-image">

<!-- 包装虾片照片 -->
<img src="images/packaged-crackers.jpg" alt="Packaged Prawn Crackers" class="feature-image">
```

**重要**: 将您上传的两张照片重命名为：
- 第一张（夜市排队）：`night-market-stall.jpg`
- 第二张（包装虾片）：`packaged-crackers.jpg`

---

## 💡 成本总结

### 最经济方案（推荐）：
- **域名**（CrazyDomains）: $15-30/年
- **托管**（GitHub Pages/Netlify）: **免费**
- **邮件服务**（FormSubmit）: **免费**
- **SSL证书**: **免费**（自动提供）

**年度总成本**: ~$20 AUD

### vs. 传统托管方案：
- 域名 + 虚拟主机: $60-100/年
- **节省**: 60-75%

---

## 🆘 需要帮助？

如果在部署过程中遇到问题：
1. GitHub Pages文档: https://pages.github.com/
2. Netlify文档: https://docs.netlify.com/
3. CrazyDomains支持: https://www.crazydomains.com.au/help/

---

## ✨ 下一步

网站上线后，您可以：
1. 在 Google Search Console 注册网站以提高SEO
2. 添加 Google Analytics 跟踪访客
3. 定期检查邮箱以回复加盟申请

祝您的 Prawn Popper 加盟网站成功！🦐🎉
