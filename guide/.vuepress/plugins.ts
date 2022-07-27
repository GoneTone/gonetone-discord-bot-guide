import seo from 'vuepress-plugin-seo'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import type { PluginConfig } from 'vuepress'

const { ALGOLIA_DOCSEARCH_API_KEY, ALGOLIA_DOCSEARCH_APP_ID, NODE_ENV } = process.env

const plugins: PluginConfig = [
    seo({
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
