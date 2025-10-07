# 📝 Claude Code 快速参考手册

> 常用命令、提示词和技巧的速查表

## 🚀 快速开始

### 基本命令
```bash
# 启动 Claude Code
claude

# 查看版本
claude --version

# 查看帮助
claude --help

# 在交互模式中
/help          # 查看可用命令
/exit          # 退出会话
```

---

## 🛠️ 核心工具速查

### Read - 读取文件
```
"读取 src/index.js"
"查看 package.json 的 dependencies 部分"
"显示 README.md 的前 50 行"
```

### Write - 创建文件
```
"创建一个 React 组件 UserCard.jsx"
"生成 .gitignore 文件，排除 node_modules"
"创建 config.js，包含数据库配置"
```

### Edit - 编辑文件
```
"在 app.js 中添加错误处理中间件"
"修改 User.js，添加 email 验证"
"更新 README.md，添加安装说明"
```

### Glob - 文件搜索
```
"找到所有 .js 文件"
"查找 src 目录下的所有 React 组件"
"列出所有测试文件"

# 模式示例
**/*.js          # 所有 JS 文件
**/*.test.js     # 所有测试文件
src/**/*.tsx     # src 下所有 TS React 文件
```

### Grep - 内容搜索
```
"在项目中搜索 TODO 注释"
"找到所有使用 useState 的地方"
"查找 API_KEY 的定义位置"

# 搜索技巧
-i           # 忽略大小写
-n           # 显示行号
-C 3         # 显示上下 3 行
```

### Bash - 执行命令
```
"运行 npm install"
"执行测试 npm test"
"查看 git 状态"
```

---

## 💬 有效提示词模板

### 创建功能
```
创建 [功能描述]：
- 要求 1
- 要求 2
- 技术栈: [...]
- 包含错误处理和测试
```

### 修复 Bug
```
修复 [文件名] 中的 bug：
- 症状: [描述]
- 预期行为: [...]
- 当前行为: [...]
请分析并修复
```

### 代码重构
```
重构 [文件/函数]：
- 目标: 提高可读性/性能
- 保持功能不变
- 添加必要的注释
- 遵循最佳实践
```

### 代码审查
```
审查以下代码：
[粘贴代码或文件路径]

检查:
- 代码质量
- 潜在bug
- 性能问题
- 安全隐患
```

### 生成测试
```
为 [文件/函数] 生成测试：
- 使用 [Jest/Vitest/Mocha]
- 覆盖所有功能
- 包含边界条件
- 测试错误处理
```

---

## 📦 Git 操作速查

### 创建提交
```
"为当前改动创建提交"
"创建提交，说明添加了用户认证功能"
```

提交信息格式：
```
<type>: <subject>

<body>

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>
```

类型：
- `feat`: 新功能
- `fix`: Bug 修复
- `refactor`: 重构
- `docs`: 文档
- `test`: 测试
- `chore`: 构建/工具

### 分支操作
```
"创建分支 feature/user-profile"
"切换到 main 分支"
"合并 feature 分支到 main"
```

### Pull Request
```
"创建 Pull Request 到 main 分支"

PR 包含:
- 标题
- 功能描述
- 测试计划
- 截图(如需要)
```

### 冲突解决
```
"帮我解决 [文件名] 的合并冲突

背景:
- 分支 A: [改动说明]
- 分支 B: [改动说明]
- 需求: 保留两者/保留A/保留B
```

---

## ⚙️ 自定义 Slash Commands

### 命令文件位置
```
.claude/commands/
├── review.md
├── test.md
└── doc.md
```

### 命令格式
```markdown
---
description: "命令简短描述"
---

命令的详细提示词内容

可以使用 {{参数}} 作为占位符
```

### 使用命令
```
/review              # 执行代码审查
/test file.js        # 为文件生成测试
/doc                 # 生成文档
```

### 常用命令示例

**代码审查**
```markdown
---
description: "执行代码审查"
---

审查当前代码变更，检查:
1. 代码质量和规范
2. 潜在bug和安全问题
3. 性能优化机会
4. 测试覆盖情况
```

**生成测试**
```markdown
---
description: "生成单元测试"
---

为 {{file}} 生成完整测试:
- 使用项目测试框架
- 覆盖所有函数
- 包含边界条件
- AAA 模式
```

---

## 🔧 Hooks 配置

### 配置文件
```json
// ~/.config/claude/settings.json
{
  "hooks": {
    "user-prompt-submit-hook": {
      "command": "bash script.sh",
      "blocking": false
    }
  }
}
```

