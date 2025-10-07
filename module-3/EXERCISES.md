# 模块 3 练习任务 - Git 集成与版本控制

## 练习 1：基础 Git 操作

### 任务 1.1：创建规范的提交
**目标**：学会让 Claude Code 生成高质量的提交信息

**步骤**：
1. 创建一个新的 Node.js 项目
2. 添加几个文件（index.js, package.json, README.md）
3. 初始化 Git 仓库
4. 让 Claude Code 分析变更并创建提交

**提示词**：
```
请为我创建一个 git 提交。
我刚刚创建了一个新的 Node.js 项目，包含：
- package.json：项目配置
- index.js：应用入口
- README.md：项目说明

请生成符合规范的提交信息。
```

**验证**：
- [ ] 提交信息格式正确（有类型前缀如 feat/chore）
- [ ] 包含 Claude Code 署名
- [ ] 描述清晰完整

### 任务 1.2：Git 状态分析
**目标**：理解 Claude Code 如何分析 Git 状态

**步骤**：
1. 修改多个文件
2. 让 Claude Code 查看变更
3. 观察它如何分类和总结变更

**提示词**：
```
查看当前的 git 状态和变更，
总结一下我做了哪些修改，
并建议如何组织提交。
```

**验证**：
- [ ] 正确识别所有变更文件
- [ ] 合理分类改动（功能、修复、文档等）
- [ ] 给出提交建议

## 练习 2：分支管理工作流

### 任务 2.1：功能分支开发
**目标**：掌握完整的分支工作流

**场景**：开发一个用户认证功能

**步骤**：
1. 从 main 创建 `feature/user-auth` 分支
2. 实现登录功能
3. 提交变更
4. 创建 Pull Request

**提示词系列**：
```
# 步骤 1
创建一个新分支 feature/user-auth 用于开发用户认证功能

# 步骤 2
实现基础的用户登录功能，包括：
- 登录表单验证
- JWT token 生成
- 错误处理

# 步骤 3
为这些改动创建提交

# 步骤 4
创建 Pull Request 到 main 分支
```

**验证**：
- [ ] 分支命名规范
- [ ] 提交历史清晰
- [ ] PR 描述完整

### 任务 2.2：Hotfix 流程
**目标**：学习紧急修复流程

**场景**：生产环境发现严重 bug

**步骤**：
1. 从 main 创建 `hotfix/critical-bug` 分支
2. 修复 bug
3. 快速提交和合并

**提示词**：
```
紧急修复流程：
1. 创建 hotfix 分支
2. 修复 [具体bug描述]
3. 创建提交，标记为 hotfix
4. 准备合并到 main
```

**验证**：
- [ ] 快速响应流程
- [ ] 提交信息标注优先级
- [ ] 合并流程正确

## 练习 3：冲突解决

### 任务 3.1：简单冲突解决
**目标**：处理基本的合并冲突

使用 `conflict-practice/` 目录中的练习。

**详细指南**：参见 [conflict-practice/README.md](./conflict-practice/README.md)

**验证**：
- [ ] 识别冲突位置
- [ ] 理解冲突内容
- [ ] 正确解决并验证

### 任务 3.2：复杂冲突场景
**目标**：处理涉及多个文件的冲突

**场景**：
- 分支 A：重构了代码结构
- 分支 B：添加了新功能

**提示词**：
```
遇到复杂的合并冲突：
分支 A 重构了代码，改变了文件结构
分支 B 在旧结构上添加了新功能

请帮我：
1. 分析冲突的本质
2. 提供解决策略
3. 迁移新功能到新结构
4. 确保功能完整
```

**验证**：
- [ ] 理解重构意图
- [ ] 正确迁移功能
- [ ] 代码整洁无冗余

## 练习 4：Pull Request 工作流

### 任务 4.1：创建完整的 PR
**目标**：生成专业的 PR 描述

**步骤**：
1. 在功能分支完成开发
2. 创建所有必要的提交
3. 让 Claude Code 生成 PR

**提示词**：
```
请为我创建一个 Pull Request：
- 目标分支：main
- 功能：用户认证系统
- 包含的改动：[列出主要改动]

PR 应该包含：
1. 清晰的标题
2. 功能描述
3. 测试计划
4. 截图（如有必要）
```

**验证**：
- [ ] PR 标题简洁明了
- [ ] 描述包含所有关键信息
- [ ] 有完整的测试计划
- [ ] 使用了 markdown 格式

### 任务 4.2：响应代码审查
**目标**：模拟响应审查意见的流程

**场景**：收到审查反馈

**步骤**：
1. 模拟审查意见（自己写或让 Claude Code 模拟）
2. 根据反馈修改代码
3. 更新 PR

**模拟审查意见**：
```
Review Comments:
1. 建议添加输入验证
2. 错误处理需要更具体
3. 缺少单元测试
4. 代码注释不够清晰
```

