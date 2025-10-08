# 📚 Memory 配置安装指南

> 完整的 User Memory 和 Project Memory 配置指南

## 🎯 配置文件说明

### 已创建的文件

✅ **Project Memory** (项目记忆)
- **位置**: `./CLAUDE.md`
- **状态**: ✅ 已创建并保存
- **作用**: 项目特定配置，会被 Git 追踪

✅ **User Memory Template** (用户记忆模板)
- **位置**: `.claude/USER_MEMORY_TEMPLATE.md`
- **状态**: ✅ 已创建模板
- **需要**: 复制到用户主目录

---

## 🚀 快速安装（推荐）

### 步骤 1: Project Memory（已完成）

Project memory 已经自动配置好了！文件位置：
```
./CLAUDE.md
```

**无需额外操作**，Claude Code 会自动读取。

### 步骤 2: User Memory（需要安装）

选择以下任一方式安装：

#### 方式 A: 使用命令行（最快）

```bash
# 1. 创建配置目录
mkdir -p ~/.claude

# 2. 复制模板到用户配置
cp .claude/USER_MEMORY_TEMPLATE.md ~/.claude/CLAUDE.md

# 3. 验证
ls -la ~/.claude/CLAUDE.md
```

执行后应该看到：
```
-rw-r--r--  1 xingshuhao  staff  XXXX  日期  /Users/xingshuhao/.claude/CLAUDE.md
```

#### 方式 B: 通过 VS Code

```bash
# 1. 用 VS Code 打开模板
code .claude/USER_MEMORY_TEMPLATE.md

# 2. 复制所有内容（Cmd+A, Cmd+C）

# 3. 创建用户配置文件
code ~/.claude/CLAUDE.md

# 4. 粘贴内容（Cmd+V）

# 5. 保存（Cmd+S）
```

#### 方式 C: 通过 Claude Code /memory 命令

```bash
# 1. 在 Claude Code 中运行
/memory

# 2. 选择 "2. User memory"
# 使用 ↓ 或输入 2

# 3. 会打开编辑界面

# 4. 复制 .claude/USER_MEMORY_TEMPLATE.md 的内容并粘贴

# 5. 保存退出
```

---

## ✅ 验证配置

### 验证 Project Memory

```bash
# 检查文件是否存在
ls -la CLAUDE.md

# 查看文件内容（前几行）
head -20 CLAUDE.md
```

应该看到：
```markdown
# Claude Code 学习项目 - Project Memory

> 此文件为项目级记忆配置...
```

### 验证 User Memory

```bash
# 检查文件是否存在
ls -la ~/.claude/CLAUDE.md

# 查看文件内容（前几行）
head -20 ~/.claude/CLAUDE.md
```

应该看到：
```markdown
# Claude Code - 我的个人配置

> 此文件为用户级记忆配置...
```

### 在 Claude Code 中验证

```bash
# 1. 重启 Claude Code（让它重新加载配置）
exit
claude

# 2. 检查 memory
/memory

# 3. 应该看到三个选项：
# 1. .claude/CLAUDE.md
# 2. User memory ✅（应该显示已配置）
# 3. Project memory ✅（应该显示已配置）
```

---

## 🧪 测试效果

### 测试 1: Git 批量提交提醒

```bash
# 在 Claude Code 中说：
"我要提交 README.md"

# 预期 Claude 会询问：
"是否还有其他相关文件需要一起修改？
批量提交可以节省约 20% token。"
```

### 测试 2: 项目特点识别

```bash
# 在 Claude Code 中说：
"创建一个新的学习指南"

# 预期 Claude 会：
- 使用项目的文档模板
- 包含丰富的示例
- 提供检查清单
- 使用中文
```

### 测试 3: 代码风格应用

```bash
# 在 Claude Code 中说：
"写一个 JavaScript 函数"

# 预期 Claude 会：
- 使用单引号
- 2 个空格缩进
- 添加分号
- 包含 JSDoc 注释
```

---

## 📝 配置内容概览