### Hook 类型
- `user-prompt-submit-hook`: 用户提交时
- `tool-call-hook`: 工具调用时
- `conversation-start-hook`: 对话开始
- `conversation-end-hook`: 对话结束

### Hook 脚本示例
```bash
#!/bin/bash
# Pre-commit check

echo "Running lint..."
npm run lint

if [ $? -ne 0 ]; then
  echo "Lint failed!"
  exit 1
fi

echo "All checks passed!"
```

---

## 🔌 MCP 集成

### GitHub MCP
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_..."
      }
    }
  }
}
```

使用：
```
"在 GitHub 上搜索 React 相关仓库"
"创建一个 issue"
"查看我的 GitHub 通知"
```

### Filesystem MCP
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/absolute/path/to/directory"
      ]
    }
  }
}
```

---

## 🐛 故障排查速查

### 常见问题快速定位

| 问题 | 可能原因 | 快速检查 |
|------|---------|---------|
| 无法启动 | 未安装/路径问题 | `claude --version` |
| 权限错误 | 文件权限/配置 | `ls -la file` |
| MCP 失败 | Token/网络 | 检查 settings.json |
| Hook 不执行 | 路径/权限 | `bash script.sh` |
| 性能慢 | 上下文太大 | 减少文件读取 |

### 诊断命令
```bash
# 检查安装
which claude
claude --version

# 检查配置
cat ~/.config/claude/settings.json

# 查看日志
tail -f ~/.config/claude/logs/claude.log

# 检查权限
ls -la ~/.config/claude/
```

---

## 💡 最佳实践

### 提示词原则
✅ **做**:
- 清晰具体
- 提供上下文
- 说明期望结果
- 分解复杂任务

❌ **不做**:
- 模糊不清
- 缺少信息
- 过于复杂
- 假设太多

### 工作流建议

**功能开发流程**:
```
1. 理解需求
2. 设计方案
3. 实现功能
4. 编写测试
5. 代码审查
6. 创建提交
7. 发起 PR
```

**Bug 修复流程**:
```
1. 复现问题
2. 定位代码
3. 分析原因
4. 实施修复
5. 验证修复
6. 添加测试
7. 创建提交
```

### 性能优化

**减少上下文**:
```
❌ "分析整个项目"
✅ "分析 src/components 目录下的组件"
```

**精确搜索**:
```
❌ "找找文件"
✅ "使用 Glob 查找 **/*.test.js"
```

**并行操作**:
```
一次读取多个文件（如果独立）
使用 Sub-Agents 处理复杂任务
```

---

## 📚 学习资源快速链接

### 项目文档
```bash
README.md              # 项目概览
LEARNING_PLAN.md       # 详细学习计划
ROADMAP.md            # 学习路线图
QUICK_START.md        # 快速入门
TROUBLESHOOTING.md    # 故障排查
```

### 模块入口
```bash
module-1/README.md    # 基础认知
module-2/README.md    # 核心工具
module-3/README.md    # Git 集成
# ... 其他模块
```

### 练习文件
```bash
module-1/buggy-code.js                    # 调试练习
module-2/refactor-example/shopping-cart.js # 重构练习
module-3/conflict-practice/               # 冲突解决
```

---

## 🎯 自定义命令速查

### 学习相关
```bash
/progress       # 检查学习进度
/study          # 开始学习模块
/exercise       # 获取练习帮助
/debug          # 调试问题
/review         # 复习知识
/tips           # 获取技巧
```

### 使用示例
```
/progress
/study module_number=3
/exercise exercise_info="重构练习"
/debug problem_description="合并冲突" file_path="config.js"
/review topic="Git 操作"
/tips topic="提示词工程"
```

---

## 🔑 快捷键和技巧

### 交互模式技巧
```
Ctrl+C         # 中断当前操作
Ctrl+D         # 退出会话
/clear         # 清空对话历史
/help          # 显示帮助
```

### 提示词技巧
```
使用代码块:
```javascript
code here
```

引用文件:
"参考 src/utils/helper.js 的实现"

明确要求:
"请使用 TypeScript"
"遵循 Airbnb 风格指南"
```

---

## 📞 获取帮助

### 快速帮助
1. 查看 `/help` 命令
2. 阅读 TROUBLESHOOTING.md
3. 使用 `/debug` 命令

### 深入学习
1. 阅读对应模块的 README
2. 完成练习项目
3. 查看官方文档

### 社区支持
1. GitHub Discussions
2. GitHub Issues
3. Discord 社区

---

**提示**: 将这个速查表加入书签，学习和开发时随时参考！📌

需要详细了解某个主题？使用 `/tips topic="主题名称"` 获取深入指导！
