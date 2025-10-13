# Claude Code 快速开始指南

## 👋 欢迎！

这份快速指南将帮助你在 30 分钟内开始使用 Claude Code。

## 📋 前置要求

- [ ] 已安装 Claude Code
- [ ] 已完成账号认证
- [ ] 有基本的编程经验
- [ ] 了解命令行基础

## 🚀 第一步：验证安装

```bash
# 检查 Claude Code 版本
claude --version

# 启动交互会话
claude
```

如果成功，你会看到欢迎界面。

## 🎯 10 分钟快速体验

### 1. 创建第一个文件（2 分钟）

在 Claude Code 交互会话中输入：

```
请创建一个 hello.js 文件，包含一个函数打印 "Hello, Claude Code!"
```

观察 Claude Code 如何：
- 理解你的请求
- 使用 Write 工具
- 创建文件

### 2. 读取和修改文件（3 分钟）

```
请读取 hello.js，然后添加一个参数让我可以自定义问候语
```

注意 Claude Code 如何：
- 先读取现有代码
- 理解上下文
- 进行精准修改

### 3. 搜索代码（2 分钟）

```
在当前目录中找到所有 .js 文件
```

Claude Code 会使用 Glob 工具快速查找。

### 4. 生成测试（3 分钟）

```
为 hello.js 生成 Jest 测试，覆盖所有情况
```

看看 Claude Code 生成的测试是否全面。

## 🎓 20 分钟深入体验

### 项目：构建一个简单的 Todo CLI 应用

**目标**：在 20 分钟内完成一个可用的命令行 Todo 应用。

#### 步骤 1：初始化项目（3 分钟）

```
创建一个 Node.js Todo CLI 应用项目。需要：
1. package.json 配置
2. 基本的目录结构
3. README 说明如何使用
```

#### 步骤 2：核心功能（8 分钟）

```
实现 Todo 应用的核心功能：
- 添加任务：node todo.js add "任务描述"
- 列出任务：node todo.js list
- 完成任务：node todo.js done <id>
- 删除任务：node todo.js delete <id>

使用 JSON 文件存储数据
```

#### 步骤 3：添加功能（5 分钟）

```
添加以下功能：
- 任务优先级（高/中/低）
- 任务截止日期
- 彩色输出（使用 chalk）
```

#### 步骤 4：测试（4 分钟）

```
为 Todo 应用生成完整的测试套件
```

#### 验证

运行你的应用：
```bash
node todo.js add "学习 Claude Code" --priority high
node todo.js list
node todo.js done 1
```

## 💡 关键概念速记

### 核心工具

| 工具 | 用途 | 示例 |
|------|------|------|
| Read | 读取文件 | "读取 package.json" |
| Write | 创建文件 | "创建 index.js" |
| Edit | 修改文件 | "在 index.js 中添加错误处理" |
| Glob | 查找文件 | "找到所有测试文件" |
| Grep | 搜索内容 | "在项目中搜索 TODO 注释" |
| Bash | 执行命令 | "运行 npm install" |

### 有效提示词

**❌ 不好的提示词**：
- "写代码"（太模糊）
- "修复 bug"（没有上下文）
- "让它更好"（不明确）

**✅ 好的提示词**：
- "创建一个 React 组件，显示用户列表，包含头像和名字"
- "修复 login.js 中的密码验证 bug，应该接受 8-20 个字符"
- "重构 utils.js，提取重复的日期格式化逻辑到单独的函数"

### 工作流模式

**模式 1：探索式**
```
1. "这个项目的架构是什么？"
2. "找到用户认证的实现"
3. "解释这段代码的作用"
```

**模式 2：开发式**
```
1. "创建用户注册功能"
2. "添加输入验证"
3. "生成测试"
4. "更新文档"
```

**模式 3：调试式**
```
1. "运行测试并查看失败"
2. "找到导致测试失败的代码"
3. "修复问题"
4. "验证修复"
```

## 🎯 第一天挑战

完成以下任务来巩固基础：

### 挑战 1：文件操作
- [ ] 创建 3 个不同类型的文件（.js, .md, .json）
- [ ] 读取并修改它们
- [ ] 使用 Glob 找到所有文件

### 挑战 2：代码生成
- [ ] 生成一个 Express 服务器
- [ ] 添加 3 个 API 路由
- [ ] 生成测试

### 挑战 3：项目探索
- [ ] 克隆一个开源项目
- [ ] 让 Claude Code 解释项目结构
- [ ] 找到特定功能的实现

### 挑战 4：重构
- [ ] 创建一个有"代码异味"的文件
- [ ] 让 Claude Code 识别问题
- [ ] 重构代码

## 📚 下一步学习路径

根据你的时间安排选择：

### 快速路径（2 周）
```
Week 1: 模块 1-3（基础 + 工具 + 配置）
Week 2: 模块 5-6（测试 + 项目）
```

### 标准路径（6 周）
```
Week 1: 模块 1-2
Week 2: 模块 3
Week 3: 模块 4
Week 4: 模块 5
Week 5-6: 模块 6
```

### 深度路径（12 周）
```
按顺序完成所有 7 个模块
每个模块 1-2 周
包含所有练习和项目
```

## 🔧 常见问题

### Q: Claude Code 无法找到文件？
A:
- 检查当前工作目录
- 使用绝对路径
- 先用 Glob 确认文件存在

### Q: 如何让 Claude Code 理解项目上下文？
A:
- 创建 `.claude/CLAUDE.md` 文档
- 在对话开始时提供项目概述
- 引用相关文件

### Q: 生成的代码质量不高？
A:
- 提供更详细的要求
- 指定编码规范
- 提供示例代码
- 要求遵循最佳实践

### Q: 如何撤销 Claude Code 的更改？
A:
- 使用 git 版本控制
- 在修改前先提交
- 需要时可以回滚

## 🎁 有用的起始模板

### 自定义 Slash Command 模板

创建 `.claude/commands/template.md`：
```markdown
---
description: "Your command description"
---

[Your detailed prompt here]

Include:
- Specific requirements
- Output format
- Quality standards
- Examples if needed
```

### CLAUDE.md 模板

创建 `.claude/CLAUDE.md`：
```markdown
# Project Name

## Tech Stack
- [List technologies]

## Architecture
[Brief description]

## Important Patterns
- [Pattern 1]
- [Pattern 2]

## Common Commands
- `command`: description

## Known Issues
- [Issue and workaround]
```

## 📖 推荐学习顺序

**今天**：
1. ✅ 完成快速体验
2. ✅ 完成深入体验
3. ✅ 尝试第一天挑战

**明天**：
1. 📖 阅读模块 1 详细内容
2. 🏃 完成模块 1 练习
3. ✍️ 总结学习笔记

**本周**：
1. 完成模块 1-2
2. 开始一个小项目
3. 探索自定义配置

## 🌟 成功提示

1. **动手实践**：理论重要，但实践更重要
2. **记录学习**：写下你的发现和技巧
3. **循序渐进**：不要跳过基础
4. **多做项目**：项目是最好的学习方式
5. **参与社区**：分享和学习他人经验

## 🎊 准备好了吗？

现在你已经准备好开始完整的学习计划了！

```bash
# 查看完整学习计划
cat LEARNING_PLAN.md

# 开始模块 1
cd modules/module-1
cat README.md
```

祝学习愉快！有任何问题随时在对话中询问 Claude Code。🚀
