# Claude Code 故障排查指南

> 遇到问题？这份指南帮你快速诊断和解决常见问题

## 📋 目录

- [安装和启动问题](#安装和启动问题)
- [工具权限问题](#工具权限问题)
- [MCP 服务器问题](#mcp-服务器问题)
- [Hooks 不执行](#hooks-不执行)
- [性能问题](#性能问题)
- [Git 集成问题](#git-集成问题)
- [其他常见问题](#其他常见问题)

---

## 安装和启动问题

### 问题 1: Claude Code 无法启动

**症状**：
- 运行 `claude` 无反应
- 命令未找到错误
- 启动后立即退出

**诊断步骤**：

```bash
# 步骤 1: 检查是否安装
claude --version

# 步骤 2: 检查 Node.js 版本
node --version  # 需要 >= 18

# 步骤 3: 检查 NPM 全局路径
npm root -g
```

**解决方案**：

<details>
<summary>❌ 命令未找到</summary>

```bash
# 重新安装
npm install -g @anthropic-ai/claude-code

# 如果还是不行，检查 PATH
echo $PATH  # 应该包含 npm 全局 bin 目录

# macOS/Linux
export PATH="$PATH:$(npm bin -g)"

# 添加到 ~/.bashrc 或 ~/.zshrc 永久生效
```
</details>

<details>
<summary>❌ Node.js 版本过低</summary>

```bash
# 升级 Node.js
# 使用 nvm (推荐)
nvm install 18
nvm use 18

# 或使用 n
npm install -g n
n 18
```
</details>

<details>
<summary>❌ 权限问题</summary>

```bash
# 不要使用 sudo 安装
# 配置 npm 全局目录
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

# 添加到 PATH
export PATH=~/.npm-global/bin:$PATH

# 重新安装
npm install -g @anthropic-ai/claude-code
```
</details>

---

### 问题 2: 认证失败

**症状**：
- 无法登录
- Token 过期
- 401 未授权错误

**解决方案**：

```bash
# 清除现有认证
rm -rf ~/.config/claude/auth.json

# 重新登录
claude
# 按提示完成认证流程

# 检查配置
cat ~/.config/claude/settings.json
```

**常见原因**：
- API key 过期
- 网络代理问题
- 配置文件损坏

---

## 工具权限问题

### 问题 3: Permission Denied 错误

**症状**：
```
Error: EACCES: permission denied, open '/path/to/file'
```

**诊断检查**：

```bash
# 检查文件权限
ls -la /path/to/file

# 检查当前用户
whoami

# 检查文件所有者
stat /path/to/file
```

**解决方案**：

<details>
<summary>✅ 方案 1: 修改文件权限</summary>

```bash
# 添加写权限
chmod +w /path/to/file

# 或者修改所有者
sudo chown $USER:$USER /path/to/file
```
</details>

<details>
<summary>✅ 方案 2: 配置允许路径</summary>

在 `.claude/settings.json` 中：
```json
{
  "allowedPaths": [
    "/path/to/allowed/directory"
  ]
}
```
</details>

---

### 问题 4: 无法读取/写入文件

**症状**：
- Claude Code 说文件不存在
- 无法创建文件

**检查清单**：
- [ ] 路径是否正确（绝对路径 vs 相对路径）
- [ ] 目录是否存在
- [ ] 是否有权限
- [ ] 文件名是否包含特殊字符

**调试技巧**：

```bash
# 测试路径
pwd  # 查看当前目录
ls -la "$(pwd)/file.js"  # 检查文件

# 让 Claude Code 显示完整路径
# 提示词：
# "显示你要访问的文件的完整绝对路径"
```

---

## MCP 服务器问题

### 问题 5: MCP 服务器连接失败

**症状**：
- MCP 工具不可用
- 连接超时
- 服务器启动失败

**诊断步骤**：

```bash
# 步骤 1: 检查配置
cat ~/.config/claude/settings.json | jq '.mcpServers'

# 步骤 2: 测试服务器独立运行
npx @modelcontextprotocol/server-github

# 步骤 3: 检查环境变量
echo $GITHUB_PERSONAL_ACCESS_TOKEN
```

**常见问题和解决方案**：

<details>
<summary>❌ GitHub MCP 连接失败</summary>

**检查**：
```json
// settings.json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxxx"
      }
    }
  }
}
```

**验证 Token**：
```bash
# 测试 Token 有效性
curl -H "Authorization: token ghp_xxxxx" \
  https://api.github.com/user
```

**常见错误**：
- Token 权限不足（需要 repo, read:org 权限）
- Token 已过期
- 网络被防火墙阻止
</details>

<details>
<summary>❌ Filesystem MCP 无法访问</summary>

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/absolute/path/to/allowed/directory"
      ]
    }
  }
}
```

**注意**：
- 必须使用绝对路径
- 路径必须存在
- 需要读/写权限
</details>

---

### 问题 6: MCP 工具找不到

**症状**：
Claude Code 说"我没有这个工具"

**检查**：

```bash
# 1. 确认 MCP 服务器配置正确
cat ~/.config/claude/settings.json

# 2. 重启 Claude Code
# (关闭所有会话，重新启动)

# 3. 检查 MCP 日志
# 日志位置：~/.config/claude/logs/
cat ~/.config/claude/logs/mcp.log
```

**调试模式**：

```json
// settings.json
{
  "debug": true,  // 启用详细日志
  "mcpServers": {
    // ...
  }
}
```

---

## Hooks 不执行

### 问题 7: Hook 命令没有运行

**症状**：
- 配置了 Hook 但没有效果
- Hook 应该触发但没有触发

**检查清单**：

- [ ] `settings.json` 语法正确
- [ ] 命令路径正确
- [ ] 脚本有执行权限
- [ ] Hook 类型正确

**诊断步骤**：

```bash
# 1. 验证 JSON 语法
cat ~/.config/claude/settings.json | jq .

# 2. 检查 Hook 配置
cat ~/.config/claude/settings.json | jq '.hooks'

# 3. 测试命令独立运行
bash /path/to/hook/script.sh

# 4. 检查脚本权限
ls -la /path/to/hook/script.sh
chmod +x /path/to/hook/script.sh
```

**配置示例**：

<details>
<summary>✅ 正确的 Hook 配置</summary>

```json
{
  "hooks": {
    "user-prompt-submit-hook": {
      "command": "bash /absolute/path/to/script.sh",
      "blocking": false,
      "timeout": 5000
    }
  }
}
```

**注意**：
- 使用绝对路径
- 脚本必须有执行权限 (`chmod +x`)
- `blocking: true` 会等待命令完成
- `timeout` 单位是毫秒
</details>

---

### 问题 8: Hook 执行但没有效果

**症状**：
Hook 运行了但结果不符合预期

**调试方法**：

```bash
# 创建日志 Hook
#!/bin/bash
echo "Hook triggered at $(date)" >> /tmp/claude-hook.log
echo "Args: $@" >> /tmp/claude-hook.log
echo "Env: " >> /tmp/claude-hook.log
env | grep CLAUDE >> /tmp/claude-hook.log

# 然后触发 Hook 并查看日志
tail -f /tmp/claude-hook.log
```

**可用的环境变量**：
- `CLAUDE_TOOL_NAME` - 工具名称（tool-call-hook）
- `CLAUDE_TOOL_INPUT` - 工具输入（tool-call-hook）
- `CLAUDE_WORKSPACE` - 工作目录

---

## 性能问题

### 问题 9: Claude Code 响应很慢

**症状**：
- 等待时间长
- 卡顿
- 超时

**优化建议**：

<details>
<summary>🚀 减少上下文大小</summary>

```
# 避免
"分析整个项目"  ❌

# 改为
"分析 src/components 目录下的 React 组件"  ✅
```

**原则**：
- 只读取必要的文件
- 使用 Glob/Grep 精确定位
- 限制文件读取行数
</details>

<details>
<summary>🚀 优化 Hooks 和 MCP</summary>

```json
{
  "hooks": {
    "tool-call-hook": {
      "command": "quick-check.sh",  // 快速脚本
      "timeout": 1000  // 短超时
    }
  }
}
```

**避免**：
- Hook 中运行耗时操作
- 同步阻塞的 MCP 调用
- 过多的并发 Sub-Agents
</details>

<details>
<summary>🚀 使用更快的模型</summary>

```json
{
  "model": "claude-sonnet-4"  // 更快的模型
}
```

或在对话中：
```
"使用更快的模型回复"
```
</details>

---

### 问题 10: 内存使用过高

**症状**：
- 系统变慢
- Node.js 内存警告

**解决方案**：

```bash
# 限制 Node.js 内存
export NODE_OPTIONS="--max-old-space-size=4096"  # 4GB

# 清理缓存
rm -rf ~/.config/claude/cache

# 重启 Claude Code
```

---

## Git 集成问题

### 问题 11: 无法创建提交

**症状**：
- Git 命令失败
- 提交被拒绝

**检查**：

```bash
# 1. Git 配置
git config --list

# 2. 必需的配置
git config user.name "Your Name"
git config user.email "your@email.com"

# 3. Git 状态
git status
git diff
```

**常见错误**：

<details>
<summary>❌ pre-commit hook 失败</summary>

```bash
# 查看 hook
cat .git/hooks/pre-commit

# 临时跳过（不推荐）
git commit --no-verify

# 修复 hook 问题
# ...然后正常提交
```
</details>

<details>
<summary>❌ 没有变更可提交</summary>

```bash
# 检查状态
git status

# 添加文件
git add .

# 或让 Claude Code 添加
# 提示词："添加所有变更并创建提交"
```
</details>

---

### 问题 12: Pull Request 创建失败

**症状**：
`gh pr create` 失败

**检查**：

```bash
# 1. gh CLI 已安装
gh --version

# 2. gh 已认证
gh auth status

# 3. 远程仓库配置
git remote -v

# 4. 当前分支状态
git branch -vv
```

**解决方案**：

```bash
# 安装 gh CLI
brew install gh  # macOS
# or
curl -sS https://webi.sh/gh | sh  # Linux

# 认证
gh auth login

# 设置远程仓库
git remote add origin https://github.com/user/repo.git

# 推送分支
git push -u origin feature-branch
```

---

## 其他常见问题

### 问题 13: Slash Commands 不显示

**症状**：
输入 `/` 看不到自定义命令

**检查**：

```bash
# 1. 命令文件位置
ls -la .claude/commands/

# 2. 文件扩展名
# 必须是 .md
mv command.txt command.md

# 3. 文件内容格式
cat .claude/commands/mycommand.md
```

**正确格式**：

```markdown
---
description: "命令描述"
---

命令的提示词内容
```

---

### 问题 14: 配置文件损坏

**症状**：
- Claude Code 无法启动
- 各种奇怪的错误

**恢复步骤**：

```bash
# 1. 备份现有配置
cp ~/.config/claude/settings.json ~/.config/claude/settings.json.backup

# 2. 验证 JSON
cat ~/.config/claude/settings.json | jq .

# 3. 如果损坏，恢复默认
rm ~/.config/claude/settings.json

# 4. 重启 Claude Code（会创建新配置）
claude
```

---

### 问题 15: 日志在哪里？

**日志位置**：

```bash
# Claude Code 日志
~/.config/claude/logs/

# 查看最近的日志
tail -f ~/.config/claude/logs/claude.log

# MCP 日志
tail -f ~/.config/claude/logs/mcp.log

# Hook 日志（如果配置了）
tail -f ~/.config/claude/logs/hooks.log
```

**启用详细日志**：

```json
// settings.json
{
  "logLevel": "debug"
}
```

---

## 🆘 仍然无法解决？

### 获取帮助的步骤

1. **搜索现有问题**
   - [GitHub Issues](https://github.com/anthropics/claude-code/issues)
   - [GitHub Discussions](https://github.com/anthropics/claude-code/discussions)

2. **提供详细信息**
   ```
   - Claude Code 版本：`claude --version`
   - 操作系统：`uname -a`
   - Node.js 版本：`node --version`
   - 错误信息：完整的错误日志
   - 复现步骤：如何触发问题
   ```

3. **创建最小复现示例**
   - 简化到最小的触发场景
   - 提供配置文件示例
   - 说明预期 vs 实际行为

4. **提问的最佳实践**
   - ✅ 描述具体问题
   - ✅ 提供错误信息
   - ✅ 说明尝试过的解决方案
   - ✅ 包含环境信息
   - ❌ 避免"不工作"这样的模糊描述

---

## 📚 相关资源

- [官方文档](https://docs.claude.com/en/docs/claude-code/)
- [最佳实践指南](./BEST_PRACTICES.md)
- [学习计划](./LEARNING_PLAN.md)
- [GitHub Issues](https://github.com/anthropics/claude-code/issues)

---

## 🔍 快速诊断清单

遇到问题时，依次检查：

- [ ] Claude Code 版本是最新的
- [ ] Node.js >= 18
- [ ] 配置文件 JSON 格式正确
- [ ] 文件路径正确（绝对路径）
- [ ] 文件权限正确
- [ ] 网络连接正常
- [ ] 环境变量正确设置
- [ ] 查看了错误日志
- [ ] 尝试了重启 Claude Code

---

**提示**：90% 的问题可以通过检查配置文件、权限和日志来解决。遇到问题不要慌，按照本指南一步步排查！

💪 祝你顺利解决问题，继续愉快地使用 Claude Code！
