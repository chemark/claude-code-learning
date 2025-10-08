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

### 🚀 高级技巧
- [15. 会话管理](#tip-15)
- [16. 权限管理](#tip-16)
- [17. 文件引用](#tip-17)
- [18. 后台任务](#tip-18)
- [19. 模型切换](#tip-19)
- [20. 批量处理](#tip-20)

### 🔌 集成与扩展
- [21. IDE 集成](#tip-21)

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
- 按 `Tab` 键切换
- 或在提示中说明 "使用扩展思考"

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

---

<a name="tip-15"></a>
## 15. 会话管理

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

---

<a name="tip-16"></a>
## 16. 权限管理

### 💡 Permission Management

Claude Code 提供灵活的权限控制。

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

<a name="tip-17"></a>
## 17. 文件引用

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

<a name="tip-18"></a>
## 18. 后台任务

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

<a name="tip-19"></a>
## 19. 模型切换

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

<a name="tip-20"></a>
## 20. 批量处理

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

<a name="tip-21"></a>
## 21. IDE 集成

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

## 📚 相关资源

- 📖 [Claude Code 官方文档](https://docs.claude.com/en/docs/claude-code/)
- 🎓 [学习计划](./LEARNING_PLAN.md)
- 🚀 [快速开始](./QUICK_START.md)
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
