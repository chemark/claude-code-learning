# 模块 4：自定义扩展 I - Slash Commands

## 📋 学习目标

- ✅ 理解 Slash Commands 的概念和价值
- ✅ 掌握创建自定义命令的方法
- ✅ 学会使用模板变量和参数
- ✅ 应用命令到实际工作流

## 🎯 为什么需要 Slash Commands？

### 问题场景
在日常开发中，你是否经常重复输入类似的提示词？

```
"请审查这段代码，检查bug、性能问题和最佳实践"
"为这个函数生成单元测试，使用 Jest，覆盖所有边界条件"
"生成 API 文档，包括参数、返回值和示例"
```

### 解决方案：Slash Commands
通过自定义命令，可以将复杂提示词封装成简单命令：

```bash
/review              # 代码审查
/test utils.js       # 生成测试
/doc                 # 生成文档
```

---

## 📖 Slash Commands 基础

### 1. 命令文件结构

所有自定义命令存储在项目的 `.claude/commands/` 目录：

```
your-project/
└── .claude/
    └── commands/
        ├── review.md
        ├── test.md
        ├── doc.md
        └── deploy-check.md
```

### 2. 命令文件格式

每个命令是一个 Markdown 文件，包含两部分：

**基本格式**：
```markdown
---
description: "命令的简短描述（显示在命令列表中）"
---

命令的详细提示词内容
可以是多行
可以使用 Markdown 格式
```

**示例 - review.md**：
```markdown
---
description: "执行代码审查"
---

请审查当前的代码变更，检查以下方面：

1. **代码质量**
   - 命名规范
   - 代码结构
   - 可读性

2. **潜在问题**
   - Bug 和逻辑错误
   - 安全隐患
   - 性能问题

3. **最佳实践**
   - 设计模式
   - 错误处理
   - 测试覆盖

请提供具体的改进建议和代码示例。
```

### 3. 使用命令

创建命令后，在 Claude Code 中使用：

```bash
/review              # 执行代码审查
/test               # 生成测试
/doc                # 生成文档
```

---

## 🔧 高级特性

### 1. 模板变量

命令可以接受参数，使用 `{{变量名}}` 语法：

**test.md**：
```markdown
---
description: "为指定文件生成单元测试"
---

请为文件 {{file}} 生成完整的单元测试：

- 使用 {{framework}} 测试框架
- 覆盖所有函数和方法
- 包含边界条件测试
- 测试错误处理
- 使用 AAA (Arrange-Act-Assert) 模式

确保测试清晰、完整且可维护。
```

**使用**：
```bash
/test file=utils.js framework=Jest
```

### 2. 默认值和条件逻辑

虽然 Slash Commands 不支持复杂的条件逻辑，但可以通过提示词设计实现灵活性：

**doc.md**：
```markdown
---
description: "生成代码文档"
---

请为 {{file}} 生成文档：

{{#if format}}
输出格式：{{format}}
{{else}}
输出格式：JSDoc 注释
{{/if}}

包含：
- 函数/类的描述
- 参数说明（类型、用途）
- 返回值说明
- 使用示例
- 注意事项
```

### 3. 多行内容和代码块

命令中可以包含代码示例：

**refactor.md**：
```markdown
---
description: "重构代码"
---

请重构 {{file}}，目标：

1. **提高可读性**
   - 改善命名
   - 分解长函数
   - 添加清晰注释

2. **优化结构**
   - 提取重复代码
   - 应用设计模式
   - 改善模块化

示例风格：
\`\`\`javascript
// 清晰的函数命名
function calculateUserTotalScore(user, activities) {
  // 实现逻辑...
}
\`\`\`

保持功能不变，添加必要的测试。
```

---

## 💡 实用命令集合

### 1. 代码审查命令集

