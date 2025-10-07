# 模块 6：外部集成 - MCP 与 Sub-Agents

## 📋 学习目标

- ✅ 理解 MCP (Model Context Protocol) 的概念和价值
- ✅ 学会配置和使用 MCP 服务器
- ✅ 掌握 Sub-Agents 的使用场景
- ✅ 实现复杂任务的智能分解与协调

## 🎯 什么是 MCP？

### Model Context Protocol

MCP 是一个**开放协议**，让 AI 应用（如 Claude Code）能够与外部工具和服务交互。

**类比**：
- USB 协议 → 连接各种硬件设备
- MCP 协议 → 连接各种软件服务

### 为什么需要 MCP？

**没有 MCP**：
```
Claude Code → 只能操作本地文件
❌ 不能访问 GitHub
❌ 不能查询数据库
❌ 不能搜索网络
```

**有了 MCP**：
```
Claude Code + MCP → 连接一切
✅ GitHub 仓库管理
✅ 数据库查询
✅ 网络搜索
✅ Google Drive 访问
✅ 任何自定义服务
```

---

## 📖 MCP 核心概念

### MCP 服务器

MCP Server 是一个独立程序，提供特定功能：

```
┌─────────────────┐
│  Claude Code    │
└────────┬────────┘
         │ MCP Protocol
    ┌────┴────┬────────┬────────┐
    │         │        │        │
┌───▼──┐  ┌──▼──┐  ┌──▼──┐  ┌──▼──┐
│GitHub│  │ DB  │  │File │  │自定义│
│ MCP  │  │ MCP │  │ MCP │  │ MCP  │
└──────┘  └─────┘  └─────┘  └──────┘
```

### MCP 生态系统

**官方 MCP 服务器**：
- `@modelcontextprotocol/server-github` - GitHub 集成
- `@modelcontextprotocol/server-filesystem` - 文件系统访问
- `@modelcontextprotocol/server-brave-search` - 网络搜索
- `@modelcontextprotocol/server-postgres` - PostgreSQL
- `@modelcontextprotocol/server-sqlite` - SQLite

**社区 MCP 服务器**：
- Google Drive, Gmail, Slack, Notion...
- 查看完整列表：https://github.com/modelcontextprotocol/servers

---

## 🔧 配置 MCP 服务器

### 配置文件

**位置**：`~/.config/claude/settings.json` 或 `.claude/settings.json`

**基本格式**：
```json
{
  "mcpServers": {
    "server-name": {
      "command": "command-to-run",
      "args": ["arg1", "arg2"],
      "env": {
        "ENV_VAR": "value"
      }
    }
  }
}
```

### 示例 1：GitHub MCP

**步骤**：

1. **获取 GitHub Token**
   - 访问：https://github.com/settings/tokens
   - 创建 Personal Access Token
   - 权限：repo, read:org, read:user

2. **配置 MCP**
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-github"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_your_token_here"
      }
    }
  }
}
```

3. **使用**
```
"在 GitHub 上搜索 React 相关的仓库"
"创建一个 issue 到 my-repo"
"列出我所有仓库的 PR"
"查看 repo/name 的最新提交"
```

### 示例 2：Filesystem MCP

**用途**：安全地访问特定目录

**配置**：
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/allowed/directory"
      ]
    }
  }
}
```

**使用**：
```
"读取 /allowed/directory/file.txt"
"列出目录中的所有文件"
```

### 示例 3：Database MCP

**PostgreSQL**：
```json
{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-postgres",
        "postgresql://user:pass@localhost:5432/dbname"
      ]
    }
  }
}
```

**使用**：
```
"查询 users 表中的所有数据"
"统计每个类别的商品数量"
"执行复杂的 JOIN 查询"
```

---

## 🤖 Sub-Agents 系统

### 什么是 Sub-Agents？

Sub-Agents 是 Claude Code 的**任务委派系统**，可以启动专门的 AI 助手处理特定任务。

**类比**：
```
你（项目经理）
  ├── 委派任务 A → 开发工程师
  ├── 委派任务 B → 测试工程师
  └── 委派任务 C → 文档工程师

Claude Code（主 Agent）
  ├── 委派搜索 → general-purpose agent
  ├── 委派分析 → 专用 agent
  └── 委派重构 → 专用 agent
```

### Sub-Agents 类型

**1. general-purpose agent**
- 用途：通用任务、搜索、分析
- 工具：所有工具（Read, Write, Bash, Glob, Grep...）
- 场景：复杂搜索、多文件分析

**2. 专用 agents**（根据配置）
- code-reviewer
- test-generator
- documentation-writer
- 等...

### 何时使用 Sub-Agents？

**✅ 适合使用**：
1. 大型代码库搜索（50+ 文件）
2. 需要多次迭代的任务
3. 独立的子任务
4. 需要并行处理的任务

**❌ 不适合使用**：
1. 简单的单文件操作
2. 已知具体位置的操作
3. 需要立即结果的操作

---

## 💡 Sub-Agents 使用示例

### 示例 1：大型代码库搜索

**场景**：在 100+ 文件中搜索特定功能

**提示词**：
```
使用 Sub-Agent 在整个代码库中搜索用户认证相关的代码。

要求：
1. 找到所有认证逻辑
2. 识别认证流程
3. 列出所有相关文件
4. 总结认证机制
```

**过程**：
```
主 Agent 接收任务
    ↓
启动 general-purpose sub-agent
    ↓
sub-agent 执行：
  - Glob 搜索相关文件
  - Grep 搜索关键词
  - Read 分析文件
  - 总结结果
    ↓
返回给主 Agent
    ↓
主 Agent 呈现给用户
```

### 示例 2：并行任务处理

**场景**：同时分析多个模块