**提示词**：
```
收到以下代码审查意见：
[粘贴审查意见]

请帮我：
1. 逐条响应这些意见
2. 修改代码
3. 更新提交
```

**验证**：
- [ ] 所有意见都得到响应
- [ ] 代码质量提升
- [ ] 提交历史清晰

## 练习 5：高级 Git 操作（可选）

### 任务 5.1：交互式 Rebase
**注意**：Claude Code 不支持 `git rebase -i`，但可以帮助规划

**提示词**：
```
我有以下提交历史：
[列出提交]

我想要：
1. 合并相关的提交
2. 重新排序
3. 修改提交信息

请给我一个 rebase 计划
```

### 任务 5.2：Cherry-pick 操作
**目标**：选择性地应用提交

**场景**：需要将某个功能分支的部分提交应用到另一个分支

**提示词**：
```
我需要将 feature-a 分支的提交 abc123 应用到 feature-b 分支。

请帮我：
1. 检查提交内容
2. 执行 cherry-pick
3. 处理可能的冲突
```

## 综合练习：完整开发流程

### 项目：实现用户管理系统

**第一步：项目初始化**
- [ ] 创建 Git 仓库
- [ ] 设置 .gitignore
- [ ] 创建初始提交

**第二步：功能开发**
- [ ] 创建 feature/user-list 分支
- [ ] 实现用户列表功能
- [ ] 提交变更

**第三步：同时开发另一功能**
- [ ] 创建 feature/user-detail 分支
- [ ] 实现用户详情功能
- [ ] 提交变更

**第四步：集成和冲突解决**
- [ ] 合并 user-list 到 main
- [ ] 合并 user-detail（解决冲突）
- [ ] 验证功能完整

**第五步：创建 Release**
- [ ] 创建 release/v1.0.0 分支
- [ ] 更新版本号和 CHANGELOG
- [ ] 创建 Git tag
- [ ] 合并到 main 和 develop

**验证标准**：
- [ ] Git 历史清晰
- [ ] 提交信息规范
- [ ] 无遗留冲突
- [ ] 功能完整可用

## 评分标准

| 项目 | 优秀 (90-100) | 良好 (80-89) | 及格 (60-79) | 不及格 (<60) |
|------|---------------|--------------|--------------|--------------|
| 提交质量 | 信息清晰、规范完整 | 信息清晰 | 基本可读 | 不规范 |
| 分支管理 | 命名规范、流程完整 | 流程正确 | 基本正确 | 混乱 |
| 冲突解决 | 快速准确、验证完整 | 正确解决 | 最终解决 | 未解决 |
| PR 质量 | 描述完整、格式规范 | 描述清晰 | 基本说明 | 缺失信息 |

## 下一步

完成 Git 练习后，继续学习：

👉 [模块 4：自定义 Slash Commands](../module-4/README.md)

---

## 练习 6：创建 Slash Commands（原练习1）

### 任务 1.1：基础命令
创建以下 slash commands：

- [ ] `/explain` - 解释选中的代码
- [ ] `/optimize` - 优化性能
- [ ] `/security` - 安全审查
- [ ] `/document` - 生成文档

**验证方法**：在交互会话中输入 `/` 应该能看到你的命令

### 任务 1.2：带参数的命令
创建需要参数的命令：

- [ ] `/test {{file}}` - 为指定文件生成测试
- [ ] `/refactor {{pattern}}` - 重构特定模式
- [ ] `/migrate {{from}} {{to}}` - 迁移技术栈

**验证方法**：使用命令时应该能够传递参数

### 任务 1.3：复杂命令
创建包含多步骤的命令：

- [ ] `/pr-ready` - 检查 PR 准备情况（lint, test, build）
- [ ] `/deploy-check` - 部署前检查清单
- [ ] `/onboard` - 新项目入门引导

## 练习 2：配置 Hooks

### 任务 2.1：基础 Hooks

在 `~/.config/claude/settings.json` 中配置：

- [ ] `conversation-start-hook` - 显示 git 状态
- [ ] `conversation-end-hook` - 清理临时文件
- [ ] `user-prompt-submit-hook` - 记录请求日志

**验证方法**：启动新对话，观察是否执行了 hook

### 任务 2.2：工具调用 Hooks

创建 `tool-call-hook` 来：

- [ ] 在文件写入前备份
- [ ] 在执行 Bash 命令前记录日志
- [ ] 在代码修改前检查 git 状态

**验证脚本**：
```bash
# 创建 tool-call-validator.sh
#!/bin/bash
echo "Tool called: $CLAUDE_TOOL_NAME"
echo "Input: $CLAUDE_TOOL_INPUT"

# 如果是写入操作，先备份
if [ "$CLAUDE_TOOL_NAME" = "Write" ]; then
    echo "Creating backup..."
    # 备份逻辑
fi
```

