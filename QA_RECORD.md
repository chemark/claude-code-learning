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
