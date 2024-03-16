import { defineConfig } from 'vitepress'
import { search as searchLocale_zh } from './zh'

export const shared = defineConfig({
  title: 'cTodo',

  lastUpdated: true,
  cleanUrls: true,

  sitemap: {
    hostname: 'https://ctodo.chillcicada.com',
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#90CAF9' }],
  ],

  themeConfig: {
    logo: { src: '/logo.png' },

    socialLinks: [{ icon: 'github', link: 'https://github.com/chillcicada/cTodo-docs' }],

    search: {
      provider: 'local',
      options: {
        locales: { ...searchLocale_zh },
      },
    },
  },

  srcExclude: ['**/slides/**'],
})