### 任务 2.3：阻塞 Hooks

创建 blocking hook：

- [ ] 在提交前运行 linter
- [ ] 在部署前运行测试
- [ ] 在重构前检查测试覆盖率

**注意**：blocking hooks 会阻止操作直到完成

## 练习 3：MCP 集成

### 任务 3.1：配置 GitHub MCP

1. [ ] 获取 GitHub Personal Access Token
2. [ ] 在 settings.json 中配置 GitHub MCP
3. [ ] 测试搜索仓库功能
4. [ ] 创建一个测试 issue

**配置示例**：
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-token>"
      }
    }
  }
}
```

**验证命令**：
向 Claude Code 询问："Search for popular React repositories"

### 任务 3.2：配置 Filesystem MCP

1. [ ] 配置 filesystem MCP 限制访问特定目录
2. [ ] 测试文件访问权限
3. [ ] 尝试访问未授权目录（应该失败）

### 任务 3.3：其他 MCP 服务器

选择并配置以下之一：

- [ ] Brave Search - Web 搜索
- [ ] PostgreSQL - 数据库访问
- [ ] Google Drive - 文档访问
- [ ] Slack - 团队沟通

## 练习 4：创建自定义 Agent

### 任务 4.1：代码审查 Agent

创建 `.claude/agents/code-reviewer/`：

**agent.json**:
```json
{
  "name": "code-reviewer",
  "description": "Expert code reviewer",
  "tools": ["Read", "Grep", "Glob"],
  "temperature": 0.3
}
```

**instructions.md**:
- [ ] 定义审查标准
- [ ] 列出检查清单
- [ ] 指定输出格式

**测试任务**：让 agent 审查 module-1/buggy-code.js

### 任务 4.2：测试生成 Agent

创建专门生成测试的 agent：

- [ ] 支持 Jest/Vitest/Mocha
- [ ] 生成单元测试
- [ ] 生成集成测试
- [ ] 包含边界条件

### 任务 4.3：文档 Agent

创建自动生成文档的 agent：

- [ ] 分析代码结构
- [ ] 生成 API 文档
- [ ] 创建使用示例
- [ ] 生成 README

## 综合项目：完整工作流

### 项目：自动化 PR 工作流

创建一个完整的 PR 准备工作流：

#### 第一步：创建 Slash Command
`.claude/commands/pr-prepare.md`:
```markdown
---
description: "Prepare code for pull request"
---

Please prepare this code for pull request by:
1. Running linter and fixing issues
2. Running all tests
3. Checking test coverage
4. Generating/updating documentation
5. Creating a PR summary
```

#### 第二步：配置 Hooks
```json
{
  "hooks": {
    "conversation-start-hook": {
      "command": "git fetch origin",
      "blocking": false
    },
    "tool-call-hook": {
      "command": "./scripts/pre-commit-check.sh",
      "blocking": true,
      "timeout": 10000
    }
  }
}
```

#### 第三步：创建 PR Review Agent
- [ ] Agent 配置文件
- [ ] 详细审查指南
- [ ] 自动化检查脚本

#### 第四步：集成 GitHub MCP
- [ ] 自动创建 PR
- [ ] 添加标签
- [ ] 请求审查者

### 验证清单

- [ ] `/pr-prepare` 命令可用
- [ ] Hooks 正确执行
- [ ] Agent 能够审查代码
- [ ] 可以通过 MCP 创建 PR
- [ ] 整个流程自动化运行

## 测试题

### 理论题

1. Slash commands 和直接输入提示词的区别是什么？
2. 什么时候应该使用 blocking hooks？
3. MCP 服务器的主要用途是什么？
4. Custom agents 与普通对话的区别？

### 实践题

1. 创建一个 slash command，接受文件路径作为参数并生成测试
2. 配置一个 hook，在每次写入文件前自动备份
3. 使用 GitHub MCP 搜索并克隆一个仓库
4. 创建一个 agent，分析项目依赖并检查安全漏洞

## 评分标准

| 项目 | 优秀 (90-100) | 良好 (80-89) | 及格 (60-79) | 不及格 (<60) |
|------|---------------|--------------|--------------|--------------|
| Slash Commands | 5+ 个可用命令，包含复杂参数 | 3-4 个命令，基本参数 | 1-2 个简单命令 | 无法创建命令 |
| Hooks | 配置全部 4 种 hooks | 配置 2-3 种 hooks | 配置 1 种 hook | 无法配置 |
| MCP | 集成 2+ 服务器 | 集成 1 个服务器 | 尝试配置但失败 | 未尝试 |
| Agents | 2+ 个复杂 agents | 1 个完整 agent | 基本 agent 配置 | 无法创建 |
| 综合项目 | 完整工作流自动化 | 部分自动化 | 基本流程可用 | 无法运行 |

完成所有练习后，进入 **模块 4：高级代码操作**。
