# 🌐 自定义域名配置指南

## 概述

本指南将帮助你为 Claude Code 学习计划配置自定义域名。

**当前默认地址**: https://chemark.github.io/claude-code-learning/

**配置后**: 你的自定义域名（如 claude-code.yourdomain.com）

---

## 前置要求

1. ✅ 拥有一个域名（从域名注册商购买）
2. ✅ 有权限修改域名的 DNS 设置
3. ✅ GitHub Pages 已启用

---

## 配置步骤

### 第 1 步：选择域名类型

你可以使用以下类型的域名：

**顶级域名**（Apex Domain）：
- `yourdomain.com`
- 需要配置 A 记录

**子域名**（Subdomain，推荐）：
- `claude-code.yourdomain.com`
- `learn.yourdomain.com`
- 只需配置 CNAME 记录，更简单

---

### 第 2 步：配置 DNS 记录

#### 方案 A：使用子域名（推荐）

在你的域名 DNS 管理面板中添加 CNAME 记录：

```
类型:  CNAME
名称:  claude-code  (或其他子域名)
值:    chemark.github.io
TTL:   3600 (或默认)
```

**示例（阿里云）**：
```
记录类型: CNAME
主机记录: claude-code
记录值:   chemark.github.io.  (注意末尾的点)
TTL:      10分钟
```

**示例（Cloudflare）**：
```
Type:    CNAME
Name:    claude-code
Target:  chemark.github.io
Proxy:   建议关闭（DNS only）
```

#### 方案 B：使用顶级域名

在你的域名 DNS 管理面板中添加 A 记录：

```
类型:  A
名称:  @
值:    185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
TTL:   3600
```

**注意**：GitHub Pages 需要配置 4 个 A 记录。

---

### 第 3 步：在 GitHub 配置自定义域名

#### 方法 1：通过 Web 界面

1. 访问 GitHub 仓库：https://github.com/chemark/claude-code-learning
2. 进入 **Settings** > **Pages**
3. 在 **Custom domain** 中输入你的域名
4. 点击 **Save**
5. 等待 DNS 检查通过（可能需要几分钟到几小时）
6. 勾选 **Enforce HTTPS**

#### 方法 2：通过 CNAME 文件

1. 将 `CNAME.example` 重命名为 `CNAME`
2. 编辑文件，写入你的域名：
   ```
   claude-code.yourdomain.com
   ```
3. 提交并推送：
   ```bash
   git add CNAME
   git commit -m "feat: 配置自定义域名"
   git push
   ```

---

### 第 4 步：验证配置

#### 检查 DNS 生效

```bash
# 检查 CNAME 记录
dig claude-code.yourdomain.com CNAME

# 或使用 nslookup
nslookup claude-code.yourdomain.com

# 应该返回: chemark.github.io
```

#### 检查 A 记录（如果使用顶级域名）

```bash
dig yourdomain.com A

# 应该返回 GitHub Pages 的 4 个 IP 地址
```

#### 访问网站

等待 DNS 传播（通常 5-30 分钟，最长可能 48 小时），然后访问：

```
https://你的域名
```

---

## 常见问题

### Q1: DNS 配置后多久生效？

**答案**：
- 通常 5-30 分钟
- 最长可能需要 48 小时
- 可以使用 https://www.whatsmydns.net/ 检查全球 DNS 传播状态

### Q2: GitHub 显示 "DNS check failed"

**可能原因**：
1. DNS 记录配置错误
2. DNS 还未生效
3. CNAME 文件内容错误

**解决方法**：
1. 检查 DNS 记录是否正确
2. 等待更长时间
3. 删除并重新配置自定义域名

### Q3: HTTPS 无法启用

**答案**：
- 需要先等待 DNS 验证通过
- GitHub 会自动申请 Let's Encrypt 证书
- 通常需要几分钟到几小时

### Q4: www 和非 www 如何处理？

**答案**：

**选项 1**：只使用 www
```
CNAME 文件内容: www.yourdomain.com
DNS 配置: CNAME www -> chemark.github.io
```

**选项 2**：只使用非 www
```
CNAME 文件内容: yourdomain.com
DNS 配置: A @ -> GitHub IPs (4个)
```

**选项 3**：同时支持（推荐）
```
CNAME 文件: www.yourdomain.com
DNS:
  - A @ -> GitHub IPs
  - CNAME www -> chemark.github.io
```

### Q5: 已有域名在用，可以用子域名吗？

**答案**：可以！推荐使用子域名，如：
- `learn.yourdomain.com`
- `claude-code.yourdomain.com`
- `docs.yourdomain.com`

---

## 推荐配置

### 最佳实践

1. **使用子域名**：更灵活，配置简单
2. **启用 HTTPS**：安全且 SEO 友好
3. **合理的 TTL**：600-3600 秒
4. **如果使用 Cloudflare**：
   - 关闭代理（DNS only）
   - 或配置 Page Rules 兼容 GitHub Pages

### 推荐的域名

适合学习项目的子域名：
- `learn.yourdomain.com`
- `tutorial.yourdomain.com`
- `code.yourdomain.com`
- `claude.yourdomain.com`

---

## 示例配置

### 示例 1：阿里云域名

**域名**：`example.com`，想用 `claude.example.com`

**DNS 配置**：
```
记录类型: CNAME
主机记录: claude
记录值:   chemark.github.io.
TTL:      600
```

**CNAME 文件**：
```
claude.example.com
```

### 示例 2：Cloudflare

**域名**：`example.com`，想用 `learn.example.com`

**Cloudflare 配置**：
```
Type:    CNAME
Name:    learn
Content: chemark.github.io
Proxy:   DNS only (关闭橙色云朵)
TTL:     Auto
```

**CNAME 文件**：
```
learn.example.com
```

---

## 回滚到默认域名

如果想取消自定义域名：

1. **删除 CNAME 文件**：
   ```bash
   git rm CNAME
   git commit -m "chore: 移除自定义域名"
   git push
   ```

2. **或在 GitHub 设置中清空 Custom domain**

网站将恢复使用默认地址：
`https://chemark.github.io/claude-code-learning/`

---

## 需要帮助？

- 📖 [GitHub Pages 官方文档](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- 💬 [提交 Issue](https://github.com/chemark/claude-code-learning/issues)
- 🔍 [检查 DNS 传播](https://www.whatsmydns.net/)

---

**提示**：不配置自定义域名也完全可以使用！默认的 GitHub Pages 地址同样可以正常访问。
