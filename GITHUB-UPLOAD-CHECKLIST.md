# 📋 GitHub 上传文件清单

## ✅ 必须上传的文件和文件夹

### 📄 根目录配置文件（13个文件）
- ✅ `package.json` - 项目依赖配置
- ✅ `index.html` - 网站入口文件 ⭐
- ✅ `vite.config.ts` - Vite 构建配置
- ✅ `postcss.config.mjs` - PostCSS 配置
- ✅ `netlify.toml` - Netlify 部署配置 ⭐
- ✅ `.gitignore` - Git 忽略规则 ⭐
- ✅ `README.md` - 项目说明文档
- ✅ `NETLIFY-DEPLOYMENT.md` - 部署指南
- ✅ `ATTRIBUTIONS.md` - 版权声明
- ✅ `DEPLOYMENT-GUIDE.md` - 部署指南
- ✅ `IMAGE-SETUP-INSTRUCTIONS.md` - 图片设置说明
- ✅ `PHOTO-MODULES-GUIDE.md` - 照片模块指南
- ✅ `tsconfig.json` - TypeScript 配置（如果有）

### 📁 src/ 文件夹（所有内容）

#### src/app/
- ✅ `main.tsx` - React 入口文件 ⭐
- ✅ `App.tsx` - 主应用组件

#### src/app/components/ （12个组件）
- ✅ `Header.tsx`
- ✅ `Hero.tsx`
- ✅ `BrandStory.tsx`
- ✅ `ProductFeatures.tsx`
- ✅ `WhyCustomersLove.tsx`
- ✅ `WhyFranchise.tsx`
- ✅ `ProfitPotential.tsx`
- ✅ `FranchiseSupport.tsx`
- ✅ `HowToStart.tsx`
- ✅ `ApplicationForm.tsx`
- ✅ `Footer.tsx`

#### src/app/components/figma/
- ✅ `ImageWithFallback.tsx`

#### src/app/components/ui/ （整个文件夹）
- ✅ 所有 `.tsx` 和 `.ts` 文件（约50个UI组件）

#### src/app/hooks/
- ✅ `useInView.ts`

#### src/styles/ （所有CSS文件）
- ✅ `index.css`
- ✅ `tailwind.css`
- ✅ `theme.css`
- ✅ `fonts.css`

### 📁 其他可能的文件夹
- ✅ `public/` - 静态资源（如果有）
- ✅ `src/imports/` - 导入的图片和SVG（如果有）

---

## ❌ 不要上传的文件/文件夹

这些已在 `.gitignore` 中，**GitHub Desktop 会自动忽略**：

- ❌ `node_modules/` - 依赖包（太大，会自动安装）
- ❌ `dist/` - 构建输出（部署时自动生成）
- ❌ `.DS_Store` - macOS 系统文件
- ❌ `.env` - 环境变量（如果有）
- ❌ `.netlify/` - Netlify 缓存
- ❌ `*.log` - 日志文件

---

## 🚀 上传方法（3种方式任选）

### 方法 1：GitHub Desktop（最简单，推荐）⭐

#### 第一步：下载安装
1. 访问 [desktop.github.com](https://desktop.github.com)
2. 下载并安装 GitHub Desktop
3. 用 GitHub 账号登录

#### 第二步：创建仓库
1. 点击 `File` → `New Repository`
2. 填写信息：
   - **Name**: `prawn-popper-website`
   - **Local path**: 选择您的项目文件夹
   - **Git ignore**: Node
   - **License**: None（或选择 MIT）
3. 点击 `Create Repository`

#### 第三步：发布到 GitHub
1. 点击右上角 `Publish repository`
2. 取消勾选 "Keep this code private"（或保持私有）
3. 点击 `Publish Repository`

✅ **完成！所有文件已上传！**

---

### 方法 2：GitHub 网页拖拽上传

#### 第一步：创建仓库
1. 访问 [github.com](https://github.com)
2. 点击右上角 `+` → `New repository`
3. 仓库名：`prawn-popper-website`
4. 选择 Public 或 Private
5. **不要勾选** "Add a README file"
6. 点击 `Create repository`

#### 第二步：准备文件
1. 打开您的项目文件夹
2. **删除这些文件夹**（如果存在）：
   - `node_modules/`
   - `dist/`
   - `.DS_Store`

#### 第三步：上传文件
1. 在新创建的仓库页面，点击 `uploading an existing file`
2. **将所有文件和文件夹拖拽到页面**
3. 等待上传完成（可能需要几分钟）
4. 在底部填写：
   - Commit message: `Initial commit - Prawn Popper website`
5. 点击 `Commit changes`

✅ **完成！**

**注意**：这种方法可能不支持上传太多文件，推荐使用 GitHub Desktop。

---

### 方法 3：Git 命令行（适合开发者）

```bash
# 1. 初始化 Git 仓库
git init

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "Initial commit - Prawn Popper website"

# 4. 添加远程仓库（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/prawn-popper-website.git

# 5. 推送到 GitHub
git push -u origin main
```

---

## 🔍 验证上传成功

访问您的 GitHub 仓库，应该看到：

```
prawn-popper-website/
├── index.html ⭐
├── package.json ⭐
├── netlify.toml ⭐
├── .gitignore
├── README.md
├── vite.config.ts
├── src/
│   ├── app/
│   │   ├── main.tsx ⭐
│   │   ├── App.tsx
│   │   └── components/
│   └── styles/
└── 其他文件...
```

**重点检查**：
- ✅ `index.html` 在根目录
- ✅ `src/app/main.tsx` 存在
- ✅ `netlify.toml` 存在
- ✅ `package.json` 存在
- ❌ 没有 `node_modules/` 文件夹

---

## 🎯 快速总结

### 简单来说，上传这些：

1. **所有根目录文件**（配置文件、HTML、MD文档）
2. **整个 src/ 文件夹**（所有代码）
3. **public/ 文件夹**（如果有静态资源）
4. **其他文档和配置文件**

### 不要上传：
- `node_modules/` - 太大，没必要
- `dist/` - 构建产物，会自动生成

---

## 📞 遇到问题？

### Q1: 文件太多，上传失败？
**A**: 使用 **GitHub Desktop**，它能处理大量文件。

### Q2: 提示 "file too large"？
**A**: 检查是否误上传了 `node_modules/`，删除后重试。

### Q3: 不确定某个文件要不要上传？
**A**: **入乡随俗原则**：如果是代码、配置、文档 → 上传；如果是缓存、日志、依赖包 → 不上传。

---

## ✅ 准备好了吗？

推荐流程：
1. ✅ 安装 **GitHub Desktop**
2. ✅ 创建仓库并发布
3. ✅ 连接 **Netlify**（下一步）

**上传完成后告诉我，我帮您配置 Netlify！** 🚀
