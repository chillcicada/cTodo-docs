# cTodo 文档

中文文档 | [English Docs](../README.md)

这是 cTodo 的官方文档，cTodo 是一个帮助用户管理任务和待办事项的网络扩展。

## 用法

请访问文档网址：<https://ctodo.chillcicada.com>。

## 开发

该仓库要求 [Node](https://nodejs.org) >= 18，并使用 [pnpm](https://pnpm.io) 作为包管理器。请确保您已准备好 Node，已安装并启用了 pnpm。

> [!TIP]
> 推荐使用 VScode 作为 IDE，安装并启用推荐的扩展。

运行 `corepack enabled` 确保启用了 pnpm。然后运行 `pnpm i` 安装依赖项。

如果您在运行下面的命令时出现 `Error: Cannot find module 'pnpm'`，请运行 `npm i -g pnpm` 全局安装 pnpm，然后重新启动 IDE 或终端。

对于开发服务器：

```bash
# 文档的开发服务器
pnpm dev:docs

# 幻灯片的开发服务器，需要指定提供给 `slidev` 的文件
pnpm dev:slides -- docs/slides/index.md # 举例
```

对于生产构建：

```bash
pnpm build
# 或按块构建
pnpm build:docs # 构建文档
pnpm build:slides # 构建幻灯片，这将多次调用 `slidev build`
# 确保在构建幻灯片之前已构建文档
```

预览构建产物：

```bash
pnpm preview
```

更多脚本可以在 `package.json` 文件中找到。

## 贡献

请阅读文档中的 [原则](https://ctodo.chillcicada.com/principle#ctodo-docs) 获取更多信息。

## 许可证

cTodo 文档 使用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0) 许可发布，但 **不包含下列任意情况**：

- 您过去或者目前为清华大学信息化工作办公室或信息化技术中心工作；
- 您的项目受到清华大学的下属机构或其他任何与清华大学有关的机构的任何形式的资助或支持，**包括任何竞争性项目**。
- 您对本项目的反向链接包含或提及了作者的隐私信息（如作者的真实姓名、学校电子邮件、学生身份证或任何其他私人信息）。

如果满足以上任一条件，任何未经作者**明确**授权而使用该项目的代码的行为将被视为侵犯版权（以及作者的隐私权）。此外，如果您的行为违反第三个条件，<u>您可以在不获得许可的情况下</u>，**必须选择**移除所有相关的隐私信息**或**删除反向链接（如使用 `[cTodo](link/to/thisProject) 昵称` 或 `cTodo 真实姓名`）。

上文中的“**使用**”包括对项目的源代码或衍生品（如浏览器插件）制作拷贝、修改、重分发，无论是否用作商业用途。但安装并运行作者发布的浏览器插件的行为不受此例外约束。
