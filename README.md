# 🚀 Claude Code 完整学习计划

> 系统学习 Claude Code，从基础到精通，通过实践掌握 AI 辅助编程的强大能力

[![GitHub stars](https://img.shields.io/github/stars/chemark/claude-code-learning?style=social)](https://github.com/chemark/claude-code-learning/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/chemark/claude-code-learning?style=social)](https://github.com/chemark/claude-code-learning/network/members)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-v2.0-blue)](https://docs.claude.com/en/docs/claude-code/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/chemark/claude-code-learning/pulls)
[![GitHub issues](https://img.shields.io/github/issues/chemark/claude-code-learning)](https://github.com/chemark/claude-code-learning/issues)
[![在线阅读](https://img.shields.io/badge/在线阅读-GitHub_Pages-success)](https://chemark.github.io/claude-code-learning/)
[![中文文档](https://img.shields.io/badge/文档-中文-red)](README.md)

## 🎯 新用户从这里开始

👉 **[START_HERE.md](./START_HERE.md)** ← **唯一学习入口，点击开始！**

---

**📚 [在线阅读文档](https://chemark.github.io/claude-code-learning/)** | **⚡ [快速开始](./guides/QUICK_START.md)** | **📅 [每日学习](./guides/DAILY_GUIDE.md)** | **📖 [学习计划](./guides/LEARNING_PLAN.md)**

## 📖 关于本项目

这是一个完整的 Claude Code 学习计划，包含 **7 个模块**，从基础入门到高级应用，帮助你系统掌握 Claude Code 的所有功能。

**学习时长**：6-8 周
**难度等级**：入门 → 进阶 → 高级 → 实战
**适合人群**：所有希望提升编程效率的开发者

## 📁 项目结构

```
claude-code-learning/
├── 📂 .claude/              # Claude Code 配置
├── 📂 docs/                 # 🌐 GitHub Pages 网站文件
├── 📂 references/           # 参考文档（故障排查、技巧等）
├── 📂 module-1/             # 模块 1：基础认知
├── 📂 module-2/             # 模块 2：核心工具
├── 📂 module-3/             # 模块 3：Git 集成
├── 📂 module-4/             # 模块 4：Slash Commands
├── 📂 module-5/             # Hooks 自动化
├── 📂 module-6/             # MCP 与 Agents
├── 📂 module-7/             # 实战项目
├── 📂 projects/             # 实战项目目录
├── 🎯 START_HERE.md         # ⭐ 唯一学习入口
├── 📅 guides/DAILY_GUIDE.md        # 每日学习计划
├── 🚀 guides/QUICK_START.md        # 快速入门指南
└── 📖 guides/LEARNING_PLAN.md      # 完整学习计划
```

**在线阅读**：[https://chemark.github.io/claude-code-learning/](https://chemark.github.io/claude-code-learning/)

## 🎯 你将学到

- ✅ Claude Code 的核心概念和工作原理
- ✅ 6 大核心工具的熟练使用
- ✅ Git 集成与规范的版本控制
- ✅ 自定义 Slash Commands 和 Hooks
- ✅ MCP 集成和 Sub-Agents 使用
- ✅ 完整的项目开发实战经验

## 🗂️ 课程结构

### 📚 第一阶段：基础入门（第 1-2 周）

#### [模块 1：Claude Code 基础认知](./modules/module-1/README.md)
- Claude Code 简介和安装
- 交互模式基础
- 有效提示词技巧
- **练习**：创建第一个项目、代码分析

#### [模块 2：核心工具与工作流](./modules/module-2/README.md)
- 6 大核心工具详解（Read, Write, Edit, Glob, Grep, Bash）
- 常见工作流程（重构、Bug修复、功能开发）
- 项目导航技巧
- **练习**：代码重构、项目导航

### 🔧 第二阶段：进阶功能（第 3-4 周）

#### [模块 3：Git 集成与版本控制](./modules/module-3/README.md)
- Git 操作与安全协议
- 规范的提交信息生成
- Pull Request 工作流
- **练习**：Git 工作流、PR 创建、冲突解决

#### [模块 4：自定义扩展 I - Slash Commands](./modules/module-4/README.md)
- Slash Commands 基础
- 创建自定义命令
- 高级命令技巧
- **练习**：创建常用命令集、项目特定命令

### 🎨 第三阶段：高级特性（第 5-6 周）

#### [模块 5：自定义扩展 II - Hooks 与自动化](./modules/module-5/README.md)
- Hooks 系统详解
- 工作流自动化
- 质量门禁配置
- **练习**：质量检查 Hooks、自动化工作流

#### [模块 6：外部集成 - MCP 与 Sub-Agents](./modules/module-6/README.md)
- MCP 协议与服务器
- GitHub/数据库/文件系统集成
- Sub-Agents 的使用
- **练习**：MCP 集成、自定义 Agent 创建

### 🏆 第四阶段：实战项目（第 7-8 周）

#### [模块 7：综合实战项目](./modules/module-7/README.md)
- 项目 1：全栈待办事项应用
- 项目 2：开源项目贡献
- 项目 3：自动化 CLI 工具开发

## 🚀 快速开始

### 前置要求

- ✅ Node.js >= 18
- ✅ Claude Code 已安装
- ✅ 基本的编程经验
- ✅ Git 基础知识

### 安装 Claude Code

```bash
# 使用 NPM 安装
npm install -g @anthropic-ai/claude-code

# 验证安装
claude --version

# 登录认证
claude
```

### 三种学习路径

#### 🏃 快速路径（2 周）
适合有经验的开发者，快速掌握核心功能
```
Week 1: 模块 1-3（基础 + 工具 + Git）
Week 2: 模块 4-6（配置 + 集成）+ 选做项目
```

#### 🚶 标准路径（6 周）- **推荐**
循序渐进，扎实掌握
```
Week 1-2: 模块 1-2
Week 3: 模块 3
Week 4: 模块 4
Week 5: 模块 5-6
Week 6: 模块 7
```

#### 🧗 深度路径（8 周）
完整学习所有内容
```
每个模块 1 周
完成所有练习和项目
深入理解每个概念
```

### 第一步：开始学习

```bash
# 阅读学习入口
cat START_HERE.md

# 或使用自定义命令
/progress  # 查看学习进度
/study module_number=1  # 开始模块1
```

**推荐路径**：START_HERE.md → guides/DAILY_GUIDE.md → module-1

## 📚 学习资源

### 核心文档
- 🎯 [START_HERE.md](./START_HERE.md) - **唯一学习入口**
- 📅 [guides/DAILY_GUIDE.md](./guides/DAILY_GUIDE.md) - 每日学习计划
- 📘 [guides/LEARNING_PLAN.md](./guides/LEARNING_PLAN.md) - 完整学习计划
- 🚀 [guides/QUICK_START.md](./guides/QUICK_START.md) - 30分钟快速上手
- 📊 [references/ASSESSMENT.md](./references/ASSESSMENT.md) - 学习进度评估
- 🔧 [references/TROUBLESHOOTING.md](./references/TROUBLESHOOTING.md) - 常见问题解决

### 官方资源
- 📖 [Claude Code 官方文档](https://docs.claude.com/en/docs/claude-code/)
- 💬 [GitHub Discussions](https://github.com/anthropics/claude-code/discussions)
- 🐛 [问题反馈](https://github.com/anthropics/claude-code/issues)

### 社区资源
- 💡 示例项目库
- 🔌 自定义配置分享
- 📝 最佳实践文档

## 📊 学习追踪

### 完成检查清单

- [ ] 模块 1：基础认知（预计 3-5 天）
- [ ] 模块 2：核心工具（预计 4-6 天）
- [ ] 模块 3：Git 集成（预计 3-5 天）
- [ ] 模块 4：Slash Commands（预计 3-4 天）
- [ ] 模块 5：Hooks 自动化（预计 4-5 天）
- [ ] 模块 6：MCP 与 Agents（预计 4-6 天）
- [ ] 模块 7：实战项目（预计 7-14 天）

### 技能等级

完成相应模块后，你将达到：

| 模块 | 技能等级 |
|------|---------|
| 模块 1-2 | 🌱 入门级 - 能够使用基本功能 |
| 模块 3-4 | 🌿 初级 - 掌握常用工作流 |
| 模块 5-6 | 🌳 中级 - 能够自定义和集成 |
| 模块 7 | 🏆 高级 - 独立完成复杂项目 |

## 💡 学习建议

### ✅ 推荐做法

1. **循序渐进** - 不要跳过基础模块
2. **动手实践** - 理论重要，实践更重要
3. **记录笔记** - 记录你的发现和技巧
4. **多做项目** - 项目是最好的学习方式
5. **参与社区** - 分享和学习他人经验

### ❌ 避免事项

1. ❌ 只看不练
2. ❌ 跳过基础直接学高级
3. ❌ 遇到困难就放弃
4. ❌ 不看官方文档
5. ❌ 孤立学习不交流

## 🆘 获取帮助

### 遇到问题？

1. 📖 查看 [故障排查指南](./references/TROUBLESHOOTING.md)
2. 💬 在项目 Issues 中提问
3. 📚 阅读官方文档
4. 🔍 搜索社区讨论
5. 💌 联系课程维护者

### 常见问题快速链接

- [Claude Code 无法启动？](./references/TROUBLESHOOTING.md#claude-code-无法启动)
- [工具权限问题？](./references/TROUBLESHOOTING.md#工具权限问题)
- [MCP 连接失败？](./references/TROUBLESHOOTING.md#mcp-服务器连接失败)
- [Hooks 不执行？](./references/TROUBLESHOOTING.md#hooks-不执行)

## 🤝 贡献

欢迎贡献改进建议！

- 🐛 报告问题
- 💡 提出改进建议
- 📝 分享学习笔记
- 🔧 贡献配置示例

## 📝 学习记录

建议创建自己的学习日志：

```markdown
## 我的学习进度

| 日期 | 模块 | 完成内容 | 用时 | 难点 | 心得 |
|------|------|----------|------|------|------|
| 2025-01-01 | 1 | 基础认知 | 4h | Git集成概念 | Claude Code很强大 |
| ... | ... | ... | ... | ... | ... |
```

## 🤝 贡献指南

欢迎贡献！你可以通过以下方式参与：

- 🐛 [报告 Bug](https://github.com/chemark/claude-code-learning/issues/new?labels=bug)
- 💡 [提出新功能建议](https://github.com/chemark/claude-code-learning/issues/new?labels=enhancement)
- 📝 改进文档和示例
- ⭐ 给项目点个 Star
- 🔗 分享给更多人

### 贡献步骤

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 💬 社区交流

- 💬 [GitHub Discussions](https://github.com/chemark/claude-code-learning/discussions) - 提问、讨论、分享经验
- 🐛 [GitHub Issues](https://github.com/chemark/claude-code-learning/issues) - 报告问题
- ⭐ [Star 项目](https://github.com/chemark/claude-code-learning) - 支持我们

## 📊 项目统计

![Alt](https://repobeats.axiom.co/api/embed/placeholder.svg "Repobeats analytics image")

## 📄 License

MIT License - 详见 [LICENSE](./LICENSE) 文件

## 🌟 致谢

- 感谢 [Anthropic](https://www.anthropic.com/) 团队开发了 Claude Code
- 感谢所有贡献者和学习者
- 感谢开源社区的支持

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=chemark/claude-code-learning&type=Date)](https://star-history.com/#chemark/claude-code-learning&Date)

---

**准备好了吗？开始你的 Claude Code 学习之旅吧！** 🚀

👉 **[START_HERE - 开始学习](./START_HERE.md)** | [每日计划](./guides/DAILY_GUIDE.md) | [快速体验](./guides/QUICK_START.md) | [完整计划](./guides/LEARNING_PLAN.md)

---

<div align="center">
  <sub>用 ❤️ 和 🤖 Claude Code 制作</sub>
</div>
