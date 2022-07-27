import { seoPlugin } from 'vuepress-plugin-seo2'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import type { PluginConfig } from 'vuepress'

const { ALGOLIA_DOCSEARCH_API_KEY, ALGOLIA_DOCSEARCH_APP_ID, NODE_ENV } = process.env

const plugins: PluginConfig = [
    seoPlugin({
        hostname: 'https://gonetone.github.io',
        author: {
            name: '旋風之音 GoneTone',
            url: 'https://blog.reh.tw'
        },
        fallBackImage: 'https://api.reh.tw/images/gonetone/character/character-head-256x256.png',
        twitterID: 'TPGoneTone',
        ogp: (ogp, page, app) => {
            return {
                'og:description': ogp['og:description'] || app.siteData.description,
                'og:image': 'https://api.reh.tw/images/gonetone/character/character-head-256x256.png',
                'og:locale': app.siteData.lang.replace('-', '_'),
                'og:locale:alternate': ogp['og:locale:alternate'],
                'og:site_name': app.siteData.title,
                'og:title': `${page.title} | ${app.siteData.title}`,
                'og:type': ogp['og:type'],
                'og:url': ogp['og:url'],
                'og:image:width': '256',
                'og:image:height': '256',
                'twitter:card': 'summary'
            }
        }
    })
]

if (NODE_ENV === 'production' && ALGOLIA_DOCSEARCH_APP_ID && ALGOLIA_DOCSEARCH_API_KEY) {
    plugins.push(docsearchPlugin({
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
    }))
}

export default plugins
