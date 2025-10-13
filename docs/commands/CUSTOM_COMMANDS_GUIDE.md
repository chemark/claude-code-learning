# ⚡ 自定义 Slash Commands 完整指南

> 创建你自己的命令，打造个性化工作流

## 📋 目录

- [基础概念](#基础概念)
- [快速开始](#快速开始)
- [创建命令](#创建命令)
- [高级功能](#高级功能)
- [实战案例](#实战案例)
- [最佳实践](#最佳实践)

---

## 基础概念

### 什么是自定义 Slash Commands？

自定义 Slash Commands 允许你创建自己的 `/命令`，将常用操作封装成可重用的命令。

**内置命令 vs 自定义命令**：

| 类型 | 示例 | 创建方式 |
|------|------|---------|
| 内置命令 | `/clear`, `/memory`, `/help` | Claude Code 提供 |
| 自定义命令 | `/review`, `/deploy`, `/test` | 你自己创建 |

### 为什么要创建自定义命令？

```bash
# 没有自定义命令
每次都要输入：
"审查代码，检查：
1. 代码质量
2. 性能问题
3. 安全性
4. 测试覆盖率
..."

# 有了自定义命令
/review  # 一个命令搞定！
```

---

## 快速开始

### 30 秒创建第一个命令

```bash
# 1. 创建命令目录（如果不存在）
mkdir -p .claude/commands

# 2. 创建命令文件
cat > .claude/commands/hello.md << 'EOF'
说 "Hello, World!" 并显示当前时间
EOF

# 3. 使用命令
/hello

# Claude 会执行文件中的指令
```

---

## 创建命令

### 1. 基本命令结构

**文件位置**：
```
.claude/
└── commands/
    ├── command1.md
    ├── command2.md
    └── command3.md
```

**命令文件格式**：
```markdown
# .claude/commands/review.md

审查当前代码并提供反馈：

1. 检查代码质量
2. 查找性能问题
3. 验证安全性
4. 检查测试覆盖率
5. 提供改进建议
```

**使用命令**：
```bash
/review  # 执行 review.md 中的指令
```

### 2. 命令命名规范

**✅ 推荐命名**：
```bash
/review      # 简短、清晰
/test        # 动词形式
/deploy      # 描述性强
/fix-bugs    # 中划线连接
```

**❌ 避免命名**：
```bash
/r           # 太简短
/reviewCodeAndProvide  # 太长
/my_command  # 下划线（用中划线）
```

### 3. 基础命令示例

**示例 1: 代码审查**
```markdown
# .claude/commands/review.md

请审查当前的代码更改：

## 检查项
- [ ] 代码符合团队规范
- [ ] 没有明显的 bug
- [ ] 性能考虑得当
- [ ] 安全性无问题
- [ ] 测试覆盖充分
- [ ] 文档已更新

请逐项检查并提供详细反馈。
```

**示例 2: 运行测试**
```markdown
# .claude/commands/test.md

运行完整测试流程：

1. 运行单元测试
2. 运行集成测试
3. 生成覆盖率报告
4. 检查测试覆盖率是否达标 (>80%)
5. 显示失败的测试详情
```

**示例 3: Git 提交**
```markdown
# .claude/commands/commit.md

创建 Git 提交：

1. 检查 git status
2. 分析所有更改
3. 生成符合 Conventional Commits 的提交信息
4. 包含中文描述
5. 询问确认后执行提交
```

---

## 高级功能

### 1. 带参数的命令

**使用 $ARGUMENTS 变量**：
```markdown
# .claude/commands/deploy.md

部署到 $ARGUMENTS 环境：

步骤：
1. 检查 $ARGUMENTS 环境配置
2. 运行测试套件
3. 构建生产版本
4. 部署到 $ARGUMENTS
5. 运行健康检查
6. 通知团队
```

**使用方式**：
```bash
/deploy staging
/deploy production
```

### 2. 多行参数

```markdown
# .claude/commands/create-component.md

创建新组件：$ARGUMENTS

要求：
1. 创建组件文件
2. 创建样式文件
3. 创建测试文件
4. 创建 Storybook 文档
5. 导出组件
```

**使用方式**：
```bash
/create-component Button
/create-component UserProfile
```

### 3. 项目上下文命令

```markdown
# .claude/commands/analyze.md

分析当前项目：

1. 识别项目类型和技术栈
2. 分析项目结构
3. 检查依赖关系
4. 识别潜在问题
5. 提供优化建议
```

### 4. 条件执行命令

```markdown
# .claude/commands/safe-deploy.md

安全部署流程：

前置检查：
- [ ] 所有测试通过
- [ ] 代码已审查
- [ ] 版本号已更新
- [ ] 变更日志已更新

如果所有检查通过：
1. 创建发布分支
2. 构建生产版本
3. 部署到 staging
4. 验证 staging
5. 部署到 production
6. 验证 production
7. 创建 Git tag
8. 发布公告

否则：
停止并显示未通过的检查项
```

---

## 实战案例

### 案例 1: 完整的代码审查工作流

```markdown
# .claude/commands/full-review.md

完整代码审查工作流：

## 阶段 1: 静态分析
1. 运行 ESLint
2. 运行 Prettier 检查
3. 运行 TypeScript 类型检查
4. 报告所有错误和警告

## 阶段 2: 代码质量
1. 检查代码复杂度
2. 查找重复代码
3. 分析函数长度
4. 检查命名规范

## 阶段 3: 安全审查
1. 检查依赖漏洞 (npm audit)
2. 查找硬编码的密钥
3. 检查 SQL 注入风险
4. 验证输入验证

## 阶段 4: 性能分析
1. 识别性能瓶颈
2. 检查不必要的重渲染
3. 分析 bundle 大小
4. 提供优化建议

## 阶段 5: 测试
1. 运行所有测试
2. 检查覆盖率
3. 识别未测试的代码
4. 建议新的测试用例

## 最终报告
生成完整的审查报告，包括：
- 发现的问题
- 优先级排序
- 修复建议
- 后续步骤
```

### 案例 2: 功能开发模板

```markdown
# .claude/commands/feature.md

开发新功能：$ARGUMENTS

## 步骤 1: 规划
1. 理解功能需求
2. 设计 API 接口
3. 规划文件结构
4. 识别依赖关系

## 步骤 2: 创建文件结构
```
src/
├── features/$ARGUMENTS/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── types/
│   └── index.ts
```

## 步骤 3: 实现
1. 创建类型定义
2. 实现业务逻辑
3. 创建 React 组件
4. 创建自定义 hooks
5. 实现 API 调用

## 步骤 4: 测试
1. 创建单元测试
2. 创建集成测试
3. 创建 E2E 测试（如需要）
4. 验证覆盖率 > 80%

## 步骤 5: 文档
1. 添加 JSDoc 注释
2. 创建 README
3. 添加使用示例
4. 更新项目文档

## 步骤 6: 审查
1. 运行 /full-review
2. 修复发现的问题
3. 创建 Pull Request
4. 添加审查者
```

### 案例 3: Bug 修复流程

```markdown
# .claude/commands/fix-bug.md

Bug 修复流程：$ARGUMENTS

## 步骤 1: 复现
1. 阅读 bug 报告
2. 创建复现步骤
3. 验证 bug 存在
4. 记录预期 vs 实际行为

## 步骤 2: 定位
1. 添加调试日志
2. 使用二分法定位
3. 分析相关代码
4. 识别根本原因

## 步骤 3: 修复
1. 设计修复方案
2. 实现修复
3. 验证修复有效
4. 检查副作用

## 步骤 4: 测试
1. 添加回归测试
2. 运行相关测试
3. 运行完整测试套件
4. 手动验证

## 步骤 5: 文档
1. 更新 CHANGELOG
2. 添加代码注释
3. 更新相关文档

## 步骤 6: 提交
1. 创建提交: fix: $ARGUMENTS
2. 关联 issue
3. 创建 PR
4. 标记为 bug fix
```

---

## 最佳实践

### 1. 命令组织

**按功能分类**：
```
.claude/commands/
├── git/
│   ├── commit.md
│   ├── review-pr.md
│   └── deploy.md
├── test/
│   ├── unit.md
│   ├── integration.md
│   └── e2e.md
└── docs/
    ├── generate.md
    └── update.md
```

### 2. 命令文档

**每个命令包含**：
```markdown
# 命令名称

## 用途
简短描述命令的作用

## 参数
$ARGUMENTS - 参数说明

## 示例
/command-name example-arg

## 前置条件
列出执行前需要满足的条件

## 执行步骤
详细的执行步骤

## 预期输出
描述命令完成后的结果
```

### 3. 团队共享

```bash
# 1. 将命令提交到 Git
git add .claude/commands/
git commit -m "添加团队命令"

# 2. 团队成员 clone 后自动获得

# 3. 更新命令
git pull  # 获取最新命令
```

### 4. 命令版本管理

```markdown
# .claude/commands/README.md

## 命令清单

### v1.0.0 (2025-01-15)
- `/review` - 代码审查
- `/test` - 运行测试
- `/deploy` - 部署流程

### v1.1.0 (2025-01-20)
- `/fix-bug` - Bug 修复流程 (NEW)
- `/feature` - 功能开发模板 (NEW)

### Changelog
- 2025-01-20: 添加 bug 修复和功能开发命令
- 2025-01-15: 初始版本
```

---

## 命令集合示例

### 开发工作流

```bash
/start-feature    # 开始新功能
/review           # 代码审查
/test             # 运行测试
/commit           # 创建提交
/push             # 推送代码
/create-pr        # 创建 PR
```

### Git 工作流

```bash
/commit           # 智能提交
/amend            # 修改最后一次提交
/review-pr        # 审查 PR
/merge            # 合并 PR
/deploy           # 部署
```

### 质量保证

```bash
/lint             # 代码检查
/test-unit        # 单元测试
/test-e2e         # E2E 测试
/coverage         # 覆盖率报告
/audit            # 安全审计
```

---

## 学习检查清单

```markdown
### 自定义命令掌握度

#### 基础
- [ ] 创建简单命令
- [ ] 使用命令
- [ ] 编辑命令
- [ ] 删除命令

#### 中级
- [ ] 创建带参数命令
- [ ] 组织命令目录
- [ ] 创建命令文档
- [ ] 团队共享命令

#### 高级
- [ ] 复杂工作流命令
- [ ] 条件执行命令
- [ ] 命令版本管理
- [ ] 最佳实践应用
```

---

<div align="center">
  <sub>⚡ 自定义命令，打造高效工作流！</sub>
</div>
