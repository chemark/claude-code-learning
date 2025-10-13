# 模块 5：自定义扩展 II - Hooks 与自动化

## 📋 学习目标

- ✅ 理解 Hooks 系统的工作原理
- ✅ 掌握不同类型 Hooks 的配置
- ✅ 创建自动化质量检查流程
- ✅ 实现 CI/CD 集成触发

## 🎯 什么是 Hooks？

### 核心概念

Hooks 是 Claude Code 的**事件监听系统**，允许你在特定时刻自动执行自定义脚本。

**类比**：就像 Git Hooks，但用于 Claude Code 的工作流。

```
用户提交提示词
    ↓
[user-prompt-submit-hook] 触发
    ↓
运行自定义脚本（如：代码检查）
    ↓
通过/阻止 → 继续/停止流程
```

### 为什么需要 Hooks？

**问题场景**：
- ❌ 忘记运行 lint 就提交代码
- ❌ 提交包含敏感信息（API keys）
- ❌ 代码格式不统一
- ❌ 测试没通过就合并

**解决方案**：
- ✅ 自动运行 lint 检查
- ✅ 自动扫描敏感信息
- ✅ 自动格式化代码
- ✅ 自动运行测试

---

## 📖 Hooks 类型详解

### 1. user-prompt-submit-hook

**触发时机**：用户提交提示词前

**用途**：
- 提交前验证
- 代码质量检查
- 敏感信息扫描
- 自动格式化

**示例**：
```json
{
  "hooks": {
    "user-prompt-submit-hook": {
      "command": "bash .claude/hooks/pre-submit.sh",
      "blocking": true
    }
  }
}
```

**blocking 参数**：
- `true`: 阻塞模式 - 脚本失败会阻止操作
- `false`: 非阻塞模式 - 仅显示警告

### 2. tool-call-hook

**触发时机**：Claude Code 调用工具前

**用途**：
- 工具使用审计
- 权限检查
- 敏感操作确认
- 日志记录

**示例**：
```json
{
  "hooks": {
    "tool-call-hook": {
      "command": "node .claude/hooks/tool-audit.js",
      "blocking": false
    }
  }
}
```

### 3. conversation-start-hook

**触发时机**：新对话开始时

**用途**：
- 环境检查
- 配置加载
- 项目状态检查
- 欢迎信息

### 4. conversation-end-hook

**触发时机**：对话结束时

**用途**：
- 清理临时文件
- 保存会话日志
- 生成报告
- 备份工作

---

## 🔧 Hooks 配置

### 配置文件位置

```
~/.config/claude/settings.json      # 全局配置
.claude/settings.json                # 项目配置（优先级更高）
```

### 完整配置示例

```json
{
  "hooks": {
    "user-prompt-submit-hook": {
      "command": "bash .claude/hooks/pre-submit.sh",
      "blocking": true,
      "env": {
        "PROJECT_ROOT": "${workspaceFolder}"
      }
    },
    "tool-call-hook": {
      "command": "python .claude/hooks/tool-logger.py {{tool_name}}",
      "blocking": false
    },
    "conversation-start-hook": {
      "command": "npm run check-env",
      "blocking": false
    }
  }
}
```

### 环境变量

Hooks 脚本可以访问：
- `${workspaceFolder}`: 项目根目录
- `${tool_name}`: 工具名称（tool-call-hook）
- 自定义 `env` 中定义的变量

---

## 💡 实用 Hooks 示例

### 示例 1：代码质量检查

**pre-submit.sh**：
```bash
#!/bin/bash

echo "🔍 Running code quality checks..."

# 1. ESLint 检查
echo "📝 Checking with ESLint..."
npx eslint . --max-warnings 0
if [ $? -ne 0 ]; then
    echo "❌ ESLint check failed!"
    exit 1
fi

# 2. TypeScript 类型检查
echo "🔷 Checking TypeScript types..."
npx tsc --noEmit
if [ $? -ne 0 ]; then
    echo "❌ Type check failed!"
    exit 1
fi

# 3. 运行测试
echo "🧪 Running tests..."
npm test -- --bail
if [ $? -ne 0 ]; then
    echo "❌ Tests failed!"
    exit 1
fi

echo "✅ All checks passed!"
exit 0
```

**配置**：
```json
{
  "hooks": {
    "user-prompt-submit-hook": {
      "command": "bash .claude/hooks/pre-submit.sh",
      "blocking": true
    }
  }
}
```

### 示例 2：敏感信息扫描