### Project Memory 包含

✅ 项目基本信息（学习项目、教学型）
✅ Token 优化规则（批量提交 3-5 个文件）
✅ 文档结构模板
✅ 项目维护原则
✅ 与 Claude 交互规范

**效果**: Claude 会理解这是一个教学项目，注重文档质量和 token 优化。

### User Memory 包含

✅ 个人代码风格偏好（单引号、2空格）
✅ 工具链偏好（VS Code、pnpm、Vitest）
✅ Git 操作习惯（Conventional Commits、批量提交）
✅ Claude Code 使用习惯（详细说明、示例优先）
✅ 学习和成长方向

**效果**: Claude 会按照你的个人习惯和偏好工作，跨所有项目使用。

---

## 🔄 配置优先级

```
Project Memory (./CLAUDE.md)
    ↓ 覆盖
User Memory (~/.claude/CLAUDE.md)
    ↓ 覆盖
.claude/CLAUDE.md (项目说明)
```

**示例**：
- User memory 说："使用 npm"
- Project memory 说："使用 pnpm"
- 结果：Claude 在这个项目中使用 pnpm

---

## 🛠️ 自定义配置

### 修改 User Memory

```bash
# 随时编辑
code ~/.claude/CLAUDE.md

# 或在 Claude Code 中
/memory → 选择 "2. User memory"
```

**建议修改的地方**：
- 个人信息（名字、邮箱）
- 代码风格偏好
- 工具链选择
- 学习方向

### 修改 Project Memory

```bash
# 编辑项目配置
code CLAUDE.md

# 或在 Claude Code 中
/memory → 选择 "3. Project memory"
```

**建议修改的地方**：
- 项目当前状态
- Token 优化阈值
- 文档标准

---

## 📊 预期改进

配置完成后，你会发现：

### Token 消耗优化
```
之前：每个文件单独提交
- 5 个文件 = 17.5K tokens

现在：批量提交
- 5 个文件 = 13.5K tokens
- 节省：23% ✨
```

### 工作效率提升
```
之前：
- 频繁询问基本偏好
- 需要每次说明项目特点
- 代码风格不一致

现在：
- 自动应用个人偏好
- 自动理解项目特点
- 代码风格统一
```

### 交互质量提升
```
之前：
- 通用回答

现在：
- 针对你的习惯定制
- 主动提醒优化机会
- 提供估算和建议
```

---

## ❓ 常见问题

### Q1: 配置会影响其他项目吗？

**A**:
- User memory: ✅ 会（这是设计目的）
- Project memory: ❌ 不会（每个项目独立）

### Q2: 可以随时修改配置吗？

**A**: ✅ 可以！随时编辑文件或通过 `/memory` 修改。

### Q3: 配置会被 Git 追踪吗？

**A**:
- `./CLAUDE.md` (Project memory): ✅ 会被追踪
- `~/.claude/CLAUDE.md` (User memory): ❌ 不会追踪

### Q4: 忘记配置了什么怎么办？

**A**: 运行 `/memory` 查看所有配置。

### Q5: 可以分享配置给团队吗？

**A**:
- Project memory: ✅ 可以（已在 Git 中）
- User memory: ⚠️ 需要手动分享模板

---

## 🎉 完成检查清单

```markdown
### 配置完成检查

- [ ] Project memory 已创建（./CLAUDE.md）
- [ ] User memory 已安装（~/.claude/CLAUDE.md）
- [ ] 已重启 Claude Code
- [ ] 已运行 /memory 验证
- [ ] 已测试 Git 批量提醒
- [ ] 已测试代码风格应用

全部完成？恭喜！🎊
```

---

## 📞 需要帮助？

如果遇到问题：
1. 检查文件路径是否正确
2. 确认文件权限（应该可读）
3. 重启 Claude Code
4. 查看本项目的 `TROUBLESHOOTING.md`

---

<div align="center">
  <sub>🧠 Memory 配置完成，享受更智能的 Claude Code 体验！</sub>
</div>