**review-security.md**：
```markdown
---
description: "安全审查"
---

请进行安全审查，重点检查：

1. **输入验证**
   - 是否验证所有用户输入
   - 防止注入攻击

2. **认证授权**
   - 权限检查是否完整
   - 会话管理是否安全

3. **敏感信息**
   - 是否泄露敏感数据
   - 密钥是否硬编码

4. **依赖安全**
   - 第三方库是否有漏洞

提供具体的安全建议和修复方案。
```

**review-performance.md**：
```markdown
---
description: "性能审查"
---

请分析代码的性能，检查：

1. **时间复杂度**
   - 算法效率
   - 循环嵌套

2. **空间复杂度**
   - 内存使用
   - 数据结构选择

3. **资源使用**
   - 数据库查询
   - API 调用
   - 文件IO

4. **优化建议**
   - 缓存机会
   - 并发处理
   - 懒加载

提供性能优化建议和预期提升。
```

### 2. 生成类命令

**component.md**：
```markdown
---
description: "生成 React 组件"
---

创建 React 组件 {{name}}：

要求：
- 使用函数式组件和 Hooks
- 包含 PropTypes 或 TypeScript 类型
- 添加基本样式（CSS Modules 或 styled-components）
- 包含使用示例
- 编写单元测试

组件功能：{{description}}

遵循最佳实践和项目代码风格。
```

**api.md**：
```markdown
---
description: "生成 API 端点"
---

创建 {{method}} API 端点：{{path}}

功能：{{description}}

包含：
1. 路由定义
2. 请求验证（参数、body）
3. 业务逻辑处理
4. 错误处理
5. 响应格式
6. API 文档注释
7. 单元测试

使用 {{framework}} 框架。
```

### 3. 文档命令

**readme.md**：
```markdown
---
description: "生成项目 README"
---

为当前项目生成完整的 README.md：

包含：
1. 项目标题和简介
2. 功能特性
3. 技术栈
4. 安装说明
5. 使用指南
6. API 文档
7. 配置说明
8. 开发指南
9. 测试说明
10. 贡献指南
11. 许可证

风格：清晰、专业、易读。
使用适当的 emoji 和徽章。
```

**changelog.md**：
```markdown
---
description: "更新 CHANGELOG"
---

基于最近的 git 提交，更新 CHANGELOG.md：

格式：
\`\`\`markdown
## [版本号] - 日期

### Added
- 新功能

### Changed
- 改动

### Fixed
- 修复

### Deprecated
- 废弃
\`\`\`

按语义化版本规范组织内容。
```

### 4. 项目特定命令

**deploy-check.md**：
```markdown
---
description: "部署前检查"
---

执行部署前检查清单：

1. **代码质量**
   - [ ] Lint 通过
   - [ ] 测试通过
   - [ ] 构建成功

2. **配置检查**
   - [ ] 环境变量配置
   - [ ] API 端点正确
   - [ ] 数据库连接测试

3. **安全检查**
   - [ ] 无敏感信息泄露
   - [ ] 依赖安全扫描
   - [ ] HTTPS 配置

4. **性能验证**
   - [ ] 构建产物大小
   - [ ] 加载时间测试

报告所有问题并提供修复建议。
```

---

## 🎨 命令设计最佳实践

### 1. 清晰的描述
```markdown
❌ description: "review"
✅ description: "执行全面的代码审查"
```

### 2. 结构化的提示词
```markdown
✅ 使用编号列表
✅ 分段组织内容
✅ 突出关键要求
✅ 包含具体示例
```

### 3. 明确的输出期望
```markdown
请提供：
1. 问题清单
2. 具体改进建议
3. 代码示例
4. 优先级排序
```

### 4. 适当的参数化
```markdown
✅ 常变参数使用变量：{{file}}, {{name}}
✅ 固定逻辑写入命令
✅ 保持命令简洁易用
```

### 5. 考虑上下文
```markdown
基于当前项目的：
- 技术栈
- 代码风格
- 最佳实践

提供建议...
```

---

## 🏋️ 实践练习

