import type { SidebarConfig } from '@vuepress/theme-default'

const sidebar: SidebarConfig = {
  '/': [
    {
      text: '首頁',
      children: [
        '/',
        '/permissions.md',
        '/invite.md',
        '/help.md',
        '/about.md',
        '/faq.md',
        '/changelog.md'
      ]
    },
    {
      text: '機器人',
      children: [
        '/bot/',
        '/bot/sendmsg.md',
        '/bot/vip.md'
      ]
    },
    {
      text: '遊戲',
      children: [
        '/game/',
        '/game/minecraft.md',
        '/game/genshin.md'
      ]
    },
    {
      text: '群組',
      children: [
        '/guild/',
        '/guild/deletemessages.md',
        '/guild/member.md'
      ]
    },
    {
      text: '音樂',
      children: [
        '/music/',
        '/music/hichannel.md'
      ]
    },
    {
      text: '通知',
      children: [
        '/notify/',
        '/notify/youtube.md'
      ]
    },
    {
      text: '設定',
      children: [
        '/settings/',
        '/settings/guildlog.md',
        '/settings/memberban.md',
        '/settings/memberjoin.md',
        '/settings/memberleave.md',
        '/settings/rolereceive.md'
      ]
    },
    {
      text: '工具',
      children: [
        '/tools/',
        '/tools/translate.md'
      ]
    },
    {
      text: '其他',
      children: [
        '/others/',
        '/others/embedapp.md',
        '/others/stopworkingquery.md'
      ]
    }
  ]
}

export default sidebar