**secret-scan.sh**：
```bash
#!/bin/bash

echo "🔒 Scanning for secrets..."

# 检查常见的敏感信息模式
SECRETS_FOUND=false

# API Keys
if git diff --cached | grep -E "(api[_-]?key|apikey)['\"]?\s*[:=]\s*['\"][a-zA-Z0-9]{20,}['\"]"; then
    echo "⚠️  Found potential API key!"
    SECRETS_FOUND=true
fi

# AWS Keys
if git diff --cached | grep -E "AKIA[0-9A-Z]{16}"; then
    echo "⚠️  Found potential AWS key!"
    SECRETS_FOUND=true
fi

# Private Keys
if git diff --cached | grep -E "-----BEGIN (RSA |EC )?PRIVATE KEY-----"; then
    echo "⚠️  Found private key!"
    SECRETS_FOUND=true
fi

# Passwords
if git diff --cached | grep -E "(password|passwd|pwd)['\"]?\s*[:=]\s*['\"][^'\"]{8,}['\"]"; then
    echo "⚠️  Found potential password!"
    SECRETS_FOUND=true
fi

if [ "$SECRETS_FOUND" = true ]; then
    echo "❌ Sensitive information detected! Please remove it."
    exit 1
fi

echo "✅ No secrets found."
exit 0
```

### 示例 3：自动代码格式化

**auto-format.sh**：
```bash
#!/bin/bash

echo "🎨 Auto-formatting code..."

# Prettier
echo "📝 Running Prettier..."
npx prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,md}"

# 自动修复 ESLint 问题
echo "🔧 Auto-fixing ESLint issues..."
npx eslint . --fix

echo "✅ Code formatted successfully!"
exit 0
```

**非阻塞配置**（自动修复后继续）：
```json
{
  "hooks": {
    "user-prompt-submit-hook": {
      "command": "bash .claude/hooks/auto-format.sh",
      "blocking": false
    }
  }
}
```

### 示例 4：工具使用日志

**tool-logger.js**：
```javascript
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const toolName = process.argv[2] || 'unknown';
const timestamp = new Date().toISOString();
const logFile = path.join(__dirname, '../../logs/tool-usage.log');

// 确保日志目录存在
const logDir = path.dirname(logFile);
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

// 记录工具使用
const logEntry = `[${timestamp}] Tool used: ${toolName}\n`;
fs.appendFileSync(logFile, logEntry);

console.log(`✓ Logged tool usage: ${toolName}`);
process.exit(0);
```

### 示例 5：提交前完整检查清单

**comprehensive-check.sh**：
```bash
#!/bin/bash

set -e  # 任何错误立即退出

echo "🚀 Running comprehensive pre-submit checks..."
echo ""

# 计数器
TOTAL_CHECKS=0
PASSED_CHECKS=0
FAILED_CHECKS=0

# 辅助函数
run_check() {
    local check_name=$1
    local check_cmd=$2

    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    echo "▶ Running: $check_name"

    if eval "$check_cmd" > /dev/null 2>&1; then
        echo "  ✅ $check_name passed"
        PASSED_CHECKS=$((PASSED_CHECKS + 1))
        return 0
    else
        echo "  ❌ $check_name failed"
        FAILED_CHECKS=$((FAILED_CHECKS + 1))
        return 1
    fi
}

# 执行检查
echo "📋 Code Quality Checks:"
run_check "ESLint" "npx eslint ."
run_check "Prettier" "npx prettier --check ."
run_check "TypeScript" "npx tsc --noEmit"

echo ""
echo "🧪 Testing:"
run_check "Unit Tests" "npm test -- --coverage --coverageThreshold='{\"global\":{\"branches\":80,\"functions\":80,\"lines\":80}}'"

echo ""
echo "🔒 Security:"
run_check "Dependency Audit" "npm audit --audit-level=moderate"
run_check "Secret Scan" "bash .claude/hooks/secret-scan.sh"

echo ""
echo "📦 Build:"
run_check "Build Check" "npm run build"

# 总结
echo ""
echo "═══════════════════════════════════════"
echo "Summary: $PASSED_CHECKS/$TOTAL_CHECKS checks passed"
echo "═══════════════════════════════════════"

if [ $FAILED_CHECKS -gt 0 ]; then
    echo "❌ $FAILED_CHECKS check(s) failed. Please fix before submitting."
    exit 1
fi

echo "✅ All checks passed! Ready to submit."
exit 0
```

---

## 🏗️ 构建质量门禁系统

### 完整的质量门禁配置

**目录结构**：
```
.claude/
├── settings.json
└── hooks/
    ├── pre-submit.sh           # 主检查脚本
    ├── lint-check.sh           # Lint 检查
    ├── test-check.sh           # 测试检查
    ├── security-check.sh       # 安全检查
    ├── build-check.sh          # 构建检查
    └── tool-audit.js           # 工具审计
```

**settings.json**：
```json
{
  "hooks": {
    "user-prompt-submit-hook": {
      "command": "bash .claude/hooks/pre-submit.sh",
      "blocking": true,
      "env": {
        "MIN_COVERAGE": "80",
        "MAX_WARNINGS": "0"
      }
    },
    "tool-call-hook": {
      "command": "node .claude/hooks/tool-audit.js {{tool_name}}",
      "blocking": false
    }
  }
}
```

