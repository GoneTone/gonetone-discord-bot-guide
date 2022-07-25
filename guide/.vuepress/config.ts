import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

import navbar from './navbar'
import sidebar from './sidebar'

const config = defineUserConfig<DefaultThemeOptions>({
    // site config
    base: '/gonetone-discord-bot-guide/',
    lang: 'zh-TW',
    title: 'GoneTone Discord Bot 指南',
    description: '由 旋風之音 GoneTone 所開發的 Discord 機器人。',
    head: [
        ['meta', { charset: 'utf-8' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
        ['meta', { name: 'theme-color', content: '#22272e' }],
        ['link', { rel: 'shortcut icon', href: 'https://api.reh.tw/images/gonetone/icos/favicon.ico' }],
        ['link', { rel: 'icon', href: 'https://api.reh.tw/images/gonetone/logos/icons/icon-16x16.png', sizes: '16x16' }],
        ['link', { rel: 'icon', href: 'https://api.reh.tw/images/gonetone/logos/icons/icon-32x32.png', sizes: '32x32' }],
        ['link', { rel: 'icon', href: 'https://api.reh.tw/images/gonetone/logos/icons/icon-64x64.png', sizes: '64x64' }],
        ['link', { rel: 'icon', href: 'https://api.reh.tw/images/gonetone/logos/icons/icon-64x64.png', sizes: '64x64' }],
        ['link', { rel: 'icon', href: 'https://api.reh.tw/images/gonetone/logos/icons/icon-128x128.png', sizes: '128x128' }],
        ['link', { rel: 'icon', href: 'https://api.reh.tw/images/gonetone/logos/icons/icon-192x192.png', sizes: '192x192' }],
        ['link', { rel: 'icon', href: 'https://api.reh.tw/images/gonetone/logos/icons/icon-256x256.png', sizes: '256x256' }],
        ['link', { rel: 'icon', href: 'https://api.reh.tw/images/gonetone/logos/icons/icon-512x512.png', sizes: '512x512' }],
        ['link', { rel: 'apple-touch-icon-precomposed', href: 'https://api.reh.tw/images/gonetone/logos/icons/icon-256x256.png' }],
        ['link', { rel: 'image_src', type: 'image/png', href: 'https://api.reh.tw/images/gonetone/logos/icons/icon-256x256.png' }],
        ['meta', { name: 'msapplication-TileImage', content: 'https://api.reh.tw/images/gonetone/logos/icons/icon-256x256.png' }]
    ],

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        domain: 'https://gonetone.github.io/gonetone-discord-bot-guide',
        logo: 'https://api.reh.tw/images/gonetone/character/character-head.png',
        navbar,
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

    // plugins config
    plugins: [
        [
            'vuepress-plugin-seo',
            {
                siteTitle: (_, $site) => $site.title,
                title: ($page, $site) => `${$page.title} | ${$site.title}`,
                description: ($page, $site) => $page.frontmatter.description || $site.description,
                author: (_) => '旋風之音 GoneTone',
                tags: $page => $page.frontmatter.tags,
                twitterCard: _ => 'summary',
                type: _ => 'website',
                url: (_, $site, path) => `${$site.themeConfig.domain || ''}${path}`,
                image: (_) => 'https://api.reh.tw/images/gonetone/character/character-head-256x256.png',
                publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
                modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
                customMeta: (add) => {
                    add('og:locale', 'zh_TW', 'property')
                    add('og:image:width', '256', 'property')
                    add('og:image:height', '256', 'property')
                }
            }
        ]
    ]
})

const { ALGOLIA_DOCSEARCH_API_KEY, ALGOLIA_DOCSEARCH_APP_ID, NODE_ENV } = process.env

if (NODE_ENV === 'production' && ALGOLIA_DOCSEARCH_APP_ID && ALGOLIA_DOCSEARCH_API_KEY) {
    config.plugins.push(
        [
            '@vuepress/plugin-docsearch',
            {
                appId: ALGOLIA_DOCSEARCH_APP_ID,
                apiKey: ALGOLIA_DOCSEARCH_API_KEY,
                indexName: 'gonetone-discord-bot-guide',
                placeholder: '搜尋指南',
                translations: {
                    button: {
                        buttonText: '搜尋',
                        buttonAriaLabel: '搜尋'
                    },
                    modal: {
                        searchBox: {
                            resetButtonTitle: '清除查詢',
                            resetButtonAriaLabel: '清除查詢',
                            cancelButtonText: '取消',
                            cancelButtonAriaLabel: '取消'
                        },
                        startScreen: {
                            recentSearchesTitle: '最近',
                            noRecentSearchesText: '没有最近的搜尋',
                            saveRecentSearchButtonTitle: '保存此搜尋',
                            removeRecentSearchButtonTitle: '從歷史記錄中刪除此搜尋',
                            favoriteSearchesTitle: '最愛',
                            removeFavoriteSearchButtonTitle: '從最愛中刪除此搜尋'
                        },
                        errorScreen: {
                            titleText: '無法取得結果',
                            helpText: '您可能需要檢查您的網路連線。'
                        },
                        footer: {
                            selectText: '選擇',
                            selectKeyAriaLabel: '回車鍵',
                            navigateText: '導航',
                            navigateUpKeyAriaLabel: '向上箭頭',
                            navigateDownKeyAriaLabel: '向下箭頭',
                            closeText: '關閉',
                            closeKeyAriaLabel: '退出鍵',
                            searchByText: 'Search by'
                        },
                        noResultsScreen: {
                            noResultsText: '沒有結果 for',
                            suggestedQueryText: '嘗試搜尋 for',
                            reportMissingResultsText: '此查詢應該返回結果嗎？',
                            reportMissingResultsLinkText: '讓我們知道。'
                        }
                    }
                }
            }
        ]
    )
}

export default config