### 练习 4.1：创建基础命令集

**任务**：创建以下命令

1. `/review` - 代码审查
2. `/test` - 生成测试
3. `/doc` - 生成文档
4. `/refactor` - 代码重构
5. `/explain` - 解释复杂代码

**步骤**：
```bash
mkdir -p .claude/commands
cd .claude/commands

# 创建每个命令文件
# 测试每个命令
# 根据使用反馈优化
```

**验证清单**：
- [ ] 每个命令都有清晰的 description
- [ ] 提示词结构完整
- [ ] 命令能正常执行
- [ ] 输出符合预期

### 练习 4.2：项目特定命令

**场景**：为你的实际项目创建定制命令

**任务**：
1. 分析项目中重复的提示词
2. 识别可以自动化的流程
3. 创建 3-5 个项目特定命令
4. 集成到日常工作流

**示例命令思路**：
- `/component` - 创建符合项目规范的组件
- `/api` - 生成 REST API 端点
- `/migration` - 创建数据库迁移
- `/deploy-check` - 部署前检查

**验证清单**：
- [ ] 命令解决实际需求
- [ ] 节省重复工作时间
- [ ] 输出符合项目规范
- [ ] 团队成员可以使用

### 练习 4.3：高级命令技巧

**任务**：创建使用高级特性的命令

1. **带参数的命令**
```markdown
/generate type={{component_type}} name={{component_name}}
```

2. **多步骤命令**
```markdown
/setup-feature name={{feature_name}}
# 创建目录结构
# 生成文件
# 更新路由
# 添加测试
```

3. **组合命令**
```markdown
/complete-review
# 代码审查 + 安全检查 + 性能分析
```

**验证清单**：
- [ ] 参数正确传递和使用
- [ ] 多步骤流程清晰
- [ ] 命令可组合复用

---

## 📊 模块测试

完成以下测试，验证你对 Slash Commands 的掌握：

### 测试 1：命令创建 (30分)
- [ ] 创建 5 个基础命令
- [ ] 每个命令都有完整的文档
- [ ] 命令能正常执行

### 测试 2：参数使用 (30分)
- [ ] 创建至少 2 个带参数的命令
- [ ] 参数使用正确
- [ ] 有默认值处理

### 测试 3：实际应用 (40分)
- [ ] 为实际项目创建定制命令
- [ ] 命令解决真实需求
- [ ] 集成到工作流
- [ ] 提高工作效率

**总分 100，60分及格**

---

## 💡 常见问题

### Q1: 命令不生效？
**检查**：
- 文件路径是否正确 (`.claude/commands/`)
- 文件扩展名是否是 `.md`
- YAML frontmatter 格式是否正确
- 重启 Claude Code 会话

### Q2: 如何查看所有可用命令？
```bash
# 在 Claude Code 中
/help

# 或手动查看
ls .claude/commands/
```

### Q3: 参数如何传递？
```bash
# 方式1：内联参数
/test file=utils.js

# 方式2：在对话中提供
/test
# Claude 会询问需要的参数
```

### Q4: 可以在命令中调用其他命令吗？
不能直接调用，但可以在提示词中引导 Claude Code 执行相关任务：
```markdown
首先执行代码审查（类似 /review）
然后生成测试（类似 /test）
...
```

---

## 🎯 下一步

完成本模块后，继续学习：

👉 [模块 5：自定义扩展 II - Hooks 与自动化](../module-5/README.md)

学习如何使用 Hooks 创建自动化工作流，在特定事件触发时执行自定义脚本。

---

## 📚 参考资源

- [Slash Commands 官方文档](https://docs.claude.com/docs/claude-code/configuration/slash-commands)
- [提示词工程最佳实践](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)
- 本项目的示例命令：`.claude/commands/`

---

**记住**：好的 Slash Command 应该：
- 解决实际重复的需求
- 提示词清晰完整
- 输出可预期
- 易于使用和维护
