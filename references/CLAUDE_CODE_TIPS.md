# 📌 Claude Code 使用技巧集合

> Claude Code 官方使用技巧和最佳实践

## 📖 目录

### 🎯 核心快捷键
- [1. 计划模式（Plan Mode）](#tip-1)
- [2. 图片粘贴](#tip-2)
- [3. 模式切换](#tip-3)
- [4. 记忆管理](#tip-4)
- [5. GitHub 集成](#tip-5)
- [6. 内存查看](#tip-6)

### ⌨️ 键盘快捷键
- [7. 基础快捷键](#tip-7)
- [8. 多行输入](#tip-8)
- [9. 历史记录导航](#tip-9)
- [10. Vim 模式](#tip-10)

### 🛠️ 命令与工具
- [11. Bash 命令集成](#tip-11)
- [12. 快速命令前缀](#tip-12)
- [13. Slash Commands](#tip-13)
- [14. 扩展思考模式](#tip-14)
- [15. Agents（代理系统）](#tip-15)

### 🚀 高级技巧
- [16. 会话管理](#tip-16)
- [17. 权限管理](#tip-17)
- [18. 文件引用](#tip-18)
- [19. 后台任务](#tip-19)
- [20. 模型切换](#tip-20)
- [21. 批量处理](#tip-21)
- [22. Git Worktrees 并行会话](#tip-22)

### 🔌 集成与扩展
- [23. IDE 集成](#tip-23)

### 💰 效率与优化
- [24. Token 优化策略](#tip-24)

---

<a name="tip-1"></a>
## 1. 计划模式（Plan Mode）

### 💡 Tip: Use Plan Mode to prepare for a complex request before making changes. Press shift+tab twice to enable.

**功能说明**：
计划模式允许你在执行复杂操作前先制定详细计划，Claude Code 会先展示计划供你审核，而不是立即执行操作。

**使用方法**：
- 按 `Shift+Tab` 两次快速启用计划模式
- 或者明确告诉 Claude："使用计划模式"

**适用场景**：
- 🔧 大规模代码重构
- 🏗️ 多文件修改
- 🎯 复杂功能开发
- 📦 项目结构调整
- ⚠️ 可能影响多个模块的更改

**工作流程**：
```
1. 启用计划模式（Shift+Tab 两次）
2. 描述你的需求
3. Claude 生成详细计划
4. 审核计划
5. 确认后执行或要求修改计划
```

**示例**：
```
用户: [Shift+Tab 两次启用计划模式]
      "我要重构整个认证系统，使用 JWT 替换 Session"

Claude: [计划模式]
        📋 重构计划：

        Phase 1: 准备工作
        - 安装 JWT 相关依赖
        - 创建 JWT 工具函数
        - 设置环境变量

        Phase 2: 修改认证逻辑
        - 更新 login 端点
        - 创建 token 验证中间件
        - 修改受保护路由

        Phase 3: 迁移现有代码
        - 移除 session 相关代码
        - 更新测试用例
        - 更新文档

        是否继续执行此计划？

用户: "看起来不错，执行吧"
```

**最佳实践**：
- ✅ 对于超过 3 个文件的修改，使用计划模式
- ✅ 不确定影响范围时，使用计划模式
- ✅ 需要团队审核时，先生成计划
- ✅ 复杂的架构变更，先看计划再执行

**注意事项**：
- 📝 计划模式不会执行任何操作，只是制定计划
- 🔍 可以多次修改计划直到满意
- ⚡ 简单任务不需要计划模式，会降低效率

---

<a name="tip-2"></a>
## 2. 图片粘贴

### 💡 Tip: Paste images into Claude Code using control+v (not cmd+v!

**功能说明**：
可以直接将截图或图片粘贴到 Claude Code 中，让 Claude 分析图片内容。

**使用方法**：
- **macOS**: 使用 `Control+V`（不是 `Cmd+V`）
- **Windows/Linux**: 使用 `Ctrl+V`

**适用场景**：
- 📸 分享设计稿或 UI 截图
- 🐛 展示错误信息截图
- 📊 分析图表或数据可视化
- 🎨 UI/UX 讨论
- 📱 移动端界面分析
- 🖼️ 从图片中提取代码

**示例场景**：

**场景 1: UI 实现**
```
用户: [Ctrl+V 粘贴设计稿]
      "请根据这个设计稿实现 React 组件"

Claude: 分析图片...
        我看到这是一个卡片式布局，包含：
        - 头像（左上角，圆形）
        - 标题和副标题
        - 3 个操作按钮

        我来实现这个组件...
```

**场景 2: Bug 排查**
```
用户: [Ctrl+V 粘贴错误截图]
      "这个错误怎么解决？"

Claude: 我看到错误信息：
        "Cannot read property 'map' of undefined"

        问题出在第 42 行...
```

**场景 3: 代码提取**
```
用户: [Ctrl+V 粘贴代码截图]
      "将这段代码转换成 TypeScript"

Claude: 读取图片中的代码...
        转换后的 TypeScript 版本：
        [生成代码]
```

**最佳实践**：
- ✅ 确保图片清晰可读
- ✅ 重要内容居中，避免被截断
- ✅ 添加简短描述说明你的需求
- ✅ 敏感信息记得打码

**支持的图片格式**：
- PNG
- JPEG/JPG
- GIF
- WebP
- 其他常见图片格式

**注意事项**：
- ⚠️ macOS 必须用 `Control+V`，不是 `Cmd+V`
- ⚠️ 图片大小有限制（通常 < 5MB）
- ⚠️ 不要粘贴包含敏感信息的截图

---

<a name="tip-3"></a>
## 3. 模式切换

### 💡 Tip: Hit shift+tab to cycle between default mode, auto-accept edit mode, and plan mode

**功能说明**：
Claude Code 有三种工作模式，可以通过 `Shift+Tab` 快速切换。

**三种模式**：

### 🔵 Default Mode（默认模式）
- **特点**: 标准交互模式
- **行为**: Claude 会询问确认后再执行操作
- **适用**: 日常大部分场景
- **指示器**: 无特殊标识

### 🟢 Auto-Accept Edit Mode（自动接受编辑模式）
- **特点**: 自动应用所有编辑
- **行为**: Claude 的修改会立即应用，无需确认
- **适用**: 快速迭代、信任 Claude 的场景
- **指示器**: 显示 "Auto-accept" 标识
- **⚠️ 注意**: 建议配合 Git 使用，方便回滚

### 🟡 Plan Mode（计划模式）
- **特点**: 只制定计划，不执行
- **行为**: 显示详细计划等待确认
- **适用**: 复杂操作前的规划
- **指示器**: 显示 "Plan" 标识

**切换方法**：
```
按一次 Shift+Tab: Default → Auto-Accept
按两次 Shift+Tab: Default → Plan
继续按循环切换
```

**模式指示器**：
```
[No indicator]     - Default Mode
[Auto-accept ✓]    - Auto-Accept Edit Mode
[Plan 📋]          - Plan Mode
```

**使用建议**：

| 场景 | 推荐模式 | 原因 |
|------|---------|------|
| 简单 Bug 修复 | Auto-Accept | 快速高效 |
| 代码审查 | Default | 需要仔细检查 |
| 重构 | Plan | 先看计划 |
| 快速原型 | Auto-Accept | 快速迭代 |
| 生产环境 | Default | 谨慎操作 |
| 学习探索 | Default | 理解每一步 |

**最佳实践**：
- ✅ 熟悉项目时用 Auto-Accept 提高效率
- ✅ 不熟悉的代码库用 Default Mode
- ✅ 大改动前先用 Plan Mode
- ✅ 搭配 Git，随时可以回滚

---

<a name="tip-4"></a>
## 4. 记忆管理

### 💡 Tip: Want Claude to remember something? Hit # to add preferences, tools, and instructions to Claude's memory

**功能说明**：
使用 `#` 符号可以快速向 Claude 的记忆系统添加信息，让 Claude 记住你的偏好、工具配置和特殊指令。

**使用方法**：
```
# 在输入框中输入 #
# 会弹出记忆管理界面
# 选择或输入要添加的内容
```

**可以记住的内容类型**：

### 🎨 偏好设置（Preferences）
```
# 代码风格偏好
"我喜欢使用单引号"
"缩进使用 2 个空格"
"总是添加分号"

# 命名习惯
"组件文件使用 PascalCase"
"工具函数文件使用 camelCase"

# 框架偏好
"优先使用 React Hooks"
"状态管理使用 Zustand"
```

### 🛠️ 工具配置（Tools）
```
# 测试框架
"使用 Vitest 进行单元测试"

# 构建工具
"项目使用 Vite 构建"

# 包管理器
"使用 pnpm 管理依赖"
```

### 📝 特殊指令（Instructions）
```
# 提交规范
"Git 提交信息遵循 Conventional Commits"

# 文档要求
"所有公共 API 都要写 JSDoc"

# 代码审查
"修改代码前先运行测试"
```

### 🏗️ 项目信息
```
# 架构
"项目采用单体仓库（monorepo）结构"
"API 在 packages/api，前端在 packages/web"

# 环境
"开发环境端口：3000"
"API 端口：8080"
```

**添加记忆示例**：
```
用户: #
      [弹出记忆界面]

选项:
  - Add Preference (偏好设置)
  - Add Tool (工具)
  - Add Instruction (指令)

用户: [选择 Add Preference]
输入: "使用 TypeScript strict 模式"

Claude: ✓ 已记住：使用 TypeScript strict 模式
        我会在后续操作中遵循此偏好
```

**记忆的生命周期**：
- 💾 持久化存储（跨会话保留）
- 🔄 可随时更新或删除
- 🎯 自动应用到相关操作

**管理记忆**：
```
# 查看所有记忆
/memory

# 或者
"显示我的所有偏好设置"
"列出我添加的工具配置"

# 修改记忆
"更新记忆：改用 4 个空格缩进"

# 删除记忆
"忘记关于缩进的偏好"
```

**最佳实践**：
- ✅ 项目开始时添加核心偏好
- ✅ 记录团队编码规范
- ✅ 保存常用的工具链
- ✅ 定期清理过时的记忆
- ✅ 记忆要具体明确

**示例 - 完整的项目记忆配置**：
```
# 添加到记忆

## 代码风格
- TypeScript strict mode
- ESLint + Prettier
- 单引号，2 空格缩进
- 总是使用分号

## 工具链
- Vite (构建)
- Vitest (测试)
- pnpm (包管理)

## 提交规范
- Conventional Commits
- 中文提交信息
- 提交前运行 lint

## 项目结构
- src/ - 源代码
- tests/ - 测试文件
- docs/ - 文档

## API 规范
- RESTful API
- 使用 Zod 验证
- 所有端点需要 JSDoc
```

**注意事项**：
- ⚠️ 不要存储敏感信息（密码、密钥等）
- ⚠️ 记忆过多可能影响性能
- ⚠️ 保持记忆简洁明确

---

<a name="tip-5"></a>
## 5. GitHub 集成

### 💡 Tip: Run /install-github-app to tag @claude right from your Github issues and PRs

**功能说明**：
安装 Claude GitHub App 后，可以直接在 GitHub 的 Issues 和 Pull Requests 中 @claude，让 Claude 参与讨论和代码审查。

**安装方法**：
```bash
# 在 Claude Code 中运行
/install-github-app

# 或者直接告诉 Claude
"帮我安装 GitHub App"
```

**安装流程**：
```
1. 运行 /install-github-app
2. 浏览器打开 GitHub 授权页面
3. 选择要安装的仓库（全部或指定）
4. 授权并确认
5. 安装完成，返回 Claude Code
```

**使用场景**：

### 📝 在 Issue 中 @claude

**场景 1: 问题分析**
```markdown
## Bug Report

应用在生产环境随机崩溃

@claude 能帮我分析一下可能的原因吗？
```

Claude 会：
- 分析相关代码
- 检查日志和错误信息
- 提供可能的解决方案
- 建议调试步骤

**场景 2: 功能建议**
```markdown
## Feature Request

希望添加黑暗模式

@claude 这个功能该如何实现？需要修改哪些文件？
```

Claude 会：
- 提供实现方案
- 列出需要修改的文件
- 建议技术选型
- 估算工作量

### 🔍 在 PR 中 @claude

**场景 1: 代码审查**
```markdown
@claude 请审查这个 PR，重点关注性能和安全性
```

Claude 会：
- 审查所有修改的文件
- 指出潜在问题
- 提供改进建议
- 检查代码规范

**场景 2: 特定问题**
```markdown
@claude 这个函数的性能如何？有优化空间吗？

// 在代码的特定位置评论
```

Claude 会：
- 分析具体代码
- 提供性能评估
- 建议优化方案
- 给出代码示例

**场景 3: 自动化审查**
```markdown
@claude 完整审查

请检查：
- 代码质量
- 测试覆盖率
- 文档完整性
- 潜在 bug
```

**高级用法**：

### 🤖 自动化工作流
```yaml
# .github/workflows/claude-review.yml
name: Claude Auto Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  claude-review:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Claude Review
        run: |
          gh pr comment ${{ github.event.pull_request.number }} \
            --body "@claude 请审查这个 PR"
```

### 📋 审查模板
```markdown
## PR Review Checklist

@claude 请检查以下项目：

- [ ] 代码符合规范
- [ ] 测试覆盖充分
- [ ] 文档已更新
- [ ] 无明显性能问题
- [ ] 安全性检查通过
```

**实用命令**：
```
# Issue 中
@claude analyze this bug
@claude suggest solution
@claude create reproduction steps

# PR 中
@claude review this code
@claude check performance
@claude verify tests
@claude update documentation
```

**最佳实践**：
- ✅ 明确指出需要 Claude 关注的重点
- ✅ 提供足够的上下文信息
- ✅ 一次聚焦一个具体问题
- ✅ 配合 GitHub Actions 自动化
- ✅ 在 PR 模板中包含 Claude 审查步骤

**权限设置**：
```
# 推荐权限
- Read access: 所有仓库内容
- Write access: Issues, Pull Requests (用于评论)
- No access: Settings, Secrets
```

**注意事项**：
- ⚠️ Claude 的回复会作为 GitHub 评论出现
- ⚠️ 公开仓库中 Claude 的回复也是公开的
- ⚠️ 私有仓库需要付费计划
- ⚠️ Claude 无法直接修改代码，只能提建议

**示例 - 完整的 PR 审查流程**：
```markdown
## Pull Request: Add User Authentication

### Changes
- Implemented JWT authentication
- Added login/logout endpoints
- Created auth middleware

@claude 请进行全面的安全审查：

1. JWT 实现是否安全？
2. 密码处理是否正确？
3. 是否有注入风险？
4. Session 管理是否合理？
5. 错误处理是否泄露信息？

重点关注 src/auth/* 下的文件。
```

---

<a name="tip-6"></a>
## 6. 内存查看

### 💡 Tip: Use /memory to view and manage Claude memory

**功能说明**：
使用 `/memory` 命令可以查看和管理 Claude Code 存储的所有记忆信息。

**基本用法**：
```bash
# 在 Claude Code 提示符下
/memory
```

**显示内容**：
```
📝 Claude Memory Dashboard

════════════════════════════════
📌 Preferences (偏好设置)
════════════════════════════════
✓ 代码风格: 单引号, 2空格缩进
✓ TypeScript: strict mode
✓ 提交规范: Conventional Commits

════════════════════════════════
🛠️ Tools (工具配置)
════════════════════════════════
✓ 包管理: pnpm
✓ 构建工具: Vite
✓ 测试框架: Vitest

════════════════════════════════
📝 Instructions (指令)
════════════════════════════════
✓ 所有函数需要 JSDoc
✓ 提交前运行测试
✓ PR 需要代码审查

════════════════════════════════
🏗️ Project Context (项目上下文)
════════════════════════════════
✓ 项目类型: React + TypeScript
✓ 架构: Monorepo
✓ 主分支: main
```

**管理操作**：

### 📋 查看特定类型
```bash
# 只查看偏好设置
/memory preferences

# 只查看工具配置
/memory tools

# 只查看指令
/memory instructions
```

### ➕ 添加记忆
```bash
# 方法 1: 使用 # 快捷键（推荐）
#

# 方法 2: 直接告诉 Claude
"记住：我们使用 React Query 管理服务端状态"
```

### ✏️ 编辑记忆
```bash
# 使用自然语言
"更新记忆：改为使用 4 空格缩进"

# 或者通过 /memory 界面编辑
/memory
# 选择要编辑的项目
# 进行修改
```

### 🗑️ 删除记忆
```bash
# 删除特定记忆
"忘记关于缩进的偏好"

# 清除某类记忆
"清除所有工具配置"

# 清空所有记忆（谨慎！）
/memory clear
```

### 🔍 搜索记忆
```bash
"搜索记忆中关于 TypeScript 的配置"
"显示所有关于测试的记忆"
```

### 📤 导出记忆
```bash
# 导出为文件
"导出我的 Claude Code 配置"

# 会生成类似这样的文件
# .claude/memory-backup.json
```

### 📥 导入记忆
```bash
# 从文件导入
"从 team-config.json 导入团队配置"
```

**内存层级结构**：
```
Claude Memory
├── Global (全局)
│   ├── User Preferences (个人偏好)
│   └── Global Tools (全局工具)
│
└── Project (项目)
    ├── Project Preferences (项目偏好)
    ├── Project Tools (项目工具)
    ├── Project Instructions (项目指令)
    └── Project Context (项目上下文)
```

**记忆优先级**：
```
Project Memory (项目记忆) > Global Memory (全局记忆)
```

如果项目和全局有冲突，使用项目记忆。

**实用场景**：

### 🔄 团队配置同步
```bash
# 1. 团队 Leader 配置记忆
"记住团队的编码规范、工具链、提交规范"

# 2. 导出配置
"导出团队配置到 .claude/team-config.json"

# 3. 团队成员导入
"导入 .claude/team-config.json"

# ✅ 现在团队成员使用相同的配置
```

### 🎯 多项目管理
```bash
# 项目 A（React）
"记住：这是 React 项目，使用 Emotion 做样式"

# 项目 B（Vue）
"记住：这是 Vue 3 项目，使用 Composition API"

# Claude 会自动识别当前项目并应用对应记忆
```

### 📊 记忆统计
```bash
/memory stats

输出:
━━━━━━━━━━━━━━━━━━━━━━━━
📊 Memory Statistics
━━━━━━━━━━━━━━━━━━━━━━━━
Total Items: 23
├─ Preferences: 8
├─ Tools: 7
├─ Instructions: 5
└─ Context: 3

Storage: 12.3 KB / 100 KB
Last Updated: 2025-01-15
━━━━━━━━━━━━━━━━━━━━━━━━
```

**最佳实践**：
- ✅ 定期查看和清理过时记忆
- ✅ 项目开始时配置核心记忆
- ✅ 团队配置使用导入/导出同步
- ✅ 重要配置做好备份
- ✅ 使用描述性的记忆内容

**记忆示例模板**：
```markdown
## 新项目记忆配置模板

### 代码风格
- 语言: TypeScript
- 引号: 单引号
- 缩进: 2 空格
- 分号: 使用
- Linter: ESLint + Prettier

### 工具链
- 包管理: pnpm
- 构建: Vite
- 测试: Vitest
- CI/CD: GitHub Actions

### Git 规范
- 提交格式: Conventional Commits
- 分支策略: Git Flow
- PR 要求: 2 reviewers

### 项目约定
- 组件文件: PascalCase.tsx
- 工具函数: camelCase.ts
- 样式文件: *.module.css
- 测试文件: *.test.ts
```

**注意事项**：
- ⚠️ 记忆存储有大小限制（通常 100KB）
- ⚠️ 过多记忆可能影响性能
- ⚠️ 不要存储敏感信息
- ⚠️ 清空记忆操作不可撤销

---

<a name="tip-7"></a>
## 7. 基础快捷键

### 💡 Essential Keyboard Shortcuts

Claude Code 提供了丰富的键盘快捷键来提高操作效率。

**核心快捷键**：

| 快捷键 | 功能 | 使用场景 |
|--------|------|----------|
| `Ctrl+C` | 取消当前输入或生成 | 停止 Claude 的输出 |
| `Ctrl+D` | 退出 Claude Code | 结束会话 |
| `Ctrl+L` | 清除终端屏幕 | 保持界面整洁 |
| `Ctrl+R` | 反向搜索命令历史 | 快速查找历史命令 |
| `Esc` | 停止 Claude 当前操作 | 中断正在执行的任务 |
| `Esc` (两次) | 显示历史消息列表 | 快速跳转到之前的对话 |
| `Tab` | 切换扩展思考模式 | 启用深度分析 |

### 详细说明

**Ctrl+C - 取消输入或生成**
```
使用场景：
- Claude 正在生成长文本，想要停止
- 输入了错误的提示，想要取消
- Claude 输出方向不对，需要重新开始

注意：
⚠️ 在 Claude Code 中，Ctrl+C 用于取消，不是复制
✅ 复制文本使用鼠标选择后自动复制（终端特性）
```

**Ctrl+D - 退出会话**
```
使用场景：
- 完成所有工作，准备退出
- 等同于输入 /exit 命令

快捷方式：
# 快速退出
Ctrl+D

# 等同于
/exit
```

**Ctrl+L - 清除屏幕**
```
使用场景：
- 终端内容太多，想要清理视野
- 开始新任务前，保持界面整洁

注意：
✓ 只清除屏幕显示，不清除对话历史
✓ 可以通过上下箭头访问之前的内容
✓ 想要清除对话历史，使用 /clear
```

**Ctrl+R - 反向搜索**
```
使用方法：
1. 按 Ctrl+R
2. 输入搜索关键词
3. 找到想要的命令后按 Enter

示例：
(reverse-i-search)`git': git status
# 输入 'git' 会找到包含 git 的历史命令
```

**Esc - 停止操作**
```
使用场景：
- Claude 正在执行不想要的操作
- 长时间任务想要中止
- 发现指令有误，立即停止

示例：
用户: "删除所有 .js 文件"
[Claude 开始执行]
用户: [按 Esc]
Claude: Operation cancelled
```

**Esc Esc - 历史消息**
```
使用方法：
1. 快速按两次 Esc
2. 显示所有历史消息列表
3. 选择想要跳转的消息

功能：
- 查看完整的对话历史
- 快速跳转到之前的任何对话点
- 跨会话访问历史（持久化）

快捷操作：
Esc Esc → 选择消息 → Enter
```

**Tab - 扩展思考**
```
功能：
启用 Claude 的深度分析模式

使用场景：
- 复杂问题需要深入思考
- 需要详细的推理过程
- 想要看到 Claude 的思考步骤

示例：
[按 Tab 启用]
用户: "这段代码的时间复杂度是多少？"

Claude: [Extended Thinking]
        思考过程：
        1. 分析外层循环...
        2. 分析内层循环...
        3. 计算嵌套复杂度...

        结论：O(n²)
```

### 最佳实践

**效率提升组合**：
```
1. Ctrl+L (清屏) + /clear (新对话)
   # 开始全新的任务

2. Esc Esc (历史) + 选择消息
   # 回到之前的上下文

3. Ctrl+R (搜索) + 关键词
   # 快速找到历史命令

4. Tab (思考) + 复杂问题
   # 获得详细分析
```

**常见错误**：
```
❌ 用 Ctrl+C 尝试复制文本
✅ 直接用鼠标选择（自动复制）

❌ 按一次 Esc 期望看到历史
✅ 按两次 Esc

❌ 用 Ctrl+D 尝试删除
✅ Ctrl+D 用于退出
```

---

<a name="tip-8"></a>
## 8. 多行输入

### 💡 Multiline Input Methods

Claude Code 提供多种方式输入多行文本。

**多行输入方法**：

| 快捷键 | 平台 | 说明 |
|--------|------|------|
| `\` + `Enter` | 所有平台 | 反斜杠换行 |
| `Option+Enter` | macOS | Option 换行 |
| `Shift+Enter` | 所有平台 | 需要配置 |
| `Ctrl+J` | 所有平台 | 换行 |

### 详细说明

**方法 1: 反斜杠换行 `\` + `Enter`**
```
输入：
"请帮我创建一个函数 \
它可以计算两个数的和 \
并返回结果"

效果：
Claude 会收到完整的多行提示
```

**方法 2: Option+Enter (macOS)**
```
输入：
"这是第一行 [Option+Enter]
这是第二行 [Option+Enter]
这是第三行"

优势：
- macOS 原生支持
- 无需额外配置
- 直观易用
```

**方法 3: Shift+Enter**
```
注意：
⚠️ 默认不启用！需要先配置

启用方法：
/terminal-setup

# 或者
"配置终端使 Shift+Enter 支持换行"

配置后：
输入：
"第一行 [Shift+Enter]
第二行 [Shift+Enter]
第三行 [Enter 发送]"
```

**方法 4: Ctrl+J**
```
输入：
"第一行 [Ctrl+J]
第二行 [Ctrl+J]
第三行"

特点：
- 所有平台通用
- 无需配置
- 与其他终端程序一致
```

### 使用场景

**场景 1: 复杂提示词**
```
请帮我分析以下代码： \
1. 找出性能瓶颈 \
2. 提供优化建议 \
3. 重构为更清晰的结构 \
4. 添加必要的注释
```

**场景 2: 代码块输入**
```
请优化这段代码： \
```javascript
function example() {
  // 代码
}
```
```

**场景 3: 结构化需求**
```
创建一个 React 组件，要求： \
- 使用 TypeScript \
- 包含状态管理 \
- 响应式设计 \
- 单元测试
```

### 最佳实践

**选择合适的方法**：
```
macOS 用户：
✅ 优先使用 Option+Enter（最自然）
✅ 备选 \ + Enter

Windows/Linux 用户：
✅ 使用 \ + Enter
✅ 或配置 Shift+Enter

所有平台：
✅ Ctrl+J 作为通用方案
```

**格式化技巧**：
```
# ✅ 好的格式
请帮我： \
1. 创建文件 \
2. 添加代码 \
3. 运行测试

# ❌ 不好的格式
请帮我：创建文件、添加代码、运行测试
（一行太长，不易阅读）
```

---

<a name="tip-9"></a>
## 9. 历史记录导航

### 💡 Command History Navigation

快速访问和重用之前的命令和对话。

**历史记录功能**：

| 快捷键 | 功能 | 持久性 |
|--------|------|--------|
| `↑` 上箭头 | 上一条命令 | ✅ 跨会话 |
| `↓` 下箭头 | 下一条命令 | ✅ 跨会话 |
| `Esc Esc` | 历史消息列表 | ✅ 跨会话 |
| `Ctrl+R` | 反向搜索 | ✅ 跨会话 |

### 详细说明

**上下箭头导航**
```
功能：
- ↑ 查看上一条输入
- ↓ 查看下一条输入
- 可以无限向上滚动
- 即使重启 Claude Code 也能访问

使用示例：
[启动 Claude Code]
↑ → "帮我重构代码"（上次会话的命令）
↑ → "分析这个函数"（更早的命令）
↑ → "创建新文件"（最早的命令）
```

**跨会话历史**
```
今天：
用户: "git status"
用户: "分析 package.json"

[退出 Claude Code]

明天：
[启动 Claude Code]
↑ → "分析 package.json"（昨天的命令）
↑ → "git status"（昨天的命令）

✓ 历史完全保留！
```

**Esc Esc - 历史列表**
```
快速按两次 Esc：

┌─ Message History ─────────────────┐
│ 1. [今天 14:30] 创建 React 组件   │
│ 2. [今天 14:15] 修复 bug          │
│ 3. [今天 13:45] 重构代码          │
│ 4. [昨天 16:20] Git 提交          │
│ 5. [昨天 15:10] 创建测试          │
└───────────────────────────────────┘

使用方向键选择 → Enter 跳转
```

**Ctrl+R - 搜索历史**
```
按 Ctrl+R 进入搜索模式：

(reverse-i-search)`':

输入关键词：
(reverse-i-search)`git': git commit -m "..."

继续按 Ctrl+R 查找下一个：
(reverse-i-search)`git': git status

按 Enter 使用该命令
按 Esc 退出搜索
```

### 使用场景

**场景 1: 重复操作**
```
早上：
用户: "运行测试并生成覆盖率报告"

下午：
[按 ↑ 找到命令]
[按 Enter 重新执行]
```

**场景 2: 查找特定命令**
```
需要：找到之前的重构命令

方法 1 - 搜索：
Ctrl+R → 输入 "重构" → Enter

方法 2 - 列表：
Esc Esc → 浏览列表 → 选择
```

**场景 3: 修改历史命令**
```
上次命令：
"创建 User 组件"

这次想要：
"创建 Product 组件"

操作：
↑ → 获取 "创建 User 组件"
← → 移动到 "User"
修改为 "Product"
Enter
```

### 最佳实践

**高效使用**：
```
✅ 重复任务用 ↑
✅ 查找用 Ctrl+R
✅ 浏览用 Esc Esc
✅ 编辑历史命令再执行
```

**历史管理**：
```
# 定期清理
/clear  # 清除当前会话上下文

# 注意：
- /clear 不会删除历史记录
- 历史记录持久保存
- 可以继续通过 ↑ 访问
```

**组合技巧**：
```
1. Ctrl+R 搜索 → 找到命令
2. 修改部分内容
3. Enter 执行新版本
```

---

<a name="tip-10"></a>
## 10. Vim 模式

### 💡 Vim Editor Mode

Claude Code 支持 Vim 编辑模式，为 Vim 用户提供熟悉的操作体验。

**启用 Vim 模式**：
```bash
# 配置终端启用 Vim 模式
# 通常需要在终端设置中配置
# 或使用 set -o vi
```

**核心模式**：

| 模式 | 快捷键 | 说明 |
|------|--------|------|
| NORMAL | `Esc` | 普通模式 |
| INSERT | `i` | 插入模式 |
| COMMAND | `:` | 命令模式 |

**常用快捷键**：

### NORMAL 模式命令

**移动**：
```
h - 左移
j - 下移
k - 上移
l - 右移

w - 下一个单词
b - 上一个单词
0 - 行首
$ - 行尾

gg - 文件开头
G - 文件结尾
```

**编辑**：
```
i - 在光标前插入
a - 在光标后插入
o - 在下方新建行
O - 在上方新建行

x - 删除字符
dd - 删除行
dw - 删除单词

yy - 复制行
p - 粘贴
u - 撤销
```

**搜索**：
```
/ - 向下搜索
? - 向上搜索
n - 下一个匹配
N - 上一个匹配
```

### 使用示例

**场景 1: 编辑长提示**
```
[Esc] 进入 NORMAL 模式
k k k  # 向上 3 行
w w    # 向前 2 个单词
cw     # 修改单词
[输入新内容]
[Esc]  # 返回 NORMAL
```

**场景 2: 快速导航**
```
[Esc]
gg     # 跳到开头
/error # 搜索 "error"
n      # 下一个
n      # 再下一个
```

**场景 3: 删除和修改**
```
[Esc]
dd     # 删除当前行
3dd    # 删除 3 行
u      # 撤销
```

### 最佳实践

**适用人群**：
```
✅ Vim 重度用户
✅ 需要精确编辑长文本
✅ 习惯模态编辑

不适合：
❌ Vim 新手
❌ 偶尔使用 Claude Code
❌ 更喜欢现代编辑器快捷键
```

**配置建议**：
```
# 如果是 Vim 用户
启用 Vim 模式，提高效率

# 如果不是 Vim 用户
使用默认的 Emacs 风格快捷键
（Ctrl+A/E/K 等）
```

---

<a name="tip-11"></a>
## 11. Bash 命令集成

### 💡 Direct Bash Command Integration

Claude Code 无缝集成 Bash 命令，可以直接执行系统命令。

**使用方法**：

| 前缀 | 功能 | 示例 |
|------|------|------|
| `!` | 直接执行 Bash 命令 | `!ls -la` |
| 无前缀 | 让 Claude 执行 | `"运行 ls"` |

### 详细说明

**方法 1: ! 前缀直接执行**
```bash
# 直接在提示符输入
!git status
!npm install
!ls -la
!python script.py

特点：
✓ 立即执行，无需 Claude 介入
✓ 速度快
✓ 适合简单命令
```

**方法 2: 自然语言请求**
```
用户: "检查 Git 状态"
Claude: [使用 BashTool] git status
        On branch main...

用户: "安装依赖"
Claude: [使用 BashTool] npm install
        Installing...
```

**Ctrl+B - 后台运行**
```bash
# 启动开发服务器
npm run dev

# 按 Ctrl+B 转到后台
[Background] Process moved to background (ID: bg_1234)

# 现在可以执行其他命令
!git status
```

### 使用场景

**场景 1: 快速命令**
```bash
!pwd          # 查看当前目录
!whoami       # 查看当前用户
!date         # 查看日期
!ls -lh       # 查看文件
```

**场景 2: Git 操作**
```bash
!git status
!git log --oneline -5
!git diff
!git branch
```

**场景 3: 开发工具**
```bash
!npm run dev       # 启动开发服务器
!npm test          # 运行测试
!npm run build     # 构建项目
```

**场景 4: 长时间任务**
```bash
# 启动服务器
npm run dev
[Ctrl+B] # 后台运行

# 运行构建
npm run build
[Ctrl+B] # 后台运行

# 查看后台任务
/bashes
```

### 后台任务管理

**查看后台任务**
```bash
# 列出所有后台任务
/bashes

输出：
┌─ Background Shells ─────────────┐
│ bg_1234  npm run dev   [Running] │
│ bg_5678  npm test      [Running] │
└─────────────────────────────────┘
```

**查看后台输出**
```
"显示 bg_1234 的输出"

Claude: [使用 BashOutput 工具]
        Server started on port 3000
        Watching for changes...
```

**停止后台任务**
```
"停止 bg_1234"

Claude: [使用 KillShell 工具]
        Process bg_1234 terminated
```

### 最佳实践

**何时用 !**：
```
✅ 简单查询命令（ls, pwd, whoami）
✅ Git 状态查询
✅ 快速检查

❌ 复杂操作（让 Claude 执行更安全）
❌ 可能出错的命令
❌ 需要解释的操作
```

**何时让 Claude 执行**：
```
✅ 复杂的文件操作
✅ 需要多步骤的任务
✅ 可能影响系统的操作
✅ 需要解释结果的命令
```

**后台任务最佳实践**：
```
✅ 长时间运行的服务
✅ 监听文件变化的工具
✅ 持续集成任务

❌ 短命令（不值得后台运行）
❌ 需要交互的程序
❌ 一次性快速任务
```

---

<a name="tip-12"></a>
## 12. 快速命令前缀

### 💡 Quick Command Prefixes

Claude Code 提供特殊前缀快速触发不同功能。

**三大前缀**：

| 前缀 | 功能 | 示例 |
|------|------|------|
| `#` | 记忆管理 | `#` → 添加偏好 |
| `/` | Slash 命令 | `/help` `/clear` |
| `!` | Bash 命令 | `!git status` |

### 详细说明

**# - 记忆快捷键**
```
输入：#
效果：弹出记忆管理菜单

┌─ Memory Quick Add ──────────┐
│ → Add Preference            │
│   Add Tool                  │
│   Add Instruction           │
│   View All Memory           │
└─────────────────────────────┘

使用：
1. 输入 #
2. 选择类型
3. 输入内容
4. 自动保存
```

**/ - Slash 命令**
```
常用命令：
/help                  # 帮助
/clear                 # 清除对话
/exit                  # 退出
/memory                # 内存管理
/install-github-app    # GitHub 集成
/terminal-setup        # 终端配置

自定义命令：
/.claude/commands/
├── review.md         # /review
├── test.md           # /test
└── deploy.md         # /deploy
```

**! - Bash 模式**
```
直接执行：
!ls
!git status
!npm test

特点：
- 即时执行
- 不经过 Claude
- 快速查询
```

### 组合使用

**工作流示例**：
```
# 1. 添加项目偏好
#
→ 选择 "Add Preference"
→ "使用 TypeScript strict 模式"

# 2. 检查 Git 状态
!git status

# 3. 清除之前的对话
/clear

# 4. 开始新任务
"创建新的 React 组件"
```

### 自定义 Slash 命令

**创建命令**：
```bash
# 创建 .claude/commands/review.md
```

**review.md 内容**：
```markdown
请审查当前的代码更改：

1. 检查代码质量
2. 查找潜在 bug
3. 提供优化建议
4. 验证测试覆盖率
```

**使用**：
```
# 直接输入
/review

# Claude 会执行 review.md 中的提示
```

**带参数的命令**：
```markdown
# deploy.md
部署到 $ARGUMENTS 环境：

1. 运行测试
2. 构建项目
3. 部署到 $ARGUMENTS
4. 验证部署成功
```

**使用**：
```
/deploy production
/deploy staging
```

### 最佳实践

**前缀选择**：
```
快速查询 → ! 前缀
配置偏好 → # 前缀
执行流程 → / 前缀
复杂任务 → 自然语言
```

**常用组合**：
```
# 开始新项目
/clear           # 清除上下文
#                # 配置项目偏好
!git init        # 初始化 Git

# 日常开发
!git status      # 查看状态
/review          # 代码审查
/test            # 运行测试

# 部署流程
/deploy          # 自定义部署命令
```

---

<a name="tip-13"></a>
## 13. Slash Commands

### 💡 Built-in and Custom Commands

Slash Commands 是 Claude Code 的强大功能，支持内置命令和自定义命令。

**内置 Slash Commands**：

| 命令 | 功能 | 使用场景 |
|------|------|----------|
| `/help` | 显示帮助信息 | 查看可用命令 |
| `/clear` | 清除当前对话 | 开始新任务 |
| `/exit` | 退出 Claude Code | 结束会话 |
| `/memory` | 内存管理 | 查看/管理记忆 |
| `/install-github-app` | 安装 GitHub App | GitHub 集成 |
| `/terminal-setup` | 终端配置 | 配置快捷键 |
| `/bashes` | 查看后台任务 | 管理后台进程 |

### 自定义 Slash Commands

**创建自定义命令**：

```bash
# 1. 创建命令目录
mkdir -p .claude/commands

# 2. 创建命令文件
touch .claude/commands/mycommand.md
```

**命令文件格式**：

```markdown
# .claude/commands/review.md

请审查代码并提供反馈：

1. 代码质量检查
2. 性能优化建议
3. 安全性审查
4. 最佳实践验证
```

**带参数的命令**：

```markdown
# .claude/commands/deploy.md

部署到 $ARGUMENTS 环境：

步骤：
1. 运行测试套件
2. 构建生产版本
3. 部署到 $ARGUMENTS 环境
4. 运行健康检查
5. 通知团队
```

**使用示例**：

```bash
# 基础命令
/review

# 带参数命令
/deploy staging
/deploy production
```

### 实用命令示例

**代码审查命令** (`.claude/commands/review.md`):
```markdown
审查当前更改：

## 检查项
- [ ] 代码符合团队规范
- [ ] 没有明显的 bug
- [ ] 性能考虑得当
- [ ] 安全性无问题
- [ ] 测试覆盖充分
- [ ] 文档已更新

请逐项检查并提供详细反馈。
```

**测试命令** (`.claude/commands/test.md`):
```markdown
运行完整测试流程：

1. 运行单元测试
2. 运行集成测试
3. 生成覆盖率报告
4. 检查测试覆盖率是否达标 (>80%)
5. 显示失败的测试详情
```

**文档命令** (`.claude/commands/docs.md`):
```markdown
为 $ARGUMENTS 生成文档：

包括：
- 功能描述
- 使用示例
- 参数说明
- 返回值
- 异常情况
- 使用注意事项
```

### 最佳实践

**命令命名**：
```
✅ /review, /test, /deploy - 简短易记
✅ /fix-bug, /add-feature - 描述性强
❌ /r, /t, /d - 太简短，不直观
❌ /review-code-and-provide-feedback - 太长
```

**命令组织**：
```
.claude/commands/
├── review.md        # 代码审查
├── test.md          # 测试
├── deploy.md        # 部署
├── docs.md          # 文档生成
├── refactor.md      # 重构
└── debug.md         # 调试
```

---

<a name="tip-14"></a>
## 14. 扩展思考模式

### 💡 Extended Thinking Mode

通过 `Tab` 键启用 Claude 的深度分析模式。

**启用方法**：

**方法 1: Tab 键（持续启用）**
- 按 `Tab` 键切换
- 对后续所有对话生效

**方法 2: 'ultrathink' 关键词（单次启用）**
- 在消息中输入 `ultrathink`
- 仅对当前这一轮对话启用
- 适合临时需要深度分析的场景

**方法 3: 自然语言**
- 在提示中说明 "使用扩展思考"
- "详细分析一下..."

**何时使用**：

```
✅ 复杂算法分析
✅ 架构设计决策
✅ 性能优化方案
✅ Bug 根因分析
✅ 代码审查

❌ 简单查询
❌ 快速操作
❌ 已知解决方案
```

**示例对比**：

**普通模式**：
```
用户: "这个排序算法的复杂度？"
Claude: "O(n log n)"
```

**扩展思考模式**：
```
用户: [Tab 启用] "这个排序算法的复杂度？"

Claude: [Extended Thinking]

思考过程：
1. 识别算法类型：归并排序
2. 分析分治策略：
   - 分解：O(log n) 层
   - 合并：每层 O(n)
3. 总复杂度计算：
   - 时间：O(n log n)
   - 空间：O(n)
4. 最坏/最好/平均情况一致

结论：
- 时间复杂度: O(n log n)
- 空间复杂度: O(n)
- 稳定性: 稳定排序
```

### 使用场景

**场景 1: 架构决策**
```
[Tab]
"我们的系统需要处理百万级并发，
应该选择微服务还是单体架构？
考虑团队规模、部署复杂度、维护成本。"

Claude 会：
- 分析两种架构的优缺点
- 考虑具体场景约束
- 提供详细推理过程
- 给出权衡建议
```

**场景 2: 性能问题**
```
[Tab]
"应用在高负载下响应变慢，
可能的原因和解决方案？"

Claude 会：
- 系统性分析可能原因
- 提供诊断方法
- 建议优化策略
- 展示完整思考链
```

### 'ultrathink' 临时启用技巧

**使用场景**：
```
✅ 大部分时间不需要扩展思考
✅ 偶尔遇到复杂问题需要深度分析
✅ 不想全局启用扩展思考模式
✅ 节省 token（仅在需要时启用）
```

**使用方法**：
```bash
# 示例 1：在消息中包含 ultrathink
用户: "ultrathink 这个算法的时间复杂度是多少？"

Claude: [Extended Thinking - 仅此轮]
        思考过程：
        1. 识别循环结构...
        2. 分析嵌套层级...
        3. 计算总复杂度...

        结论：O(n²)

# 示例 2：下一轮自动恢复普通模式
用户: "还有其他优化建议吗？"
Claude: [Normal Mode]
        可以考虑使用哈希表优化到 O(n)...
```

**对比三种方式**：

| 方式 | 启用范围 | 适用场景 | Token 消耗 |
|------|---------|---------|-----------|
| `Tab` 键 | 持续启用 | 需要连续深度思考 | 高 |
| `ultrathink` | 单次启用 | 偶尔需要深度分析 | 中 |
| 自然语言 | 视情况 | 不确定是否需要 | 低-中 |

**最佳实践**：
```
日常使用：普通模式
遇到难题：在消息中加 'ultrathink'
持续研究：按 Tab 启用扩展思考模式

这样可以平衡思考深度和 token 消耗
```

---

<a name="tip-15"></a>
## 15. Agents（代理系统）

### 💡 Tip: Use /agents to create specialized subagents for complex tasks

**功能说明**：
Agents（代理）是 Claude Code 的强大功能，允许你创建专门的子代理来处理特定类型的任务。每个 agent 都有独立的上下文窗口、自定义系统提示词和特定的工具集。

**启用方法**：
```bash
# 在 Claude Code 中运行
/agents

# 或者直接告诉 Claude
"打开 agents 管理"
"创建一个新的 agent"
```

### 什么是 Agents？

**核心概念**：
```
Agents = 专门的子代理
- 独立的上下文窗口
- 自定义的系统提示词
- 特定的工具权限
- 专注的任务领域
```

**为什么需要 Agents**：
```
1. 专业化分工
   不同 agent 专注不同领域（代码审查、测试、文档等）

2. Token 优化
   重复性任务委托给 agent，避免重复相同指令

3. 并行处理
   多个 agent 同时处理不同任务

4. 上下文隔离
   每个 agent 有独立上下文，互不干扰
```

### 内置 Agents

Claude Code 提供三个内置 agent：

| Agent | 模型 | 功能 | 工具权限 |
|-------|------|------|---------|
| `general-purpose` | Sonnet | 通用任务处理 | 所有工具 (*) |
| `statusline-setup` | Sonnet | 状态栏配置 | Read, Edit |
| `output-style-setup` | Sonnet | 输出风格设置 | Read, Write, Edit, Glob, Grep |

### 使用 Agents 的两种方式

#### 方式 1️⃣：自动调用（推荐）✨

Claude 会根据你的任务描述**智能选择**合适的 agent：

```bash
# 示例 1：搜索任务
用户: "搜索项目中所有的 TODO 注释"
Claude: [自动启动 general-purpose agent]
        正在搜索...

# 示例 2：多步骤任务
用户: "分析这个复杂的算法并优化性能"
Claude: [自动启动 general-purpose agent]
        步骤 1: 分析算法复杂度...
        步骤 2: 识别瓶颈...
        步骤 3: 提供优化方案...
```

**自动调用的判断依据**：
- 任务的复杂度
- 需要的工具类型
- Agent 的专业领域描述
- 当前的上下文

#### 方式 2️⃣：显式调用（精确控制）🎯

直接指定要使用的 agent：

**语法格式**：
```bash
# 中文
"让 [agent名称] 来 [执行任务]"
"使用 [agent名称] 执行 [任务]"

# 英文
"Use the [agent-name] agent to [task]"
"Have the [agent-name] agent [task]"
```

**实际示例**：
```bash
# 指定通用 agent
"使用 general-purpose agent 搜索所有包含 'useState' 的文件"

# 指定状态栏配置 agent
"让 statusline-setup agent 配置我的状态栏显示"

# 指定输出风格 agent
"使用 output-style-setup agent 改为简洁输出模式"
```

### 创建自定义 Agents

#### 方法 1：通过 /agents 命令

```bash
# 1. 打开 agents 管理界面
/agents

# 2. 点击 "Create new agent"

# 3. 配置 agent
Name: code-reviewer
Description: 专门审查代码质量和安全性
Model: sonnet
Tools: Read, Grep, Bash(git:*)

# 4. 编写系统提示词
System Prompt:
你是一个专业的代码审查员。审查代码时关注：
1. 代码质量和可读性
2. 潜在的 bug 和边界情况
3. 性能问题
4. 安全漏洞
5. 最佳实践

对每个问题提供：
- 问题描述
- 严重程度（高/中/低）
- 具体位置（文件:行号）
- 改进建议
```

#### 方法 2：通过配置文件

在项目中创建 `.claude/agents/` 目录：

```bash
# 创建 agents 目录
mkdir -p .claude/agents

# 创建 agent 配置文件
touch .claude/agents/code-reviewer.json
```

**配置文件示例**：
```json
{
  "name": "code-reviewer",
  "description": "专门审查代码质量、性能和安全性",
  "model": "sonnet",
  "systemPrompt": "你是一个专业的代码审查员...",
  "allowedTools": [
    "Read",
    "Grep",
    {
      "tool": "Bash",
      "patterns": ["git:*"]
    }
  ]
}
```

### 常见 Agent 类型示例

#### 1. 代码审查 Agent
```json
{
  "name": "code-reviewer",
  "description": "审查代码质量、性能和安全性",
  "systemPrompt": "专注于代码审查，检查质量、性能、安全性...",
  "allowedTools": ["Read", "Grep", "Bash(git:*)"]
}
```

#### 2. 测试 Agent
```json
{
  "name": "test-runner",
  "description": "运行测试并分析测试覆盖率",
  "systemPrompt": "运行测试套件，分析失败原因，提供修复建议...",
  "allowedTools": ["Bash", "Read", "Write"]
}
```

#### 3. 文档生成 Agent
```json
{
  "name": "doc-generator",
  "description": "生成 API 文档和代码注释",
  "systemPrompt": "为代码生成清晰的文档和注释...",
  "allowedTools": ["Read", "Write", "Edit"]
}
```

#### 4. 调试助手 Agent
```json
{
  "name": "debugger",
  "description": "定位和修复代码中的 bug",
  "systemPrompt": "分析错误信息，定位问题根源，提供修复方案...",
  "allowedTools": ["Read", "Grep", "Bash", "Edit"]
}
```

#### 5. 性能优化 Agent
```json
{
  "name": "performance-optimizer",
  "description": "分析和优化代码性能",
  "systemPrompt": "识别性能瓶颈，提供优化建议和实现...",
  "allowedTools": ["Read", "Bash", "Edit"]
}
```

### 实战场景

#### 场景 1：代码审查工作流

```bash
# 提交代码前让 agent 审查
用户: "让 code-reviewer 审查我最近的更改"

Code Reviewer Agent:
正在审查 src/components/Button.tsx...

发现 3 个问题：
1. [中] 缺少 PropTypes 验证 (Button.tsx:15)
   建议：添加 prop types 或使用 TypeScript 接口

2. [低] 可以使用更简洁的写法 (Button.tsx:23)
   建议：使用可选链操作符 ?.

3. [高] 潜在的 XSS 漏洞 (Button.tsx:31)
   建议：对用户输入进行转义
```

#### 场景 2：并行执行多个 Agents

```bash
用户: "同时让 code-reviewer 审查代码，
      test-runner 运行测试"

Claude: 正在启动两个 agents...

[Code Reviewer]
✓ 审查完成，发现 5 个问题

[Test Runner]
✓ 测试完成，23/25 通过，2 个失败

详细结果：
[两个 agent 的完整输出]
```

#### 场景 3：专门的中文文档 Agent

```json
{
  "name": "chinese-doc-writer",
  "description": "生成符合中文习惯的技术文档",
  "systemPrompt": "你是专业的中文技术文档编写者...",
  "allowedTools": ["Read", "Write", "Edit", "Grep"]
}
```

**使用**：
```bash
用户: "让 chinese-doc-writer 为这个项目生成中文 README"

Chinese Doc Writer:
正在分析项目结构...
生成的文档包含：
- 项目简介
- 快速开始
- 功能特性
- API 文档
- 贡献指南
```

### Agents vs 普通对话

| 对比维度 | 普通对话 | Agents |
|---------|---------|--------|
| 上下文 | 共享主对话上下文 | 独立上下文窗口 |
| 专业化 | 通用能力 | 专注特定领域 |
| 可复用性 | 需要重复指令 | 配置一次，反复使用 |
| 并行处理 | 不支持 | 支持多个 agent 并行 |
| Token 效率 | 重复指令消耗多 | 配置保存，长期省 token |

### 最佳实践

#### ✅ 何时使用 Agents

```
1. 重复性任务
   每次代码审查都需要检查相同的点

2. 专业领域
   需要特定领域知识（安全、性能、测试）

3. 复杂工作流
   多步骤任务需要保持上下文

4. 团队协作
   统一的代码审查标准

5. Token 优化
   避免每次都重复相同的详细指令
```

#### ❌ 何时不需要 Agents

```
1. 一次性任务
   只做一次的操作

2. 简单查询
   快速查看文件内容

3. 探索性工作
   不确定具体要做什么

4. 学习阶段
   刚开始学习 Claude Code
```

### 管理 Agents

#### 查看所有 Agents
```bash
/agents

输出:
┌─ Agents ─────────────────────────┐
│ Built-in (always available):     │
│ • general-purpose · sonnet       │
│ • statusline-setup · sonnet      │
│ • output-style-setup · sonnet    │
│                                   │
│ Custom:                           │
│ • code-reviewer · sonnet         │
│ • test-runner · sonnet           │
│ • doc-generator · sonnet         │
└──────────────────────────────────┘
```

#### 编辑 Agent
```bash
"编辑 code-reviewer agent"

# 或在 /agents 界面中选择 agent → Edit
```

#### 删除 Agent
```bash
"删除 test-runner agent"

# 或在配置文件中删除对应的 JSON 文件
rm .claude/agents/test-runner.json
```

### 高级技巧

#### 1. Agent 链式调用
```bash
用户: "让 code-reviewer 审查代码，
      然后让 test-runner 运行测试，
      最后让 doc-generator 更新文档"

Claude: 按顺序执行三个 agents...
1. Code Reviewer → 完成
2. Test Runner → 完成
3. Doc Generator → 完成
```

#### 2. 条件调用
```bash
用户: "如果 code-reviewer 发现严重问题，
      停止并通知我；否则继续运行测试"

Claude: 启动 code-reviewer...
        发现 [高] 级别问题，暂停流程

        是否要修复后继续？
```

#### 3. Agent 模板
```bash
# 创建可复用的 agent 模板
.claude/agents/templates/
├── reviewer-template.json
├── tester-template.json
└── optimizer-template.json

# 基于模板快速创建新 agent
"基于 reviewer-template 创建一个 security-reviewer"
```

### 故障排查

#### 问题：Agent 无法访问某些工具
```bash
错误: "Agent 'code-reviewer' cannot access tool 'Write'"

解决:
1. 检查 agent 配置中的 allowedTools
2. 添加需要的工具权限
3. 重启 Claude Code
```

#### 问题：Agent 没有被自动调用
```bash
原因: 任务描述不够明确

解决:
- 更明确地描述任务
- 或使用显式调用：
  "使用 code-reviewer agent 审查这段代码"
```

#### 问题：多个 Agent 冲突
```bash
情况: 两个 agent 的描述太相似

解决:
- 明确每个 agent 的专业领域
- 使用显式调用指定具体的 agent
```

### Token 优化

**使用 Agents 的 Token 节省**：

```
传统方式（每次都给完整指令）:
用户: "审查代码，关注质量、性能、安全、测试..."
消耗: ~500 tokens/次
10 次审查: ~5,000 tokens

使用 Agents:
配置 code-reviewer agent: ~800 tokens (一次性)
用户: "让 code-reviewer 审查"
消耗: ~100 tokens/次
10 次审查: 800 + 1,000 = ~1,800 tokens

节省: ~3,200 tokens (64%)
```

### 快速参考

#### 常用命令
```bash
/agents                  # 打开 agents 管理
"创建新 agent"           # 创建
"编辑 [name] agent"      # 编辑
"删除 [name] agent"      # 删除
"列出所有 agents"        # 列表
```

#### 调用 Agent
```bash
# 自动调用（推荐）
"搜索项目中的所有 TypeScript 文件"

# 显式调用
"使用 [agent-name] agent 执行 [task]"
"让 [agent-name] 来 [task]"
```

#### Agent 配置文件位置
```bash
项目级: .claude/agents/*.json
用户级: ~/.claude/agents/*.json
```

### 相关资源

- 📖 [Agents 官方文档](https://docs.claude.com/en/docs/claude-code/sub-agents)
- 📖 [创建自定义 Agents 指南](https://docs.claude.com/en/docs/claude-code/sdk/subagents)
- 💡 [Agent 最佳实践](https://docs.claude.com/en/docs/claude-code/best-practices)

---

<a name="tip-16"></a>
## 16. 会话管理

### 💡 Session Management

有效管理 Claude Code 会话以保持上下文清晰。

**清除会话**：
```bash
/clear  # 清除当前对话上下文
```

**何时清除**：
```
✅ 开始新任务
✅ 切换项目
✅ 上下文过长影响性能
✅ 出现错误需要重新开始

❌ 任务进行中
❌ 需要保留上下文信息
```

**会话持久化**：
```
# Claude Code 会自动保存：
- 对话历史（可通过 ↑ 或 Esc Esc 访问）
- 记忆信息（通过 # 或 /memory 管理）
- 命令历史（通过 Ctrl+R 搜索）
```

**工作流建议**：

```bash
# 早晨开始工作
/clear                    # 清除昨天的上下文
#                         # 回顾项目配置
"继续昨天的功能开发"        # 简要说明任务

# 切换任务
/clear                    # 清除当前上下文
"现在要修复 bug #123"      # 新任务说明

# 长时间对话后
/clear                    # 定期清理，保持性能
"总结一下已完成的工作，然后继续"
```

### 命令行启动参数：恢复会话

除了在 Claude Code 内使用 `/resume` 命令，你也可以通过命令行参数直接恢复会话：

**方法 1: `--resume` 参数**
```bash
# 显示会话列表并选择恢复
claude --resume

# 等同于启动后运行 /resume
```

**方法 2: `--continue` 参数**
```bash
# 自动恢复最近的会话
claude --continue

# 快速继续上次的工作
# 跳过选择，直接恢复
```

**两者区别**：

| 参数 | 行为 | 使用场景 |
|------|------|----------|
| `--resume` | 显示会话列表，让你选择 | 想要选择特定的历史会话 |
| `--continue` | 直接恢复最近的会话 | 继续刚才的工作 |

**实际示例**：

**场景 1: 继续刚才的工作**
```bash
# 昨晚工作到一半退出了
$ claude --continue

Claude Code
恢复会话：2025-01-14 23:45 - 开发用户认证功能

# 直接回到昨晚的上下文
Claude: 我们正在开发用户认证功能。
        上次完成了：
        - JWT token 生成
        - Login 端点

        还需要：
        - Logout 功能
        - Token 刷新机制

        现在继续吗？
```

**场景 2: 选择特定会话**
```bash
$ claude --resume

┌─ Recent Sessions ────────────────────┐
│ 1. [今天 23:45] 开发用户认证功能     │
│ 2. [今天 15:30] 修复性能 bug         │
│ 3. [昨天 18:20] 代码审查            │
│ 4. [昨天 10:15] 配置 CI/CD          │
└──────────────────────────────────────┘

选择 [1-4] 或 Enter 取消: 3

# 恢复昨天的代码审查会话
Claude: 恢复会话：昨天 18:20 - 代码审查
        我们正在审查 PR #123...
```

**场景 3: 快速切换工作流**
```bash
# 早晨启动
$ claude --continue
# 继续昨天的任务

# 中午需要查看之前的讨论
$ exit
$ claude --resume
# 选择特定的历史会话

# 下午继续早晨的工作
$ claude --continue
# 又回到最近的会话
```

**与 /resume 的关系**：
```
命令行参数（启动前）：
claude --resume    = 启动后立即 /resume
claude --continue  = 启动后自动恢复最近会话

会话内命令（启动后）：
/resume            = 查看并选择会话
```

**最佳实践**：
```bash
# 日常习惯
上午: claude --continue        # 继续昨天的工作
中午: exit + claude --resume   # 查看其他项目
下午: claude --continue        # 继续上午的任务

# 新任务
claude                          # 全新开始
claude --resume                 # 从某个历史点继续
```

---

<a name="tip-17"></a>
## 17. 权限管理

### 💡 Permission Management

Claude Code 提供灵活的权限控制。

### 使用 /permissions 命令

**功能说明**：
`/permissions` 命令允许你预先批准或拒绝特定类型的操作，避免重复确认，提高工作效率。

**启动命令**：
```bash
# 在 Claude Code 中运行
/permissions

# 或者直接告诉 Claude
"配置权限设置"
"管理工具权限"
```

**权限配置界面**：
```
┌─ Permissions Configuration ──────────────┐
│                                           │
│ Pre-approve tools:                        │
│ □ Bash (all commands)                     │
│ □ Bash (git:* only)                       │
│ □ Edit                                    │
│ □ Write                                   │
│ □ Read                                    │
│ □ MCP Tools                               │
│                                           │
│ Pre-deny tools:                           │
│ □ Bash (rm, rmdir, dd, etc.)             │
│ □ Write (to system directories)          │
│                                           │
│ [Apply] [Cancel] [Reset to Default]      │
└───────────────────────────────────────────┘
```

### 预批准（Pre-approve）

**常见配置**：

**配置 1: 信任 Git 操作**
```bash
/permissions

✓ Pre-approve: Bash (git:*)
✓ Pre-approve: Read
✓ Pre-approve: Edit

效果：
- 所有 git 命令自动批准
- 文件读取和编辑自动批准
- 其他操作仍需确认
```

**配置 2: 开发模式（高信任）**
```bash
/permissions

✓ Pre-approve: Bash (all commands)
✓ Pre-approve: Edit
✓ Pre-approve: Write
✓ Pre-approve: Read

⚠️ 注意：仅在受信任的项目中使用
```

**配置 3: 只读模式（安全审查）**
```bash
/permissions

✓ Pre-approve: Read
✓ Pre-approve: Grep
✓ Pre-approve: Glob
✗ Pre-deny: Edit
✗ Pre-deny: Write
✗ Pre-deny: Bash

效果：
- 只能查看和搜索
- 不能修改任何文件
- 适合代码审查和学习
```

### 预拒绝（Pre-deny）

**危险操作防护**：
```bash
/permissions

✗ Pre-deny: Bash (rm -rf)
✗ Pre-deny: Bash (dd)
✗ Pre-deny: Bash (mkfs)
✗ Pre-deny: Write (to /etc/*)
✗ Pre-deny: Write (to /System/*)

效果：
- 自动阻止危险的删除操作
- 防止系统文件被修改
- 提供安全防护层
```

### 实用场景

**场景 1: 日常开发工作流**
```bash
# 启动时配置
/permissions
✓ Bash (git:*)  - Git 操作无需确认
✓ Edit          - 代码编辑无需确认
✓ Read          - 文件读取无需确认

# 工作时
用户: "重构这个组件"
Claude: [自动批准 Read, Edit]
        正在读取文件...
        正在应用修改...
        完成！

用户: "提交更改"
Claude: [自动批准 git add, git commit]
        已提交：refactor: 重构组件结构
```

**场景 2: 团队协作安全模式**
```bash
# 审查他人代码时
/permissions
✓ Read, Grep, Glob  - 可以查看
✗ Edit, Write       - 禁止修改
✗ Bash             - 禁止执行命令

# 效果
用户: "帮我修复这个 bug"
Claude: ❌ Error: Edit tool is pre-denied
        我可以：
        - 分析问题
        - 提供修复建议
        - 生成代码示例

        但无法直接修改文件
```

**场景 3: 特定工具授权（MCP）**
```bash
/permissions
✓ MCP: github_*     - GitHub MCP 工具
✓ MCP: docker_*     - Docker MCP 工具
✗ MCP: filesystem_* - 禁止文件系统 MCP

效果：
- 允许 GitHub 操作
- 允许 Docker 管理
- 禁止文件系统 MCP 直接访问
```

### 权限配置持久化

**配置文件位置**：
```bash
# 用户级配置（全局）
~/.claude/permissions.json

# 项目级配置（特定项目）
.claude/permissions.json
```

**配置文件示例**：
```json
{
  "preApprove": [
    "Read",
    "Grep",
    "Glob",
    {
      "tool": "Bash",
      "patterns": ["git:*", "npm:*", "yarn:*"]
    },
    {
      "tool": "Edit",
      "paths": ["src/**", "tests/**"]
    }
  ],
  "preDeny": [
    {
      "tool": "Bash",
      "patterns": ["rm:-rf", "dd", "mkfs"]
    },
    {
      "tool": "Write",
      "paths": ["/etc/**", "/System/**"]
    }
  ]
}
```

### 查看当前权限

```bash
# 方式 1: 命令查看
/permissions status

输出:
┌─ Current Permissions ────────────────┐
│ Pre-approved:                         │
│ ✓ Read                                │
│ ✓ Bash (git:*)                        │
│ ✓ Edit (src/** only)                  │
│                                       │
│ Pre-denied:                           │
│ ✗ Bash (rm, dd)                       │
│ ✗ Write (/etc/**, /System/**)         │
└───────────────────────────────────────┘

# 方式 2: 自然语言
"显示当前的权限配置"
"列出已批准的工具"
```

### 重置权限

```bash
# 重置为默认（所有操作都需要确认）
/permissions reset

# 清除所有预批准
/permissions clear

# 恢复到项目默认配置
/permissions restore-project-default
```

### 命令行启动参数

除了 `/permissions` 命令，你也可以在启动时配置：

**默认模式**：
```bash
# 每次操作都需要确认
claude
```

**跳过权限检查** (谨慎使用):
```bash
# 跳过文件和命令权限提示
claude --dangerously-skip-permissions
```

**指定允许的工具**：
```bash
# 只允许特定工具
claude --allowedTools "Bash(git:*)" "Write" "Read"
```

**使用建议**：

| 场景 | 推荐设置 | 原因 |
|------|---------|------|
| 学习阶段 | 默认模式 | 了解每个操作 |
| 熟悉项目 | `--dangerously-skip-permissions` | 提高效率 |
| 生产环境 | 默认模式 + 限制工具 | 安全第一 |
| 演示/教学 | 默认模式 | 展示过程 |

**安全实践**：
```
✅ 在 Git 仓库中工作（可回滚）
✅ 定期备份重要文件
✅ 审查 Claude 的操作计划
✅ 对重要操作使用 Plan Mode

⚠️ 谨慎使用 skip-permissions
⚠️ 不要在未备份的项目中使用
```

---

<a name="tip-18"></a>
## 18. 文件引用

### 💡 File References

在 Claude Code 中引用文件的多种方式。

**方法 1: 直接提及文件名**
```
"分析 src/index.ts 中的性能问题"
"修复 package.json 中的依赖冲突"
```

**方法 2: 使用 @ 符号**
```
"审查 @src/components/Button.tsx"
"比较 @old-version.js 和 @new-version.js"
```

**方法 3: 拖拽文件**
```
# 在 macOS 上
[按住 Shift] + [拖拽文件到终端]

# 自动插入文件路径
```

**方法 4: 通配符**
```
"分析所有 src/**/*.test.ts 文件"
"检查 components/ 下的所有 .tsx 文件"
```

**批量文件操作**：
```
"重构以下文件：
- src/utils/helper.ts
- src/utils/formatter.ts
- src/utils/validator.ts

统一使用 ESM 导入语法"
```

### 最佳实践

**清晰的文件引用**：
```
✅ "修改 src/components/Header.tsx 的样式"
✅ "比较 v1/api.js 和 v2/api.js 的区别"

❌ "修改那个文件"
❌ "检查刚才的代码"
```

**使用相对路径**：
```
# 当前在项目根目录
✅ "读取 ./src/index.ts"
✅ "读取 src/index.ts"

# 明确指定
✅ "读取 /absolute/path/to/file.ts"
```

---

<a name="tip-19"></a>
## 19. 后台任务

### 💡 Background Tasks

管理长时间运行的任务。

**将任务移到后台**：
```bash
# 启动任务
npm run dev

# 按 Ctrl+B 移到后台
[Background] Task moved to background (ID: bg_1234)
```

**查看后台任务**：
```bash
/bashes

输出:
┌─────────────────────────────────┐
│ ID       Command      Status     │
├─────────────────────────────────┤
│ bg_1234  npm run dev  Running    │
│ bg_5678  npm test     Running    │
└─────────────────────────────────┘
```

**管理后台任务**：
```
# 查看输出
"显示 bg_1234 的输出"

# 停止任务
"停止 bg_1234"

# 查看所有任务状态
"显示所有后台任务的状态"
```

**适合后台运行的任务**：
```
✅ 开发服务器 (npm run dev)
✅ 文件监听 (watch mode)
✅ 长时间构建
✅ 持续测试

❌ 短命令
❌ 需要交互的程序
❌ 一次性脚本
```

---

<a name="tip-20"></a>
## 20. 模型切换

### 💡 Model Selection

根据任务选择合适的模型。

**可用模型**：
```bash
# Sonnet (默认) - 平衡速度和质量
claude --model sonnet

# Opus - 最高质量，复杂任务
claude --model opus

# Haiku - 最快速度，简单任务
claude --model haiku
```

**选择建议**：

| 任务类型 | 推荐模型 | 原因 |
|---------|---------|------|
| 代码审查 | Opus | 需要深度分析 |
| 快速查询 | Haiku | 速度优先 |
| 日常开发 | Sonnet | 性价比最佳 |
| 架构设计 | Opus | 需要全面考虑 |
| 代码格式化 | Haiku | 简单任务 |

**使用示例**：
```bash
# 复杂的架构讨论
claude --model opus
"设计一个高可用的分布式系统架构"

# 快速代码检查
claude --model haiku
"这段代码有语法错误吗？"

# 日常开发
claude --model sonnet
"帮我重构这个组件"
```

---

<a name="tip-21"></a>
## 21. 批量处理

### 💡 Batch Processing

高效处理重复任务。

**使用管道**：
```bash
# 批量分析 JS 文件
find . -name "*.js" -exec claude -p "分析文件: {}" \;

# 批量重命名
ls *.old.js | xargs -I {} claude -p "重命名 {} 为新格式"
```

**批量文件操作**：
```
"批量处理以下文件：
1. 将所有 .jsx 重命名为 .tsx
2. 添加 TypeScript 类型
3. 更新导入语句

文件列表：
- src/components/*.jsx
"
```

**脚本自动化**：
```bash
#!/bin/bash
# batch-review.sh

for file in src/**/*.ts; do
  echo "Reviewing $file..."
  claude -p "审查 $file 并提供改进建议" >> review-log.txt
done
```

**最佳实践**：
```
✅ 明确指定文件范围
✅ 使用 Git 保护原文件
✅ 先在小范围测试
✅ 记录处理日志

❌ 不加确认的批量删除
❌ 未测试的批量修改
❌ 忽略错误继续执行
```

---

<a name="tip-22"></a>
## 22. Git Worktrees 并行会话

### 💡 Tip: Use git worktrees to run multiple Claude sessions in parallel

**功能说明**：
Git worktrees 允许你在同一个 Git 仓库的不同分支上同时工作，结合 Claude Code 可以实现真正的并行开发 workflow。

### 什么是 Git Worktrees？

**核心概念**：
```
Git Worktree = 同一仓库的多个工作目录
- 共享 .git 目录
- 不同的工作目录
- 独立的分支检出
- 可以同时操作
```

**为什么需要 Worktrees + Claude？**
```
1. 并行开发
   功能 A 和 bug 修复 B 同时进行

2. 快速切换
   无需 stash 或 commit 就能切换任务

3. 独立的 Claude 会话
   每个 worktree 运行独立的 Claude Code

4. 互不干扰
   不同任务的文件修改完全隔离
```

### 基础使用

#### 创建 Worktree

```bash
# 基本语法
git worktree add <path> <branch>

# 示例：创建新功能分支的 worktree
git worktree add ../project-feature-auth feature/auth

# 目录结构
~/projects/
├── my-project/           # 主工作目录（main 分支）
├── my-project-feature-auth/    # worktree（feature/auth 分支）
└── my-project-hotfix/          # worktree（hotfix/bug-123 分支）
```

#### 基于现有分支

```bash
# 基于现有分支创建 worktree
git worktree add ../project-dev develop

# 基于远程分支创建
git worktree add ../project-feature origin/feature/new-api
```

#### 创建新分支

```bash
# 同时创建新分支和 worktree
git worktree add -b feature/user-profile ../project-user-profile

# 相当于
# git checkout -b feature/user-profile
# git worktree add ../project-user-profile feature/user-profile
```

### 与 Claude Code 并行使用

#### 场景 1：功能开发 + 紧急修复

```bash
# 当前在主项目开发新功能
cd ~/projects/my-project
claude
Claude: 正在开发用户认证功能...

# 突然需要修复生产环境 bug
# 新开终端 Tab/窗口
git worktree add ../my-project-hotfix main
cd ../my-project-hotfix
claude
Claude: [新会话] 准备修复 bug...

# 修复完成后
git add . && git commit && git push
git worktree remove ../my-project-hotfix

# 回到主项目，继续功能开发
# 第一个 Claude 会话还在，上下文完整保留！
```

#### 场景 2：Code Review + 继续开发

```bash
# 终端 1：继续开发
~/projects/my-project (feature/new-api)
$ claude
Claude: 正在实现新 API 端点...

# 终端 2：审查 PR
$ git worktree add ../my-project-review pr/123
$ cd ../my-project-review
$ claude
Claude: [新会话] 开始审查 PR #123...

# 两个 Claude 会话互不干扰
# 可以同时进行开发和审查
```

#### 场景 3：多功能并行开发

```bash
# 设置多个 worktrees
git worktree add ../project-auth feature/auth
git worktree add ../project-payment feature/payment
git worktree add ../project-notification feature/notification

# 在 3 个终端窗口中同时运行 Claude
# 终端 1
cd ~/projects/project-auth
claude  # Claude 会话 1：开发认证功能

# 终端 2
cd ~/projects/project-payment
claude  # Claude 会话 2：开发支付功能

# 终端 3
cd ~/projects/project-notification
claude  # Claude 会话 3：开发通知功能

# 三个功能完全独立开发，互不影响
```

### 实战工作流

#### 完整的并行开发流程

```bash
# 1. 主项目：正在进行长期功能开发
cd ~/projects/my-app
claude
用户: "实现复杂的数据可视化功能"
Claude: 步骤 1/10 - 设计数据结构...

# 2. 紧急任务来了：修复关键 bug
# 打开新终端
git worktree add ../my-app-hotfix main
cd ../my-app-hotfix
claude
用户: "修复订单计算错误"
Claude: [新会话] 正在定位问题...
       修复完成！

git add . && git commit -m "fix: 订单计算错误"
git push

# 3. hotfix 合并后，移除 worktree
cd ~/projects/my-app
git worktree remove ../my-app-hotfix

# 4. 回到第一个终端，长期功能继续
# Claude 上下文完全保留
Claude: 步骤 2/10 - 实现图表组件...
```

#### 使用别名简化操作

```bash
# 添加到 ~/.bashrc 或 ~/.zshrc
alias gwt-add='git worktree add'
alias gwt-list='git worktree list'
alias gwt-remove='git worktree remove'
alias gwt-prune='git worktree prune'

# 使用别名
gwt-add ../my-app-feature feature/new-ui
gwt-list
gwt-remove ../my-app-feature
```

### 管理 Worktrees

#### 查看所有 Worktrees

```bash
git worktree list

输出:
/Users/me/projects/my-app           abc123d [main]
/Users/me/projects/my-app-feature   def456e [feature/auth]
/Users/me/projects/my-app-hotfix    ghi789f [hotfix/bug-fix]
```

#### 删除 Worktree

```bash
# 方法 1：直接删除（推荐）
git worktree remove ../my-app-feature

# 方法 2：手动删除目录后清理
rm -rf ../my-app-feature
git worktree prune
```

#### 移动 Worktree

```bash
# 移动 worktree 到新位置
git worktree move ../my-app-feature ../new-location/my-app-feature
```

### 最佳实践

#### ✅ 推荐做法

**1. 清晰的目录命名**
```bash
# 好的命名
git worktree add ../my-app-feature-auth feature/auth
git worktree add ../my-app-hotfix-123 hotfix/bug-123
git worktree add ../my-app-review-pr-456 pr/456

# 避免混淆
❌ git worktree add ../temp main
❌ git worktree add ../test feature/auth
```

**2. 用完即删**
```bash
# 功能开发完成后立即删除 worktree
git worktree remove ../my-app-feature

# 避免留下大量无用的 worktrees
```

**3. 配合 tmux/screen 使用**
```bash
# 使用 tmux 管理多个 Claude 会话
tmux new-session -s main     # 主项目
tmux new-session -s feature  # 功能分支
tmux new-session -s hotfix   # 紧急修复

# 在每个 session 中运行独立的 Claude
```

**4. 定期清理**
```bash
# 查看所有 worktrees
git worktree list

# 删除不再使用的
git worktree prune
```

#### ❌ 避免的陷阱

**1. 在同一分支创建多个 worktrees**
```bash
# ❌ 错误：同一分支不能有多个 worktrees
git worktree add ../dir1 main
git worktree add ../dir2 main  # 会失败

# ✅ 正确：每个 worktree 使用不同分支
git worktree add ../dir1 main
git worktree add ../dir2 develop
```

**2. 忘记删除 worktrees**
```bash
# ❌ 问题：积累大量未使用的 worktrees
git worktree list
# 显示 10+ 个旧的 worktrees

# ✅ 解决：定期清理
git worktree prune
```

**3. 混淆工作目录**
```bash
# ❌ 问题：在错误的 worktree 中提交代码

# ✅ 解决：使用清晰的 PS1 提示符
# 在 ~/.bashrc 中添加
export PS1='\w $(__git_ps1 "(%s)") $ '
```

### 高级技巧

#### 使用 bare 仓库 + Worktrees

```bash
# 1. 克隆为 bare 仓库
git clone --bare git@github.com:user/repo.git repo.git
cd repo.git

# 2. 创建 worktrees（没有"主"工作目录）
git worktree add ../repo-main main
git worktree add ../repo-develop develop
git worktree add ../repo-feature feature/new

# 3. 每个功能都是独立的 worktree
# 没有"主"目录的特权

# 目录结构
~/projects/
├── repo.git/           # bare 仓库
├── repo-main/          # main 分支
├── repo-develop/       # develop 分支
└── repo-feature/       # feature 分支
```

#### 配合 IDE 使用

```bash
# VS Code：打开多个窗口
code ~/projects/my-app           # 主项目
code ~/projects/my-app-feature   # 功能分支
code ~/projects/my-app-review    # 审查分支

# 每个窗口运行独立的 Claude Code（通过终端）
```

#### 脚本自动化

```bash
#!/bin/bash
# create-feature-worktree.sh

BRANCH_NAME=$1
WORKTREE_PATH="../$(basename $(pwd))-${BRANCH_NAME}"

echo "Creating worktree for branch: $BRANCH_NAME"
git worktree add -b "$BRANCH_NAME" "$WORKTREE_PATH"
cd "$WORKTREE_PATH"

echo "Starting Claude Code..."
claude

# 使用
# ./create-feature-worktree.sh feature/user-auth
```

### 常见问题

#### Q: Worktrees 会占用多少磁盘空间？
```
A: 只复制工作目录文件，共享 .git 目录
   - 单个 worktree ≈ 项目源码大小
   - 不会复制 .git 历史（节省空间）
```

#### Q: 可以在 worktrees 之间共享未提交的更改吗？
```
A: 不可以，每个 worktree 完全独立
   - 需要提交或 stash 才能在 worktrees 间共享更改
```

#### Q: 删除 worktree 会影响其他 worktrees 吗？
```
A: 不会，完全独立
   - 但需要合并分支后再删除
   - 否则分支上的更改会丢失
```

### 实用命令速查

```bash
# 创建 worktree
git worktree add <path> <branch>
git worktree add -b <new-branch> <path>

# 查看 worktrees
git worktree list

# 删除 worktree
git worktree remove <path>

# 移动 worktree
git worktree move <old-path> <new-path>

# 清理无效的 worktrees
git worktree prune

# 修复损坏的 worktree
git worktree repair
```

### 与 Claude Code 的协同优势

| 场景 | 传统方式 | Worktrees + Claude |
|------|---------|-------------------|
| 紧急修复 | stash → 切换分支 → 修复 → 切换回来 → pop | 新 worktree → Claude 修复 → 删除 worktree |
| 代码审查 | 切换分支 → 审查 → 切换回来 | 新 worktree → Claude 审查 → 保留原会话 |
| 并行开发 | 频繁 commit/stash | 多个 worktree → 多个 Claude 会话 |
| 上下文保留 | 丢失 shell 历史和环境 | 每个 worktree 独立 Claude 上下文 |

---

<a name="tip-23"></a>
## 23. IDE 集成

### 💡 Tip: Connect Claude to your IDE · /ide

**功能说明**：
使用 `/ide` 命令可以将 Claude Code 与你的 IDE（集成开发环境）连接，实现更高效的开发工作流。

**启用方法**：
```bash
# 在 Claude Code 中运行
/ide

# 或者直接告诉 Claude
"连接到我的 IDE"
"设置 IDE 集成"
```

**支持的 IDE**：
- Visual Studio Code (VS Code)
- JetBrains IDEs (IntelliJ IDEA, WebStorm, PyCharm, etc.)
- Cursor
- Neovim
- 其他支持 LSP 的编辑器

### 核心功能

**实时代码同步**：
```
功能：
✓ Claude 可以直接访问 IDE 中打开的文件
✓ 自动感知当前编辑的代码
✓ 无需手动复制粘贴代码
✓ 支持多文件同时编辑
```

**光标位置感知**：
```
场景：
你在 IDE 中光标停在某个函数上

Claude Code 中：
"解释这个函数" → 自动识别光标位置的函数
"重构这段代码" → 自动处理选中的代码
"添加类型注解" → 精确定位到当前位置
```

**双向编辑**：
```
IDE → Claude Code:
- Claude 可以读取 IDE 中的更改
- 实时同步文件状态

Claude Code → IDE:
- Claude 的修改直接反映到 IDE
- 支持 IDE 的撤销/重做
- 保持 IDE 的历史记录
```

### 使用场景

**场景 1: 快速代码审查**
```
[在 IDE 中打开文件并选中代码]

Claude Code:
用户: "审查这段代码"
Claude: [自动识别选中的代码]
        分析：
        - 发现潜在的性能问题
        - 建议使用更简洁的写法
        - 提供重构建议
```

**场景 2: 上下文感知重构**
```
[在 IDE 中编辑 Button.tsx]

Claude Code:
用户: "将这个组件改为使用 hooks"
Claude: [识别当前文件和项目结构]
        - 自动分析依赖关系
        - 重构组件逻辑
        - 更新相关导入
        - 保持代码风格一致
```

**场景 3: 多文件协作**
```
[在 IDE 中打开多个相关文件]

Claude Code:
用户: "统一这些文件的错误处理方式"
Claude: [识别所有打开的文件]
        处理：
        - api/users.ts
        - api/posts.ts
        - api/comments.ts

        统一使用 try-catch 包装器
```

**场景 4: 实时调试辅助**
```
[在 IDE 中调试代码，遇到问题]

Claude Code:
用户: "为什么这里会出现 undefined？"
Claude: [读取当前文件和断点位置]
        分析：
        - 变量在此作用域未定义
        - 建议在第 X 行添加初始化
        - 提供修复代码
```

### 配置步骤

**VS Code 集成**：
```bash
# 1. 启动 IDE 连接
/ide

# 2. 选择 VS Code
→ Visual Studio Code

# 3. VS Code 中会弹出授权提示
→ 允许 Claude Code 访问

# 4. 连接成功
✓ Connected to VS Code
✓ Workspace: /path/to/project
✓ Open files: 3
```

**JetBrains 集成**：
```bash
# 1. 安装 Claude Code 插件
Settings → Plugins → 搜索 "Claude Code"

# 2. 在 Claude Code 中运行
/ide

# 3. 选择 IntelliJ/WebStorm/PyCharm
→ JetBrains IDE

# 4. 输入连接端口（默认 63342）
→ 连接成功
```

**Neovim 集成**：
```bash
# 1. 安装 Neovim 插件
# 使用你喜欢的插件管理器
Plug 'anthropics/claude-code.nvim'

# 2. 配置
lua << EOF
require('claude-code').setup({
  enabled = true,
  auto_connect = true,
})
EOF

# 3. 在 Claude Code 中连接
/ide
→ Neovim
```

### 高级功能

**项目上下文理解**：
```
连接 IDE 后，Claude 可以：
✓ 自动识别项目类型（React, Vue, Node.js 等）
✓ 理解项目结构和依赖关系
✓ 遵循项目的代码规范
✓ 识别使用的框架和库
```

**智能代码建议**：
```
基于 IDE 中的：
- 当前文件
- 打开的标签页
- 项目配置
- Git 状态

Claude 提供：
- 上下文相关的建议
- 符合项目风格的代码
- 自动导入管理
- 类型智能提示
```

**工作区管理**：
```bash
# 查看连接状态
"显示 IDE 连接状态"

输出：
┌─ IDE Connection ────────────────┐
│ Editor: VS Code                 │
│ Status: Connected               │
│ Workspace: my-project           │
│ Open Files: 5                   │
│   - src/App.tsx                 │
│   - src/utils/helper.ts         │
│   - package.json                │
│   - README.md                   │
│   - tsconfig.json               │
└─────────────────────────────────┘

# 断开连接
/ide disconnect

# 重新连接
/ide reconnect
```

### 使用技巧

**最大化效率**：
```
1. 在 IDE 中打开相关文件
   → Claude 自动获取上下文

2. 选中需要处理的代码
   → Claude 精确定位操作范围

3. 使用自然语言描述需求
   → Claude 基于 IDE 上下文理解

4. 修改立即反映到 IDE
   → 利用 IDE 的预览和撤销功能
```

**协同工作流**：
```
典型工作流程：

1. IDE: 编写代码
2. Claude Code: "检查这段代码有没有问题"
3. IDE: 查看 Claude 的建议高亮
4. Claude Code: "应用第二个建议"
5. IDE: 自动更新代码
6. IDE: Ctrl+Z 如果不满意
7. 循环迭代直到满意
```

**多文件重构**：
```
场景：重构 API 调用方式

1. IDE: 打开所有使用旧 API 的文件
2. Claude Code: "将这些文件中的 API 调用
   改为使用新的 fetch 包装器"
3. Claude: 自动处理所有打开的文件
4. IDE: 逐个预览更改
5. IDE: 接受或回退每个更改
```

### 最佳实践

**何时使用 IDE 集成**：
```
✅ 大型项目开发
✅ 需要频繁在代码间切换
✅ 重构多个相关文件
✅ 需要实时代码反馈
✅ 希望保持 IDE 工作流

❌ 简单的单文件编辑
❌ 学习基础 Claude Code 功能时
❌ 网络受限环境
```

**性能优化**：
```
建议：
✓ 只打开真正需要的文件
✓ 关闭不相关的标签页
✓ 大文件时具体指明修改位置
✓ 定期清理 IDE 的缓存

避免：
✗ 同时打开几十个文件
✗ 在非常大的文件中模糊操作
✗ 频繁切换工作区
```

**安全注意事项**：
```
⚠️ IDE 集成会共享：
- 打开文件的内容
- 项目结构信息
- 编辑器状态

建议：
✓ 在受信任的网络使用
✓ 注意敏感文件（.env, secrets）
✓ 可以临时关闭连接
✓ 定期检查授权状态
```

### 故障排查

**连接问题**：
```
问题: "无法连接到 IDE"

解决：
1. 确认 IDE 正在运行
2. 检查防火墙设置
3. 重启 IDE 和 Claude Code
4. 查看 IDE 插件是否已启用

# 检查连接
/ide status

# 查看详细日志
/ide debug
```

**同步延迟**：
```
问题: "代码更改同步慢"

解决：
1. 关闭不需要的文件
2. 检查网络连接
3. 重新连接 IDE
4. 清理 IDE 缓存

# 强制同步
/ide sync
```

**权限问题**：
```
问题: "Claude Code 无法修改文件"

解决：
1. 检查文件权限
2. 重新授权 IDE 插件
3. 确认文件未被其他程序锁定

# 重新授权
/ide reauthorize
```

### 快速参考

**常用命令**：
```bash
/ide                  # 启动 IDE 连接
/ide status           # 查看连接状态
/ide disconnect       # 断开连接
/ide reconnect        # 重新连接
/ide sync             # 强制同步
/ide debug            # 调试模式
```

**自然语言指令**：
```
"连接到我的 IDE"
"显示 IDE 中打开的文件"
"同步 IDE 状态"
"断开 IDE 连接"
"重新连接到编辑器"
```

### 相关资源

- 📖 [VS Code 集成指南](https://docs.claude.com/claude-code/ide-integration/vscode)
- 📖 [JetBrains 集成指南](https://docs.claude.com/claude-code/ide-integration/jetbrains)
- 📖 [Neovim 插件文档](https://github.com/anthropics/claude-code.nvim)

---

<a name="tip-24"></a>
## 24. Token 优化策略

### 💡 Tip: 批量操作比频繁推送更节省 token

**功能说明**：
合理组织工作流可以显著减少 token 消耗，批量处理相关任务比逐个处理更高效。

### Token 消耗对比

**❌ 低效方式：每改一个文件就推送**
```bash
# 修改文档 1
Read file          # ~2K tokens
Edit file          # ~500 tokens
git add            # ~200 tokens
git commit         # ~300 tokens
git push           # ~200 tokens
─────────────────────────────────
小计：~3.4K tokens

# 重复 4 次
总计：~13.6K tokens
```

**✅ 高效方式：批量修改后一次推送**
```bash
# 修改所有文档
Read file 1-4      # ~8K tokens
Edit file 1-4      # ~2K tokens

# 一次性推送
git add .          # ~300 tokens
git commit         # ~300 tokens
git push           # ~200 tokens
─────────────────────────────────
总计：~11K tokens
节省：~2.6K tokens (约 20%)
```

### 优化策略

#### 1. 按任务分组

**✅ 推荐方式**：
```bash
# 策略：按逻辑单元分批

Task 1: 更新所有命令指南
- 修改 Doc A, B, C (相关功能)
- 一次提交推送

Task 2: 更新配置文件
- 修改 Config 1, 2, 3
- 一次提交推送
```

**❌ 避免方式**：
```bash
每个小改动 → 立即提交  # 浪费 token
所有改动堆积 → 最后一次提交  # 难以追踪
```

#### 2. 批量文件操作

**使用通配符**：
```bash
✅ git add commands/*.md      # 一次添加多个
✅ git add src/**/*.ts        # 递归添加
✅ git add .                  # 添加所有

❌ git add file1.md           # 逐个添加
❌ git add file2.md
❌ git add file3.md
```

**减少确认命令**：
```bash
✅ 修改完成后查看一次状态
❌ 每步操作都 git status
```

#### 3. 使用暂存区

**边改边暂存，最后提交**：
```bash
# 修改文件 1
git add file1.md    # 暂存

# 修改文件 2
git add file2.md    # 暂存

# 修改文件 3
git add file3.md    # 暂存

# 最后一次性提交推送
git commit -m "..."
git push
```

#### 4. 工作流优化

**推荐工作流**：
```bash
1. 规划要改的文档
   ↓
2. 批量修改（不推送）
   ↓
3. 本地验证
   ↓
4. 一次性提交推送

节省: 20-30% tokens
```

### Token 节省清单

```markdown
## Token 节省技巧

1. **批量文件操作**
   - ✅ 一次添加多个文件
   - ❌ 分多次添加

2. **减少确认命令**
   - ✅ 必要时才查看状态
   - ❌ 每步都确认

3. **合并相关修改**
   - ✅ 一次完成相关修改
   - ❌ 改一行就保存

4. **使用通配符**
   - ✅ git add *.md
   - ❌ 逐个添加

5. **精简提交信息**
   - ✅ 清晰但简洁
   - ❌ 过度详细
```

### 按文件数量的节省比例

| 文件数量 | Token 节省 | 推荐方式 |
|---------|-----------|---------|
| 1-2 个 | ~10% | 可以立即推送 |
| 3-5 个 | ~20% | 建议批量推送 |
| 6-10 个 | ~25% | 强烈建议批量 |
| 10+ 个 | ~30% | 必须批量推送 |

### 实战案例

**案例 1: 文档更新**
```bash
# 需要更新 5 个相关文档

# ❌ 低效方式
编辑 Doc1 → 推送 → 编辑 Doc2 → 推送 → ...
总计: ~17K tokens

# ✅ 高效方式
编辑 Doc1-5 → 一次推送
总计: ~13K tokens
节省: ~4K tokens (24%)
```

**案例 2: 功能开发**
```bash
# 开发新功能涉及多个文件

# ✅ 推荐流程
1. 创建所有必需文件
2. 实现核心功能
3. 添加测试
4. 更新文档
5. 一次性提交推送

# ❌ 避免流程
每个文件创建后立即推送
```

**案例 3: Bug 修复**
```bash
# 修复涉及 3 个文件

# ✅ 高效方式
1. 修复 file1.js
2. 修复 file2.js
3. 更新 test.js
4. 运行测试
5. 一次提交推送

节省: ~20% tokens
```

### 操作建议表

| 操作频率 | 推荐方式 | Token 效率 | Git 清晰度 |
|---------|---------|-----------|-----------|
| 小改动 (< 5行) | 累积后推送 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| 中等改动 | 按功能分批 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 大型重构 | 按模块分批 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 紧急修复 | 立即推送 | ⭐⭐ | ⭐⭐⭐⭐⭐ |

### 使用 TodoWrite 追踪

```bash
# 使用 TodoWrite 管理任务
# 等所有任务完成再推送

TodoWrite([
  {content: "更新 Doc A", status: "completed"},
  {content: "更新 Doc B", status: "completed"},
  {content: "更新 Doc C", status: "completed"},
])

# 全部完成 → 一次推送
# 节省 20-30% tokens
```

### 平衡考虑

虽然批量推送省 token，但也要考虑：

**✅ 保持的平衡**：
- Git 提交历史清晰
- 便于代码审查
- 方便问题定位
- 支持部分回滚

**📌 推荐原则**：
```
小批量提交（3-5个相关文件）
既省 token 又保持清晰！
```

### 最佳实践总结

1. **规划优先**
   ```
   先规划 → 批量操作 → 一次推送
   ```

2. **相关性分组**
   ```
   功能 A 的文件一起推送
   功能 B 的文件一起推送
   ```

3. **使用暂存区**
   ```
   边改边 git add
   最后一次 commit + push
   ```

4. **避免过度推送**
   ```
   小改动累积
   达到合理量级再推送
   ```

5. **保持提交清晰**
   ```
   每次提交代表一个完整的逻辑单元
   ```

### Token 计算器

**快速估算公式**：
```
单次推送成本 ≈ 3-4K tokens
批量推送成本 ≈ (文件数 × 2.5K) + 1K

节省率 = 1 - (批量成本 / 单次成本总和)
```

**示例**：
```
5 个文件：
- 单独推送: 5 × 3.5K = 17.5K tokens
- 批量推送: (5 × 2.5K) + 1K = 13.5K tokens
- 节省: 23%
```

---

## 📚 相关资源

- 📖 [Claude Code 官方文档](https://docs.claude.com/en/docs/claude-code/)
- 🎓 [学习计划](../guides/LEARNING_PLAN.md)
- 🚀 [快速开始](../guides/QUICK_START.md)
- 🔧 [故障排查](./TROUBLESHOOTING.md)

---

## 🎯 完整快速参考

### 核心功能

| 功能 | 快捷键/命令 | 说明 |
|------|------------|------|
| 计划模式 | `Shift+Tab` (2次) | 制定计划不执行 |
| 粘贴图片 | `Ctrl+V` (macOS) | 粘贴截图分析 |
| 模式切换 | `Shift+Tab` | 循环切换模式 |
| 添加记忆 | `#` | 快速添加偏好 |
| GitHub 集成 | `/install-github-app` | 安装 GitHub App |
| 查看记忆 | `/memory` | 内存管理 |

### 键盘快捷键

| 快捷键 | 功能 | 场景 |
|--------|------|------|
| `Ctrl+C` | 取消操作 | 停止输出 |
| `Ctrl+D` | 退出 | 结束会话 |
| `Ctrl+L` | 清屏 | 整理界面 |
| `Ctrl+R` | 搜索历史 | 查找命令 |
| `Esc` | 中断 | 停止任务 |
| `Esc Esc` | 历史列表 | 查看历史 |
| `Tab` | 扩展思考 | 深度分析 |
| `Ctrl+B` | 后台运行 | 长任务 |
| `↑/↓` | 历史导航 | 浏览命令 |

### 命令前缀

| 前缀 | 功能 | 示例 |
|------|------|------|
| `#` | 记忆管理 | `#` |
| `/` | Slash 命令 | `/clear`, `/help` |
| `!` | Bash 命令 | `!git status` |

### 常用 Slash 命令

| 命令 | 功能 |
|------|------|
| `/help` | 帮助信息 |
| `/clear` | 清除对话 |
| `/exit` | 退出 |
| `/memory` | 内存管理 |
| `/agents` | Agents 管理 |
| `/bashes` | 后台任务 |
| `/terminal-setup` | 终端配置 |
| `/resume` | 恢复历史会话 |
| `/ide` | IDE 集成 |

### 会话管理 (`/resume`)

| 功能 | 操作 | 说明 |
|------|------|------|
| 查看会话列表 | `/resume` | 显示所有历史会话 |
| 选择会话 | `↑↓` + `Enter` | 恢复选中的会话 |
| 退出列表 | `Esc` | 取消操作 |

**使用场景**：
- 🔄 多任务并行工作
- 📅 跨天继续项目
- 📚 回顾学习内容
- 🔍 查找历史讨论

**最佳实践**：
- ✅ 清晰的会话命名
- ✅ 定期总结进度
- ✅ 重要内容保存到文件

**详细指南**: 查看 [RESUME_COMMAND_GUIDE.md](./commands/RESUME_COMMAND_GUIDE.md)

---

## 💡 学习建议

1. **熟练掌握快捷键** - 提高操作效率
2. **善用计划模式** - 复杂操作前先规划
3. **配置项目记忆** - 让 Claude 记住项目规范
4. **图片辅助沟通** - 一图胜千言
5. **GitHub 集成协作** - 团队协作更高效

---

<div align="center">
  <sub>📌 这些 Tips 来自 Claude Code 官方文档和社区最佳实践</sub>
  <br>
  <sub>定期查看更新以获取最新功能</sub>
</div>
