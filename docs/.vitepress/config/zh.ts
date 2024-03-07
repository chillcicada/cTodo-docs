import { type DefaultTheme, defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '一个 web 扩展。',

  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
    ],

    sidebar: [
      { text: '概述', link: '/zh/introduction' },
      { text: '代码规范', link: '/zh/principle' },
      { text: '用户手册', link: '/zh/guide' },
      { text: '设计说明书', link: '/zh/design' },
      { text: '开发路线图', link: '/zh/roadmap' },
    ],

    editLink: {
      pattern: 'https://github.com/chillcicada/cTodo-docs/edit/main/docs/:path',
      text: '在 GitHub 编辑此页面',
    },

    footer: {
      message: 'cTodo-docs 基于 CC BY-NC-SA 4.0 许可发布',
      copyright: `版权所有 &copy 2024-${new Date().getFullYear()} <a href="https://github.com/chillcicada"><span>寒蝉</span></a>`,
    },
  },
})

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  zh: {
    translations: {
      button: {
        buttonText: '搜索',
        buttonAriaLabel: '搜索',
      },
      modal: {
        displayDetails: '显示详情',
        resetButtonTitle: '清除查询条件',
        backButtonTitle: '返回上一级查询结果',
        noResultsText: '无法找到相关结果',
        footer: {
          selectText: '选择',
          selectKeyAriaLabel: '选择',
          navigateText: '切换',
          navigateUpKeyAriaLabel: '上一个',
          navigateDownKeyAriaLabel: '下一个',
          closeText: '关闭',
          closeKeyAriaLabel: '关闭',
        },
      },
    },
  },
}
