# Claude Code 学习记录

## Q1: 什么是GitHub集成？

**提问时间**: 2025-10-04

**回答**:

Claude Code 通过 MCP (Model Context Protocol) 提供了强大的 GitHub 集成功能，可以直接在对话中操作 GitHub，无需切换到浏览器或命令行。

### 主要功能

**仓库管理**
- 创建、fork、搜索仓库
- 查看文件内容、分支、标签
- 管理 star 收藏

**Issues 管理**
- 列出、搜索、创建、更新 issues
- 添加评论、标签、分配人员
- 管理子 issues

**Pull Requests**
- 创建、更新、合并 PR
- 查看 PR diff 和文件变更
- 添加审查评论
- 请求 Copilot 代码审查

**工作流 & CI/CD**
- 查看 workflow 运行状态
- 下载失败任务的日志
- 重新运行失败的任务
- 手动触发 workflow

**通知管理**
- 查看 GitHub 通知
- 标记已读/完成
- 管理订阅

**安全**
- 查看安全警告（Dependabot、代码扫描、密钥扫描）
- 查看安全建议

### 使用示例

```bash
# 示例命令（通过对话实现）
"列出 facebook/react 仓库最近的 issues"
"在我的仓库创建一个新 PR"
"查看我的 GitHub 通知"
"搜索包含 'machine learning' 的 Python 仓库"
```

### 优势

- 无需离开 CLI 环境
- 自动处理认证
- 支持复杂查询和批量操作
- 与代码操作无缝结合

### Q1.1: 通过哪个 MCP 提供 GitHub 集成？

**回答**:

GitHub 集成是通过名为 **`github`** 的 MCP Server 提供的。

这个 MCP Server 提供了 100+ 个工具函数，所有工具都以 `mcp__github__` 前缀命名，例如：

- `mcp__github__list_issues` - 列出 issues
- `mcp__github__create_pull_request` - 创建 PR
- `mcp__github__get_file_contents` - 获取文件内容
- `mcp__github__search_repositories` - 搜索仓库
- `mcp__github__list_notifications` - 查看通知

**配置方式**:

MCP Server 需要在 Claude Code 的配置中设置，通常包括：
1. GitHub 个人访问令牌 (Personal Access Token)
2. MCP Server 连接配置

**工具选择指南**（来自 MCP Server 说明）:
- 使用 `list_*` 工具：用于广泛、简单的检索和分页（如所有 issues、所有 PRs）
- 使用 `search_*` 工具：用于带特定条件、关键词或复杂过滤的目标查询

---

## Q2: .claude 文件夹是干什么用的？

**提问时间**: 2025-10-13

**回答**:

**.claude 文件夹** 是 **Claude Code 的项目级配置目录**，用于存放当前项目的专属配置和自定义功能。

### 📂 .claude 文件夹的作用

**1. 项目上下文（Project Memory）**
- `CLAUDE.md` - 项目级配置文件
- Claude Code 会自动读取这个文件，了解项目信息、代码规范、工作流程等
- 每次对话都会加载这个上下文

**2. 自定义 Slash Commands**
- `commands/` 文件夹 - 存放自定义命令
- 你的项目有 6 个命令：`/progress`, `/study`, `/exercise`, `/debug`, `/review`, `/tips`
- 每个 `.md` 文件对应一个命令

**3. 配置文档**
- `MEMORY_SETUP_GUIDE.md` - Memory 系统配置指南
- `USER_MEMORY_TEMPLATE.md` - User Memory 模板
- `git-optimization-rules.md` - Git 操作优化规则

**4. 本地设置**
- `settings.local.json` - 项目本地配置（不提交到 Git）

### 🎯 为什么需要 .claude 文件夹？

```
没有 .claude/：Claude 对项目一无所知
有 .claude/：  Claude 了解项目背景、规范、专有命令
```

### 📁 目录结构

