import { defineClientAppEnhance } from '@vuepress/client'

import {
  DiscordButton,
  DiscordButtons,
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
  DiscordInteraction,
  DiscordMarkdown,
  DiscordMention,
  DiscordMessage,
  DiscordMessages,
  DiscordReaction,
  DiscordReactions,
  install as DiscordMessageComponents
} from '@discord-message-components/vue'
import '@discord-message-components/vue/dist/style.css'

export default defineClientAppEnhance(({ app }) => {
  app.use(DiscordMessageComponents, {
    avatars: {
      bot: 'https://api.reh.tw/images/gonetone/character/character-head.png'
    },
    profiles: {
      user: {
        author: 'User',
        avatar: 'blue'
      },
      bot: {
        author: 'GoneTone Discord Bot v3',
        avatar: 'bot',
        bot: true
      }
    }
  })

  app.component('DiscordButton', DiscordButton)
  app.component('DiscordButtons', DiscordButtons)
  app.component('DiscordEmbed', DiscordEmbed)
  app.component('DiscordEmbedField', DiscordEmbedField)
  app.component('DiscordEmbedFields', DiscordEmbedFields)
  app.component('DiscordInteraction', DiscordInteraction)
  app.component('DiscordMarkdown', DiscordMarkdown)
  app.component('DiscordMention', DiscordMention)
  app.component('DiscordMessage', DiscordMessage)
  app.component('DiscordMessages', DiscordMessages)
  app.component('DiscordReaction', DiscordReaction)
  app.component('DiscordReactions', DiscordReactions)
})
