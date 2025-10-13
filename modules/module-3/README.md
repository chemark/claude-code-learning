# 模块 3：自定义配置与扩展

## 学习目标
- ✅ 掌握 Slash Commands 的创建和使用
- ✅ 学会配置 Hooks 实现自动化工作流
- ✅ 理解 MCP (Model Context Protocol) 服务器的集成
- ✅ 创建自定义 Agents

## 知识点

### 1. Slash Commands（斜杠命令）

Slash Commands 允许你创建可重用的提示词模板。

#### 创建位置
```
.claude/
  commands/
    review-pr.md
    explain-code.md
    write-tests.md
```

#### 基本语法
```markdown
---
description: "Review pull request and provide feedback"
---

Please review the following pull request:
- Check code quality
- Identify potential bugs
- Suggest improvements
- Verify test coverage
```

#### 带参数的命令
```markdown
---
description: "Generate tests for a specific file"
---

Generate comprehensive unit tests for {{file}} including:
- Happy path scenarios
- Edge cases
- Error handling
- Integration scenarios
```

#### 最佳实践
1. 使用描述性文件名（如 `review-security.md`）
2. 添加 `description` 元数据
3. 使用 `{{variable}}` 作为参数占位符
4. 保持命令专注于单一任务

### 2. Hooks（钩子）

Hooks 允许在特定事件发生时自动执行 shell 命令。

#### 配置位置
`~/.config/claude/settings.json`

#### 可用 Hooks

##### user-prompt-submit-hook
用户提交消息后执行
```json
{
  "hooks": {
    "user-prompt-submit-hook": {
      "command": "echo 'Processing your request...'",
      "blocking": false
    }
  }
}
```

##### tool-call-hook
工具调用前执行
```json
{
  "hooks": {
    "tool-call-hook": {
      "command": "python validate_tool_call.py",
      "blocking": true,
      "timeout": 5000
    }
  }
}
```

##### conversation-start-hook
对话开始时执行
```json
{
  "hooks": {
    "conversation-start-hook": {
      "command": "git status",
      "blocking": false
    }
  }
}
```

##### conversation-end-hook
对话结束时执行
```json
{
  "hooks": {
    "conversation-end-hook": {
      "command": "./cleanup.sh",
      "blocking": false
    }
  }
}
```

#### Hook 参数
- `command`: 要执行的 shell 命令
- `blocking`: 是否阻塞等待命令完成（默认 false）
- `timeout`: 超时时间（毫秒）

#### 环境变量
Hooks 可以访问以下环境变量：
- `CLAUDE_TOOL_NAME`: 工具名称（仅 tool-call-hook）
- `CLAUDE_TOOL_INPUT`: 工具输入（仅 tool-call-hook）
- `CLAUDE_WORKSPACE`: 当前工作目录

### 3. MCP (Model Context Protocol)

MCP 允许 Claude Code 连接到外部数据源和工具。

#### 配置 MCP 服务器

在 `~/.config/claude/settings.json` 中：

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/files"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your-token-here"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/mydb"]
    }
  }
}
```

#### 常用 MCP 服务器

1. **Filesystem Server**
   - 安全访问文件系统
   - 限制访问特定目录

2. **GitHub Server**
   - 搜索仓库和代码
   - 创建 issues 和 PR
   - 管理文件内容

3. **PostgreSQL Server**
   - 查询数据库
   - 分析数据架构

4. **Google Drive Server**
   - 访问文档和表格
   - 搜索文件

5. **Brave Search**
   - Web 搜索能力

### 4. Custom Agents（自定义代理）

Agents 是专门处理特定任务的自主助手。

#### 创建位置
```
.claude/
  agents/
    code-reviewer/
      agent.json
      instructions.md
    test-generator/
      agent.json
      instructions.md
```

#### agent.json 配置
```json
{
  "name": "code-reviewer",
  "description": "Reviews code for quality, security, and best practices",
  "tools": ["Read", "Grep", "Glob"],
  "model": "claude-sonnet-4-5",
  "temperature": 0.3
}
```

#### instructions.md 示例
```markdown
# Code Reviewer Agent

## Role
You are a senior code reviewer focusing on quality, security, and maintainability.

## Process
1. Read the specified files
2. Check for:
   - Security vulnerabilities
   - Code smells
   - Performance issues
   - Best practice violations
3. Provide actionable feedback
4. Suggest improvements with code examples

## Guidelines
- Be constructive and specific
- Prioritize security and correctness
- Consider the project context
- Provide examples for suggestions
```

## 实践项目

### 项目 1：创建代码审查工作流

创建一套完整的 code review 工作流：

1. Slash command: `.claude/commands/review.md`
2. Hook: 在代码审查前自动运行 linter
3. Custom agent: 专门的代码审查代理

### 项目 2：自动化测试生成

创建测试生成系统：

1. Slash command: 生成不同类型的测试
2. Hook: 生成测试后自动运行
3. Agent: 分析代码覆盖率并建议改进

### 项目 3：集成 GitHub MCP

使用 GitHub MCP 服务器：

1. 配置 GitHub token
2. 创建自动化 PR 创建命令
3. 实现 issue 管理工作流

## 学习检查点

- [ ] 创建了至少 3 个自定义 slash commands
- [ ] 配置了至少 2 个不同的 hooks
- [ ] 成功集成至少 1 个 MCP 服务器
- [ ] 创建了至少 1 个自定义 agent
- [ ] 理解 blocking vs non-blocking hooks
- [ ] 能够使用 hooks 实现自动化工作流
- [ ] 理解 MCP 的作用和限制
- [ ] 能够调试 hooks 和 MCP 配置问题

## 常见问题

### Q: Slash commands 不显示？
A: 检查 `.claude/commands/` 目录和文件扩展名（必须是 .md）

### Q: Hook 没有执行？
A: 检查 settings.json 语法，确保命令路径正确，查看 logs

### Q: MCP 服务器连接失败？
A: 验证服务器安装，检查环境变量，确认网络连接

### Q: Agent 不工作？
A: 检查 agent.json 配置，确认工具列表正确，验证 instructions.md 格式

## 下一步

完成本模块后，进入**模块 4：高级代码操作**，学习复杂的代码重构和项目结构优化。
