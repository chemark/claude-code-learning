# Git 合并冲突练习

## 练习目标
学会使用 Claude Code 识别和解决 Git 合并冲突

## 场景设置

本练习模拟了一个真实的团队协作场景，两个开发者同时修改了同一个文件的同一位置。

### 背景故事
你和你的队友正在开发一个电商网站的配置系统：
- 你在 `feature/payment-config` 分支添加支付配置
- 队友在 `feature/shipping-config` 分支添加配送配置
- 两人都修改了 `config.js` 文件

## 练习步骤

### 第一步：创建基础分支

```bash
# 初始化 Git 仓库
git init

# 创建初始配置文件
# （使用 Claude Code 创建 config.js）
```

**提示词**：
```
创建一个 config.js 文件，包含基础的应用配置：
- 应用名称
- 端口号
- 数据库连接信息
使用 module.exports 导出配置对象
```

### 第二步：创建冲突场景

**2.1 创建 feature/payment-config 分支**
```bash
git checkout -b feature/payment-config
```

**提示词**：
```
在 config.js 中添加支付配置：
- 支付网关 URL
- API 密钥（使用占位符）
- 支持的支付方式列表
添加在配置对象的末尾
```

```bash
git add config.js
git commit -m "Add payment configuration"
```

**2.2 回到 main 分支并创建另一个分支**
```bash
git checkout main
git checkout -b feature/shipping-config
```

**提示词**：
```
在 config.js 中添加配送配置：
- 默认配送方式
- 配送费用计算规则
- 支持的配送区域
添加在配置对象的末尾（与 payment 相同位置）
```

```bash
git add config.js
git commit -m "Add shipping configuration"
```

### 第三步：模拟合并冲突

```bash
# 先合并 payment 分支（成功）
git checkout main
git merge feature/payment-config

# 尝试合并 shipping 分支（产生冲突）
git merge feature/shipping-config
```

你会看到冲突提示！

### 第四步：使用 Claude Code 解决冲突

**提示词模板**：
```
我在合并 Git 分支时遇到冲突。冲突文件是 config.js。

背景信息：
- feature/payment-config 分支：添加了支付相关配置
- feature/shipping-config 分支：添加了配送相关配置
- 两个分支都在配置对象末尾添加了内容

需求：
1. 保留两个分支的所有改动
2. 支付配置在前，配送配置在后
3. 确保代码格式整齐
4. 验证语法正确

请帮我解决这个冲突。
```

### 第五步：验证和提交

```bash
# 验证解决后的文件
node -c config.js  # 检查语法

# 标记冲突已解决
git add config.js

# 完成合并
git commit -m "Merge shipping config, resolve conflicts"

# 查看合并历史
git log --graph --oneline
```

## 进阶练习

### 练习 A：三方合并冲突

创建三个分支同时修改同一个文件：
1. `feature/add-logging` - 添加日志配置
2. `feature/add-cache` - 添加缓存配置
3. `feature/add-security` - 添加安全配置

逐个合并并解决冲突。

### 练习 B：跨文件冲突

创建场景：
- `feature/refactor-config` 分支：将 config.js 拆分为多个文件
- `feature/add-features` 分支：在原 config.js 添加新功能

解决重构和新增功能的冲突。

### 练习 C：复杂逻辑冲突

场景：两个分支修改了同一个函数的不同部分
- Branch A: 修改了函数参数
- Branch B: 修改了函数内部逻辑

要求：合并两处改动，确保功能正确。

## 验证清单

- [ ] 能够识别冲突标记 (`<<<<<<<`, `=======`, `>>>>>>>`)
- [ ] 理解 HEAD 和分支内容的区别
- [ ] 能够决定保留哪些改动
- [ ] 使用 Claude Code 辅助解决冲突
- [ ] 验证解决后的代码正确性
- [ ] 完成合并提交

## 最佳实践

1. **冲突前预防**
   - 经常 pull 最新代码
   - 小步提交，减少冲突范围
   - 团队沟通，避免同时修改同一区域

2. **冲突解决原则**
   - 理解两边的意图
   - 保留功能完整性
   - 测试解决后的代码
   - 必要时咨询队友

3. **使用 Claude Code**
   - 提供充分的上下文信息
   - 说明每个分支的目的
   - 明确保留需求
   - 验证结果的正确性

## 常见错误

❌ **错误 1：直接删除冲突标记**
```javascript
// 错误：只删除标记，没有真正解决冲突
<<<<<<< HEAD
const config = { mode: 'production' };
=======
const config = { mode: 'development' };
>>>>>>> feature-branch
```

✅ **正确做法：理解并合并**
```javascript
// 正确：根据需求决定保留哪个，或合并
const config = { mode: process.env.NODE_ENV || 'development' };
```

❌ **错误 2：忘记测试**
解决冲突后直接提交，没有运行测试。

✅ **正确做法：验证后提交**
```bash
npm test  # 运行测试
git add .
git commit
```

## 提示词模板库

### 模板 1：基础冲突解决
```
我遇到 Git 合并冲突在文件 [文件名]。
- 分支 A 的改动：[描述]
- 分支 B 的改动：[描述]
请帮我解决冲突，保留 [具体需求]。
```

### 模板 2：复杂冲突分析
```
请分析这个合并冲突：
[粘贴冲突内容]

背景：
- main 分支：[说明]
- feature 分支：[说明]

需要：
1. 解释冲突原因
2. 提供解决方案
3. 确保功能不丢失
```

### 模板 3：重构冲突
```
遇到重构导致的冲突：
- 重构分支：代码结构改变了
- 功能分支：添加了新功能

请帮我：
1. 理解新结构
2. 迁移新功能到重构后的代码
3. 保持代码整洁
```

## 完成后检查

完成练习后，你应该能够：

- [x] 理解 Git 冲突的产生原因
- [x] 识别冲突标记和内容
- [x] 使用 Claude Code 高效解决冲突
- [x] 验证解决方案的正确性
- [x] 掌握冲突预防的最佳实践

下一步：进入 [模块 4：自定义 Slash Commands](../../module-4/README.md)