**pre-submit.sh**（主脚本）：
```bash
#!/bin/bash

SCRIPTS_DIR="$(dirname "$0")"

echo "🔍 Quality Gate System"
echo "======================"
echo ""

# 运行所有检查
"$SCRIPTS_DIR/lint-check.sh" || exit 1
"$SCRIPTS_DIR/test-check.sh" || exit 1
"$SCRIPTS_DIR/security-check.sh" || exit 1
"$SCRIPTS_DIR/build-check.sh" || exit 1

echo ""
echo "🎉 Quality gate passed!"
exit 0
```

---

## 🎨 Hooks 最佳实践

### 1. 清晰的输出

```bash
# ❌ 差的做法
npm test

# ✅ 好的做法
echo "🧪 Running tests..."
npm test
if [ $? -eq 0 ]; then
    echo "✅ Tests passed"
else
    echo "❌ Tests failed"
    exit 1
fi
```

### 2. 快速失败

```bash
#!/bin/bash
set -e  # 遇到错误立即退出

# 不需要每次检查 if
eslint .
tsc --noEmit
npm test
```

### 3. 可配置性

```bash
# 从环境变量读取配置
MIN_COVERAGE=${MIN_COVERAGE:-80}
MAX_WARNINGS=${MAX_WARNINGS:-0}

npm test -- --coverage --coverageThreshold='{"global":{"lines":'$MIN_COVERAGE'}}'
```

### 4. 性能优化

```bash
# 并行运行独立检查
eslint . &
PID1=$!

tsc --noEmit &
PID2=$!

# 等待所有进程
wait $PID1 || exit 1
wait $PID2 || exit 1
```

### 5. 友好的错误信息

```bash
if ! npm test; then
    echo ""
    echo "❌ Tests failed!"
    echo ""
    echo "💡 Tips:"
    echo "  - Run 'npm test' locally to see details"
    echo "  - Check the test output above"
    echo "  - Fix failing tests before submitting"
    echo ""
    exit 1
fi
```

---

## 🏋️ 实践练习

### 练习 5.1：基础 Hooks

**任务**：创建基本的质量检查 Hook

**步骤**：
1. 创建 `.claude/hooks/` 目录
2. 编写 `pre-submit.sh` 脚本
3. 配置 Hook
4. 测试 Hook

**检查项**：
- [ ] Lint 检查
- [ ] 代码格式检查
- [ ] 基础测试

**验证**：
```bash
# 故意制造问题
echo "const unused = 1" >> test.js

# 提交提示词，应该被 Hook 阻止
"请创建新文件"
```

### 练习 5.2：敏感信息扫描

**任务**：实现敏感信息检测

**要求**：
- 检测 API keys
- 检测密码
- 检测私钥
- 提供清晰的警告

**测试用例**：
```javascript
// 应该被检测到
const apiKey = "sk_live_1234567890abcdef";
const password = "MySecretPass123!";
```

### 练习 5.3：自动化工作流

**任务**：创建完整的自动化工作流

**场景**：
1. 对话开始：检查环境
2. 提交前：运行质量检查
3. 工具调用：记录审计日志
4. 对话结束：生成报告

**实现**：
- [ ] 4 种 Hooks 都配置
- [ ] 脚本完整可用
- [ ] 日志清晰可读

---

## 📊 模块测试

### 测试 1：Hook 配置 (30分)
- [ ] 正确配置 settings.json
- [ ] Hooks 能正常触发
- [ ] blocking 模式工作正常

### 测试 2：脚本编写 (40分)
- [ ] 编写至少 3 个 Hook 脚本
- [ ] 脚本逻辑正确
- [ ] 错误处理完善
- [ ] 输出清晰友好

### 测试 3：实际应用 (30分)
- [ ] 集成到实际项目
- [ ] 阻止了低质量提交
- [ ] 提高了代码质量

**总分 100，60分及格**

---

## 💡 常见问题

### Q1: Hook 不执行？
**检查**：
1. settings.json 路径正确
2. 脚本有执行权限：`chmod +x script.sh`
3. command 路径正确（相对于项目根目录）
4. 重启 Claude Code

### Q2: Hook 总是失败？
**调试**：
```bash
# 手动运行脚本
bash .claude/hooks/pre-submit.sh

# 查看详细错误
bash -x .claude/hooks/pre-submit.sh
```

### Q3: 如何跳过 Hook？
- 通常不建议跳过
- 可以临时修改 `blocking: false`
- 或注释掉 Hook 配置

### Q4: Hook 太慢？
**优化方法**：
1. 并行运行检查
2. 只检查变更文件
3. 使用缓存
4. 将耗时检查放到 CI

---

## 🎯 下一步

完成本模块后，继续学习：

👉 [模块 6：外部集成 - MCP 与 Sub-Agents](../module-6/README.md)

学习如何集成外部服务和使用 Sub-Agents 处理复杂任务。

---

## 📚 参考资源

- [Hooks 官方文档](https://docs.claude.com/docs/claude-code/build/hooks)
- [Git Hooks 文档](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
- 本项目的示例 Hooks：`.claude/hooks/`

---

**记住**：好的 Hooks 应该：
- 快速执行（< 30秒）
- 提供清晰反馈
- 只阻止真正的问题
- 易于调试和维护