```
.claude/
├── CLAUDE.md                    # 项目配置（Project Memory）
├── commands/                    # 自定义命令
│   ├── progress.md             # /progress 命令
│   ├── study.md                # /study 命令
│   ├── exercise.md             # /exercise 命令
│   ├── debug.md                # /debug 命令
│   ├── review.md               # /review 命令
│   └── tips.md                 # /tips 命令
├── MEMORY_SETUP_GUIDE.md       # Memory 配置指南
├── USER_MEMORY_TEMPLATE.md     # User Memory 模板
├── git-optimization-rules.md   # Git 优化规则
└── settings.local.json         # 本地配置
```

---

## Q3: 为什么会出现两个 .DS_Store 文件？

**提问时间**: 2025-10-13

**回答**:

**.DS_Store** 是 **macOS 系统自动创建的隐藏文件**，用于存储文件夹的视图选项、图标位置等信息。

### 📁 为什么有两个？

从项目结构看：
1. **/.claude/.DS_Store** - `.claude` 文件夹的视图设置
2. **/.DS_Store** - 项目根目录的视图设置

**原因**：
- macOS 会在**每个被打开过的文件夹**中创建 `.DS_Store`
- 你用 Finder 打开过根目录和 `.claude` 文件夹
- 所以两个文件夹都有自己的 `.DS_Store`

### 🗑️ 需要处理吗？

**推荐做法**：

**1. 添加到 .gitignore**（避免提交到 Git）
```bash
echo ".DS_Store" >> .gitignore
```

**2. 从 Git 历史中删除**（如果已经提交了）
```bash
git rm --cached .DS_Store .claude/.DS_Store
git commit -m "Remove .DS_Store files"
```

**3. 全局忽略**（一劳永逸，推荐）
```bash
echo ".DS_Store" >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

### ⚠️ .DS_Store 的问题

- ✅ 对项目功能无影响
- ❌ 会污染 Git 历史
- ❌ 可能暴露文件夹结构信息
- 📌 **建议**：添加到 .gitignore 忽略掉

### 💡 扩展知识

**.DS_Store 包含什么信息？**
- 文件夹图标位置
- 背景图片设置
- 文件排序方式
- 视图模式（图标、列表、分栏、画廊）
- 窗口大小和位置

**类似文件**：
- Windows: `Thumbs.db`, `desktop.ini`
- Linux: `.directory` (KDE)

---

## Q4: 如何全局忽略 .DS_Store 文件？

**提问时间**: 2025-10-13

**问题描述**: 采用建议全局忽略 .DS_Store 文件

**回答**:

### 🎯 解决方案

使用 Git 的全局忽略配置，一次设置，所有仓库生效。

### 📝 配置步骤

**步骤 1：创建全局忽略文件**
```bash
echo ".DS_Store" >> ~/.gitignore_global
```

**步骤 2：配置 Git 使用该文件**
```bash
git config --global core.excludesfile ~/.gitignore_global
```

**步骤 3：验证配置**
```bash
git config --global core.excludesfile
# 输出：/Users/xingshuhao/.gitignore_global
```

### ✅ 配置结果

**文件位置**: `~/.gitignore_global`
**文件内容**: `.DS_Store`
**生效范围**: 所有 Git 仓库

### 📊 项目检查结果

- ✅ 本项目中没有 .DS_Store 文件被 Git 追踪
- ✅ 以后所有 Git 操作都会自动忽略 .DS_Store
- ✅ 不需要在每个项目单独配置

### 💡 扩展：全局忽略其他文件

可以继续添加其他常见的系统文件：

```bash
cat >> ~/.gitignore_global <<'IGNORE'
# macOS
.DS_Store
.AppleDouble
.LSOverride

# Windows
Thumbs.db
desktop.ini

# Linux
.directory

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
IGNORE
```

### 🎯 优势

1. **一次配置，永久生效** - 所有项目自动应用
2. **保持项目 .gitignore 整洁** - 不需要每个项目都添加
3. **团队协作友好** - 个人系统文件不影响团队
4. **跨项目一致性** - 统一的忽略规则

---
