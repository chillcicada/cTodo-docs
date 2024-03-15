# Design specification

## cTodo (cTodo - client)

The cTodo - client is released under the [MIT](https://mit-license.org) License, you can get the source code from [GitHub](https://github.com/chillcicada/ctodo).

### Design

### Development

> [!IMPORTANT]
> The cTodo (client) requires [Node](https://nodejs.org) >= 18.0.0, and it uses [pnpm](https://pnpm.io) as the package manager. **Please ensure that you have installed and configured Node and pnpm before you start.**

Run `corepack enable` to ensure that pnpm is enabled. Then run `pnpm i` to download the dependencies. If you crash the error `pnpm: command not found`, you can install pnpm globally via `npm i -g pnpm` and reboot your ide or terminal, or check your environment variables. Also, it's recommended to use the [VSCode](https://code.visualstudio.com) as the editor.

Some scripts:

- `pnpm dev`: Start the development server for chrome, **this requires you have chrome installed**.
  - `pnpm dev:firefox`: Start the development server for firefox, **this requires you have firefox installed**.

> [!TIP]
> This project use [wxt](https://wxt.dev) as the development framework.
>
> The wxt haven't completely supported the HMR of content scripts, so you need to refresh the extension manually after you modify the content scripts.

- `pnpm build`: Build the extension for production, the output can be found at `<root>/.output/<target>`. The default target is `chrome-mv3`.
  - `pnpm build:firefox`: Build the extension for firefox, the output can be found at `<root>/.output/firefox-mv2`.
- `pnpm zip`: Zip the extension for distribution, the output can be found at `<root>/.output/<target>.zip`. The default target is `chrome-mv3`.
  - `pnpm zip:firefox`: Zip the extension for firefox, the output can be found at `<root>/.output/firefox-mv2.zip`.

<!-- pnpm submit/release -->

- `pnpm postinstall`: Run the postinstall script to generate the necessary files for development. This script will run before the above scripts executing or after the dependencies updating automatically.

<!-- - `pnpm compile`: Compile the source code to the output directory, this is used for testing the extension in the browser. -->

> [!TIP]
> You can load the unpacked extension from the output directory to test the extension in your browser, this requires you enable the developer mode in your browser. Still, i recommend to use the `pnpm dev` to develop the extension.

- `pnpm lint`: Run the linter to check the code style.
  - `pnpm lint:fix`: Run the linter to check the code style and fix the code style automatically.

> [!TIP]
> The linter and formatter are based on [eslint](https://eslint.org).

- `pnpm test`: Run the test cases.
  - `pnpm test:ui`: Run the test cases, this will provide a UI to view and interact with the tests.
  - `pnpm test:watch`: Run the test cases and watch the file changes.
  - `pnpm test:coverage`: Run the test cases and generate the coverage report.

If you want to test a single file, you can run `pnpm test -- path/to/test-file.{spec,test}.ts` or `pnpm test:watch -- path/to/test-file.{spec,test}.ts`.

> [!TIP]
> The test cases are based on [vitest](https://vitest.dev).
>
> It's very recommended to use the vscode extension vitest to directly run the single test cases in the editor instead of the cli.
>
> There has no good tool that has good e2e testing support for web extensions currently, ~~so i have no plan to make an e2e testing solution for now~~.

- `pnpm prepare`: This script is used for pre-commit hook, it will run the linter and test cases before you commit your code.

> [!TIP]
> The pre-commit hook is based on [husky](https://typicode.github.io/husky) and [lint-staged](https://github.com/okonet/lint-staged).
>
> **This means that you can't commit your code if the linter or test cases are failed.** If you really want to commit your code, you can use `git commit --no-verify` to bypass the pre-commit hook, which is badly not recommended.

Other scripts:

- `pnpm update`: Update the dependencies, or you can use `(npx) taze major -I` to update the dependencies, hint: taze is not a dependency of this project, you can install it via `npm i -g taze`.

## cTodo - server

### Design

### Development

## cTodo - docs

The cTodo-docs is released under the [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0) License.

The cTodo-docs uses the [vitepress](https://vitepress.dev) to generate the docs, and uses the [slidev](https://sli.dev) to generate the slides.

### Development

Please refer to <https://github.com/chillcicada/ctodo-docs#readme>

### Contribution

If you want to make a contribution, please ensure that you have read the [principle](./principle) before.
