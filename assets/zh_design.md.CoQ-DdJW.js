import{_ as e,c as t,o,V as a}from"./chunks/framework.rRQg7MiC.js";const f=JSON.parse('{"title":"设计规范","description":"","frontmatter":{},"headers":[],"relativePath":"zh/design.md","filePath":"zh/design.md","lastUpdated":1711102867000}'),r={name:"zh/design.md"},c=a('<h1 id="design-specification" tabindex="-1">设计规范 <a class="header-anchor" href="#design-specification" aria-label="Permalink to &quot;设计规范 {#design-specification}&quot;">​</a></h1><blockquote><p>由 GPT-4 翻译。</p></blockquote><h2 id="ctodo-client" tabindex="-1">cTodo（cTodo - 客户端） <a class="header-anchor" href="#ctodo-client" aria-label="Permalink to &quot;cTodo（cTodo - 客户端） {#ctodo-client}&quot;">​</a></h2><p>cTodo - 客户端采用<a href="https://mit-license.org" target="_blank" rel="noreferrer">MIT</a>许可发布，您可以从<a href="https://github.com/chillcicada/ctodo" target="_blank" rel="noreferrer">GitHub</a>获取源代码。</p><h3 id="设计" tabindex="-1">设计 <a class="header-anchor" href="#设计" aria-label="Permalink to &quot;设计&quot;">​</a></h3><h3 id="开发" tabindex="-1">开发 <a class="header-anchor" href="#开发" aria-label="Permalink to &quot;开发&quot;">​</a></h3><div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p>cTodo（客户端）需要 <a href="https://nodejs.org" target="_blank" rel="noreferrer">Node</a> &gt;= 18.0.0，并且使用 <a href="https://pnpm.io" target="_blank" rel="noreferrer">pnpm</a> 作为包管理器。<strong>请确保在开始之前已安装和配置了 Node 和 pnpm。</strong></p></div><p>运行 <code>corepack enable</code> 确保启用了 pnpm。然后运行 <code>pnpm i</code> 下载依赖项。如果遇到错误 <code>pnpm: command not found</code>，您可以通过 <code>npm i -g pnpm</code> 全局安装 pnpm，并重新启动您的IDE或终端，或检查您的环境变量。同时，建议使用<a href="https://code.visualstudio.com" target="_blank" rel="noreferrer">VSCode</a>作为编辑器。</p><p>一些脚本：</p><ul><li><code>pnpm dev</code>：启动用于 Chrome 的开发服务器，<strong>这需要您已安装 Chrome</strong>。 <ul><li><code>pnpm dev:firefox</code>：启动用于 Firefox 的开发服务器，<strong>这需要您已安装 Firefox</strong>。</li></ul></li></ul><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>本项目使用<a href="https://wxt.dev" target="_blank" rel="noreferrer">wxt</a>作为开发框架。</p><p>wxt尚未完全支持内容脚本的HMR，因此在修改内容脚本后需要手动刷新扩展程序。</p></div><ul><li><code>pnpm build</code>：为生产环境构建扩展程序，输出位于 <code>&lt;root&gt;/.output/&lt;target&gt;</code>。默认目标为 <code>chrome-mv3</code>。 <ul><li><code>pnpm build:firefox</code>：为 Firefox 构建扩展程序，输出位于 <code>&lt;root&gt;/.output/firefox-mv2</code>。</li></ul></li><li><code>pnpm zip</code>：将扩展程序打包为分发文件，输出位于 <code>&lt;root&gt;/.output/&lt;target&gt;.zip</code>。默认目标为 <code>chrome-mv3</code>。 <ul><li><code>pnpm zip:firefox</code>：将扩展程序打包为 Firefox，输出位于 <code>&lt;root&gt;/.output/firefox-mv2.zip</code>。</li></ul></li></ul><ul><li><code>pnpm postinstall</code>：运行 postinstall 脚本以生成开发所需的必要文件。此脚本将在上述脚本执行之前或依赖项自动更新后执行。</li></ul><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>您可以从输出目录加载未打包的扩展程序以在浏览器中测试扩展程序，这需要您在浏览器中启用开发者模式。尽管如此，我建议使用 <code>pnpm dev</code> 来开发扩展程序。</p></div><ul><li><code>pnpm lint</code>：运行 linter 检查代码风格。 <ul><li><code>pnpm lint:fix</code>：运行 linter 检查代码风格并自动修复代码风格。</li></ul></li></ul><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>linter 和格式化程序基于<a href="https://eslint.org" target="_blank" rel="noreferrer">eslint</a>。</p></div><ul><li><code>pnpm test</code>：运行测试用例。 <ul><li><code>pnpm test:ui</code>：运行测试用例，这将提供一个UI来查看和与测试交互。</li><li><code>pnpm test:watch</code>：运行测试用例并监视文件更改。</li><li><code>pnpm test:coverage</code>：运行测试用例并生成覆盖率报告。</li></ul></li></ul><p>如果要测试单个文件，可以运行 <code>pnpm test -- path/to/test-file.{spec,test}.ts</code> 或 <code>pnpm test:watch -- path/to/test-file.{spec,test}.ts</code>。</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>测试用例基于<a href="https://vitest.dev" target="_blank" rel="noreferrer">vitest</a>。</p><p>强烈建议使用VSCode扩展vitest直接在编辑器中运行单个测试用例，而不是使用CLI。</p><p>目前没有良好的工具对Web扩展提供良好的E2E测试支持，因此我暂时没有计划提供E2E测试解决方案。</p></div><ul><li><code>pnpm prepare</code>：此脚本用于预提交挂钩，它将在提交代码之前运行linter和测试用例。</li></ul><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>预提交挂钩基于<a href="https://typicode.github.io/husky" target="_blank" rel="noreferrer">husky</a>和<a href="https://github.com/okonet/lint-staged" target="_blank" rel="noreferrer">lint-staged</a>。</p><p>**这意味着如果linter或测试用例失败，您将无法提交代码。**如果确实要提交代码，可以使用 <code>git commit --no-verify</code> 来绕过预提交挂钩，但这是不推荐的。</p></div><p>其他脚本：</p><ul><li><code>pnpm update</code>：更新依赖项，或者您可以使用<code>(npx) taze major -I</code>来更新依赖项，提示：taze 不是此项目的依赖项，您可以通过 <code>npm i -g taze</code> 安装它。</li></ul><h2 id="ctodo-server" tabindex="-1">cTodo - 服务器 <a class="header-anchor" href="#ctodo-server" aria-label="Permalink to &quot;cTodo - 服务器 {#ctodo-server}&quot;">​</a></h2><h3 id="设计-1" tabindex="-1">设计 <a class="header-anchor" href="#设计-1" aria-label="Permalink to &quot;设计&quot;">​</a></h3><h3 id="开发-1" tabindex="-1">开发 <a class="header-anchor" href="#开发-1" aria-label="Permalink to &quot;开发&quot;">​</a></h3><h2 id="ctodo-docs" tabindex="-1">cTodo - 文档 <a class="header-anchor" href="#ctodo-docs" aria-label="Permalink to &quot;cTodo - 文档 {#ctodo-docs}&quot;">​</a></h2><p>cTodo-docs采用<a href="https://creativecommons.org/licenses/by-nc-sa/4.0" target="_blank" rel="noreferrer">CC BY-NC-SA 4.0</a>许可发布。</p><p>cTodo-docs使用<a href="https://vitepress.dev" target="_blank" rel="noreferrer">vitepress</a>生成文档，并使用<a href="https://sli.dev" target="_blank" rel="noreferrer">slidev</a>生成幻灯片。</p><h3 id="开发-2" tabindex="-1">开发 <a class="header-anchor" href="#开发-2" aria-label="Permalink to &quot;开发&quot;">​</a></h3><p>请参阅<a href="https://github.com/chillcicada/ctodo-docs#readme" target="_blank" rel="noreferrer">https://github.com/chillcicada/ctodo-docs#readme</a></p><h2 id="contribution" tabindex="-1">贡献 <a class="header-anchor" href="#contribution" aria-label="Permalink to &quot;贡献 {#contribution}&quot;">​</a></h2><p>如果您想做出贡献，请确保在此之前阅读<a href="./principle">原则</a>。</p>',33),l=[c];function i(d,p,s,n,h,u){return o(),t("div",null,l)}const b=e(r,[["render",i]]);export{f as __pageData,b as default};
