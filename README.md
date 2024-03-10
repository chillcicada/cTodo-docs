# cTodo Docs

This is the official documentation for cTodo, a web extension that helps users manage their and tasks.

## Usage

Please visit the docs at <https://ctodo.chillcicada.com>.

## Development

The repo requires [Node](https://nodejs.org) >= 18 and uses [pnpm](https://pnpm.io) as the package manager. Please ensure that you have node prepared, pnpm installed and enabled.

> [!TIP]
> It's recommended to use VScode as the IDE, install and enable the recommended extensions.

Run `corepack enabled` to ensure pnpm is enabled. Then run `pnpm i` to install the dependencies.

if you run the below command with `Error: Cannot find module 'pnpm'`, please run `npm i -g pnpm` to install pnpm globally then reboot the ide or terminal.

For dev server:

```bash
# dev server for docs
pnpm dev:docs

# dev server for slides, need to specify the file prodded to `slidev`
pnpm dev:slides -- docs/slides/index.md # for example
```

For production build:

```bash
pnpm build
# or build in chunks
pnpm build:docs # build docs
pnpm build:slides # build slides, this will invoke `slidev build` many times
# ensure that the docs is built before the slides
```

For preview the dist:

```bash
pnpm preview
```

More scripts can be found in the `package.json` file.

## Contributing

Please read the [principle](https://ctodo.chillcicada.com/principle#ctodo-docs) in the docs for more information.

## LICENSE

The **cTodo docs** is released under the [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0) License.
