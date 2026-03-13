# 🚀 Prawn Popper 网站 Netlify 部署指南

## 📋 部署前准备清单

- [ ] 已在 CrazyDomains 购买域名 `prawnpopper.com.au` ✅
- [ ] 拥有 GitHub 账号（用于登录 Netlify）
- [ ] Google Forms 已配置完成 ✅

---

## 方法一：通过 GitHub 部署（推荐）

### 第 1 步：创建 GitHub 仓库

1. 访问 [github.com](https://github.com) 并登录
2. 点击右上角 `+` → `New repository`
3. 仓库名称：`prawn-popper-website`
4. 设为 **Public** 或 **Private**（都可以）
5. 点击 `Create repository`

### 第 2 步：上传代码到 GitHub

**选项 A：使用 GitHub 网页上传**
1. 在新仓库页面，点击 `uploading an existing file`
2. 将 Figma Make 项目中的所有文件拖拽到页面
3. 等待上传完成
4. 点击 `Commit changes`

**选项 B：使用 GitHub Desktop（更简单）**
1. 下载并安装 [GitHub Desktop](https://desktop.github.com)
2. 登录您的 GitHub 账号
3. `File` → `Add Local Repository` → 选择项目文件夹
4. 点击 `Publish repository`

### 第 3 步：连接 Netlify

1. 访问 [netlify.com](https://netlify.com)
2. 点击 `Sign up` 用 GitHub 账号登录
3. 点击 `Add new site` → `Import an existing project`
4. 选择 `Deploy with GitHub`
5. 授权 Netlify 访问您的 GitHub
6. 选择 `prawn-popper-website` 仓库

### 第 4 步：配置构建设置

Netlify 会自动检测设置，确认以下信息：

```
Build command: npm run build
Publish directory: dist
```

点击 `Deploy site`，等待 2-3 分钟！

---

## 方法二：手动拖拽部署（最简单但不推荐长期使用）

### 第 1 步：本地构建项目

如果您有 Node.js 环境：

```bash
# 在项目目录打开终端
npm install
npm run build
```

这会生成一个 `dist` 文件夹。

### 第 2 步：部署到 Netlify

1. 访问 [netlify.com](https://netlify.com) 并登录
2. 点击 `Add new site` → `Deploy manually`
3. 将 `dist` 文件夹拖拽到页面
4. 等待上传完成

**注意**：这种方法每次更新都需要手动上传。

---

## 🌐 添加自定义域名 prawnpopper.com.au

### 在 Netlify 中配置

1. 部署完成后，进入站点 → `Domain settings`
2. 点击 `Add custom domain`
3. 输入：`prawnpopper.com.au`
4. 点击 `Verify` → `Add domain`
5. 再次点击 `Add domain` 添加 `www.prawnpopper.com.au`

### 记录 Netlify 信息

Netlify 会显示您的站点信息：
- **临时网址**：`your-site-name.netlify.app`
- **Load balancer IP**：`75.2.60.5`

---

## 🔧 在 CrazyDomains 配置 DNS

### 第 1 步：登录 CrazyDomains

1. 访问 [crazydomains.com.au](https://www.crazydomains.com.au)
2. 登录账号
3. 进入 `My Account` → `Domain Names`
4. 找到 `prawnpopper.com.au` → 点击 `Manage`

### 第 2 步：修改 DNS 设置

找到 `DNS Settings` 或 `DNS Management`：

#### 删除现有记录
- 删除所有现有的 A 记录
- 删除所有现有的 CNAME 记录（保留 MX 邮件记录）

#### 添加新记录

| 类型 | 名称/主机 | 值/目标 | TTL |
|------|----------|---------|-----|
| A | @ | `75.2.60.5` | 3600 |
| CNAME | www | `your-site-name.netlify.app` | 3600 |

**重要提示**：
- `@` 代表根域名
- `your-site-name.netlify.app` 替换成您的实际 Netlify 域名
- 有些 DNS 面板可能要求 CNAME 值末尾加 `.`（点）

### 第 3 步：保存并等待

- 点击 `Save` 或 `Update`
- DNS 生效时间：**1-48 小时**（通常 2-6 小时）

---

## 🔐 启用 HTTPS（免费 SSL 证书）

### 在 Netlify 中启用

1. 返回 Netlify → `Domain settings`
2. 等待 DNS 检查通过（显示绿色 ✓）
3. 滚动到 `HTTPS` 部分
4. 点击 `Verify DNS configuration`
5. 点击 `Provision certificate`
6. 等待 1-2 分钟，证书自动配置

✅ 完成！您的网站现在有 HTTPS 加密。

---

## ✅ 验证部署

### 检查 DNS 生效

访问 [whatsmydns.net](https://whatsmydns.net)：
- 输入 `prawnpopper.com.au`
- 选择 `A` 记录类型
- 查看全球不同位置的 DNS 解析结果

### 测试网站功能

- ✅ 访问 `https://www.prawnpopper.com.au`
- ✅ 访问 `https://prawnpopper.com.au`（应自动跳转到 www）
- ✅ 测试所有 8 个功能模块
- ✅ 提交加盟申请表单，检查 Google Forms 是否收到数据

---

## 🔄 更新网站内容

### 如果使用 GitHub 部署：
1. 修改代码
2. 提交到 GitHub
3. Netlify 自动重新部署（2-3 分钟）

### 如果使用手动部署：
1. 重新构建项目（`npm run build`）
2. 上传新的 `dist` 文件夹到 Netlify

---

## 📊 Netlify 功能

部署后您可以使用：

- **Analytics**：网站访问统计
- **Forms**：表单提交管理（可替代 Google Forms）
- **Functions**：无服务器函数
- **Deploy previews**：预览更改
- **Rollbacks**：回滚到之前版本

---

## 🆘 常见问题

### Q1: 网站显示 404 错误
**A**: 检查 `netlify.toml` 文件是否正确上传，确保包含重定向规则。

### Q2: DNS 配置后网站无法访问
**A**: 
- 等待 DNS 生效（最长 48 小时）
- 在 [whatsmydns.net](https://whatsmydns.net) 检查 DNS 传播
- 确认 CrazyDomains 中的 IP 地址正确（`75.2.60.5`）

### Q3: HTTPS 证书无法生成
**A**: 
- 确认 DNS 已完全生效
- 在 Netlify 中点击 `Verify DNS configuration`
- 等待几分钟后重试

### Q4: 表单提交后没有收到 Google Forms 数据
**A**: 
- 检查 `ApplicationForm.tsx` 中的表单 action URL
- 确认 Google Forms 设置正确

### Q5: www 和非 www 都要配置吗？
**A**: 是的！配置两个，Netlify 会自动处理重定向到主域名。

---

## 📞 需要帮助？

如果遇到任何问题：

1. **Netlify 社区**：[community.netlify.com](https://community.netlify.com)
2. **Netlify 文档**：[docs.netlify.com](https://docs.netlify.com)
3. **CrazyDomains 支持**：客服电话或在线聊天

---

## 🎉 恭喜！

完成所有步骤后，您的网站将在：
- **https://www.prawnpopper.com.au**
- **https://prawnpopper.com.au**

正式上线运营！🦐✨
