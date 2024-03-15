# 设计规范

> 由 GPT-4 翻译。

## cTodo（cTodo - 客户端）

cTodo - 客户端采用[MIT](https://mit-license.org)许可发布，您可以从[GitHub](https://github.com/chillcicada/ctodo)获取源代码。

### 设计

### 开发

> [!IMPORTANT]
> cTodo（客户端）需要 [Node](https://nodejs.org) >= 18.0.0，并且使用 [pnpm](https://pnpm.io) 作为包管理器。**请确保在开始之前已安装和配置了 Node 和 pnpm。**

运行 `corepack enable` 确保启用了 pnpm。然后运行 `pnpm i` 下载依赖项。如果遇到错误 `pnpm: command not found`，您可以通过 `npm i -g pnpm` 全局安装 pnpm，并重新启动您的IDE或终端，或检查您的环境变量。同时，建议使用[VSCode](https://code.visualstudio.com)作为编辑器。

一些脚本：

- `pnpm dev`：启动用于 Chrome 的开发服务器，**这需要您已安装 Chrome**。
  - `pnpm dev:firefox`：启动用于 Firefox 的开发服务器，**这需要您已安装 Firefox**。

> [!TIP]
> 本项目使用[wxt](https://wxt.dev)作为开发框架。
>
> wxt尚未完全支持内容脚本的HMR，因此在修改内容脚本后需要手动刷新扩展程序。

- `pnpm build`：为生产环境构建扩展程序，输出位于 `<root>/.output/<target>`。默认目标为 `chrome-mv3`。
  - `pnpm build:firefox`：为 Firefox 构建扩展程序，输出位于 `<root>/.output/firefox-mv2`。
- `pnpm zip`：将扩展程序打包为分发文件，输出位于 `<root>/.output/<target>.zip`。默认目标为 `chrome-mv3`。
  - `pnpm zip:firefox`：将扩展程序打包为 Firefox，输出位于 `<root>/.output/firefox-mv2.zip`。

<!-- pnpm submit/release -->

- `pnpm postinstall`：运行 postinstall 脚本以生成开发所需的必要文件。此脚本将在上述脚本执行之前或依赖项自动更新后执行。

<!-- - `pnpm compile`：将源代码编译到输出目录，这用于在浏览器中测试扩展程序。 -->

> [!TIP]
> 您可以从输出目录加载未打包的扩展程序以在浏览器中测试扩展程序，这需要您在浏览器中启用开发者模式。尽管如此，我建议使用 `pnpm dev` 来开发扩展程序。

- `pnpm lint`：运行 linter 检查代码风格。
  - `pnpm lint:fix`：运行 linter 检查代码风格并自动修复代码风格。

> [!TIP]
> linter 和格式化程序基于[eslint](https://eslint.org)。

- `pnpm test`：运行测试用例。
  - `pnpm test:ui`：运行测试用例，这将提供一个UI来查看和与测试交互。
  - `pnpm test:watch`：运行测试用例并监视文件更改。
  - `pnpm test:coverage`：运行测试用例并生成覆盖率报告。

如果要测试单个文件，可以运行 `pnpm test -- path/to/test-file.{spec,test}.ts` 或 `pnpm test:watch -- path/to/test-file.{spec,test}.ts`。

> [!TIP]
> 测试用例基于[vitest](https://vitest.dev)。
>
> 强烈建议使用VSCode扩展vitest直接在编辑器中运行单个测试用例，而不是使用CLI。
>
> 目前没有良好的工具对Web扩展提供良好的E2E测试支持，因此我暂时没有计划提供E2E测试解决方案。

- `pnpm prepare`：此脚本用于预提交挂钩，它将在提交代码之前运行linter和测试用例。

> [!TIP]
> 预提交挂钩基于[husky](https://typicode.github.io/husky)和[lint-staged](https://github.com/okonet/lint-staged)。
>
> **这意味着如果linter或测试用例失败，您将无法提交代码。**如果确实要提交代码，可以使用 `git commit --no-verify` 来绕过预提交挂钩，但这是不推荐的。

其他脚本：

- `pnpm update`：更新依赖项，或者您可以使用`(npx) taze major -I`来更新依赖项，提示：taze 不是此项目的依赖项，您可以通过 `npm i -g taze` 安装它。

## cTodo - 服务器

### 设计

### 开发

## cTodo - 文档

cTodo-docs采用[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0)许可发布。

cTodo-docs使用[vitepress](https://vitepress.dev)生成文档，并使用[slidev](https://sli.dev)生成幻灯片。

### 开发

请参阅<https://github.com/chillcicada/ctodo-docs#readme>

### 贡献

如果您想做出贡献，请确保在此之前阅读[原则](./principle)。