**提示词**：
```
并行分析以下三个模块：
1. src/auth - 认证模块
2. src/api - API 模块
3. src/database - 数据库模块

为每个模块生成：
- 功能概述
- 依赖关系
- 潜在问题
- 改进建议
```

**Claude Code 会**：
- 启动 3 个 sub-agents
- 并行分析各模块
- 汇总所有结果

### 示例 3：复杂重构任务

**场景**：重构影响多个文件的功能

**提示词**：
```
使用 Sub-Agent 重构用户权限系统：

当前问题：
- 权限逻辑分散在 20+ 文件中
- 没有统一的权限检查机制

目标：
1. 找到所有权限检查代码
2. 设计统一的权限系统
3. 创建中央权限管理器
4. 更新所有文件使用新系统
5. 添加测试
```

---

## 🎨 MCP + Sub-Agents 组合应用

### 场景：完整的 GitHub 工作流

**提示词**：
```
使用 GitHub MCP 和 Sub-Agents 完成：

1. 搜索我的仓库中所有开放的 issues
2. 分析每个 issue 的复杂度
3. 对于简单的 issues：
   - 创建功能分支
   - 实现功能
   - 提交代码
   - 创建 PR
4. 生成工作报告
```

**执行流程**：
```
主 Agent 使用 GitHub MCP → 获取 issues
    ↓
启动 sub-agent → 分析每个 issue
    ↓
对于每个简单 issue:
  启动 sub-agent → 实现功能
  使用 GitHub MCP → 创建 PR
    ↓
汇总所有结果 → 生成报告
```

---

## 🏋️ 实践练习

### 练习 6.1：配置 GitHub MCP

**任务**：
1. 获取 GitHub Token
2. 配置 GitHub MCP
3. 测试 MCP 功能

**测试提示词**：
```
# 测试 1：搜索仓库
"在 GitHub 上搜索 claude-code 相关仓库"

# 测试 2：查看 issues
"列出我的仓库 [repo-name] 的所有 issues"

# 测试 3：创建 issue
"在仓库 [repo-name] 创建一个 issue：标题是'测试MCP'，内容是'这是一个测试issue'"
```

**验证清单**：
- [ ] MCP 配置正确
- [ ] 能搜索仓库
- [ ] 能查看 issues
- [ ] 能创建 issue

### 练习 6.2：使用 Sub-Agents

**任务**：使用 Sub-Agent 分析大型项目

**步骤**：
1. 选择一个开源项目（50+ 文件）
2. 使用 Sub-Agent 分析项目结构
3. 生成项目文档

**提示词模板**：
```
使用 Sub-Agent 分析项目 [项目路径]：

请：
1. 扫描所有源代码文件
2. 识别主要模块和功能
3. 分析文件依赖关系
4. 生成项目结构文档
5. 列出潜在的改进点
```

**验证清单**：
- [ ] Sub-Agent 正确启动
- [ ] 能处理大量文件
- [ ] 分析结果准确
- [ ] 文档完整清晰

### 练习 6.3：组合应用

**项目**：自动化代码审查系统

**要求**：
1. 使用 GitHub MCP 获取 PR
2. 使用 Sub-Agent 审查代码
3. 使用 GitHub MCP 提交审查意见

**完整流程**：
```
1. 列出所有待审查的 PR
2. 对每个 PR:
   a. 获取变更文件
   b. 启动 Sub-Agent 审查
   c. 生成审查报告
   d. 提交审查意见
3. 生成总结报告
```

---

## 📊 模块测试

### 测试 1：MCP 配置 (40分)
- [ ] 正确配置至少 2 个 MCP 服务器
- [ ] MCP 能正常工作
- [ ] 理解 MCP 的工作原理
- [ ] 能排查 MCP 问题

### 测试 2：Sub-Agents 使用 (30分)
- [ ] 能正确使用 Sub-Agents
- [ ] 理解何时使用 Sub-Agents
- [ ] 能有效分解复杂任务

### 测试 3：综合应用 (30分)
- [ ] MCP + Sub-Agents 组合使用
- [ ] 实现实际工作流自动化
- [ ] 提高工作效率

**总分 100，60分及格**

---

## 💡 常见问题

### Q1: MCP 服务器无法启动？
**检查**：
1. npx 命令可用：`which npx`
2. Token 正确配置
3. 网络连接正常
4. 查看错误日志

### Q2: 如何调试 MCP？
```bash
# 手动运行 MCP 服务器
npx -y @modelcontextprotocol/server-github

# 检查环境变量
echo $GITHUB_PERSONAL_ACCESS_TOKEN
```

### Q3: Sub-Agent 什么时候用？
**决策树**：
```
需要操作多个文件（>10）? → Yes → 使用 Sub-Agent
需要复杂搜索和分析? → Yes → 使用 Sub-Agent
任务独立且耗时? → Yes → 使用 Sub-Agent
简单的单文件操作? → No → 直接操作
```

### Q4: Sub-Agent 失败怎么办？
1. 检查任务描述是否清晰
2. 简化任务范围
3. 手动分解任务
4. 查看 Agent 输出的错误信息

---

## 🎯 下一步

完成本模块后，继续学习：

👉 [模块 7：综合实战项目](../module-7/README.md)

将所有学到的技能应用到实际项目中！

---

## 📚 参考资源

- [MCP 官方文档](https://modelcontextprotocol.io/)
- [MCP Servers 列表](https://github.com/modelcontextprotocol/servers)
- [Sub-Agents 文档](https://docs.claude.com/docs/claude-code/build/agents)
- [Claude Code 完整文档](https://docs.claude.com/docs/claude-code/)

---

**记住**：
- MCP → 连接外部世界
- Sub-Agents → 处理复杂任务
- 组合使用 → 无限可能
