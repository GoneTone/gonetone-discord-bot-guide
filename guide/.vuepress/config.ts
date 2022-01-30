import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

import sidebar from './sidebar';

export default defineUserConfig<DefaultThemeOptions>({
    // site config
    base: '/gonetone-discord-bot-guide/',
    lang: 'zh-TW',
    title: 'GoneTone Discord Bot 指南',
    description: 'GoneTone Discord Bot 指南',
    head: [
        ['meta', { charset: 'utf-8' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
        ['link', { rel: 'icon', href: 'https://api.reh.tw/images/gonetone/icos/favicon.ico' }],
        ['meta', { name: 'theme-color', content: '#22272e' }],
        ['meta', { name: 'twitter:card', content: 'summary' }],
        ['meta', { property: 'og:title', content: 'GoneTone Discord Bot 指南' }],
        ['meta', { property: 'og:description', content: 'GoneTone Discord Bot 指南' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'zh_TW' }],
        ['meta', { property: 'og:image', content: 'https://api.reh.tw/images/gonetone/character/character-head.png' }],
    ],

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://api.reh.tw/images/gonetone/character/character-head.png',
        sidebar,
        sidebarDepth: 3,
        repo: 'https://github.com/GoneTone/gonetone-discord-bot-guide',
        docsRepo: 'https://github.com/GoneTone/gonetone-discord-bot-guide',
        docsBranch: 'master',
        docsDir: 'guide',
        editLinks: true,
        editLinkPattern: ':repo/edit/:branch/:path',
        editLinkText: '在 GitHub 上編輯此頁面',
        lastUpdated: true,
        lastUpdatedText: '最後更新',
        contributors: true,
        contributorsText: '貢獻者',
        backToHome: '回到首頁',
        openInNewWindow: '在新視窗中開啟',
        toggleDarkMode: '切換暗模式',
        toggleSidebar: '切換導覽列',
        tip: '提示',
        warning: '注意',
        danger: '警告'
    },
})
