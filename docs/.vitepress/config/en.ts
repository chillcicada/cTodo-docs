import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en',
  description: 'A web extension.',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      // Todo: add download certainly link for chrome/edge and firefox
      { text: 'Download', link: 'https://github.com/chillcicada/cTodo/releases' },
    ],

    sidebar: [
      { text: 'Brief Introduction', link: '/introduction' },
      { text: 'Code Principle', link: '/principle' },
      { text: 'User Guide', link: '/guide' },
      { text: 'Design Specification', link: '/design' },
      { text: 'Development Roadmap', link: '/roadmap' },
    ],

    editLink: {
      pattern: 'https://github.com/chillcicada/cTodo-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'cTodo-docs released under the CC BY-NC-SA 4.0 License',
      copyright: `Copyright &copy 2024-${new Date().getFullYear()} <a href="https://github.com/chillcicada"><span>chillcicada</span></a>`,
    },
  },
})
