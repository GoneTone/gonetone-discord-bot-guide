# 更新日誌

## v3.1.0 (2022/08/11)
### 新功能
- 播放音樂 (僅支援 [YouTube](https://www.youtube.com/)、[SoundCloud](https://soundcloud.com/))
- 機器人伺服器與 Discord 伺服器之間的延遲

### 移除功能
- 台灣停班停課查詢 (颱風假查詢)
- HiNet HiChannel 台灣電台

### BUG 修復
- 修復 `TypeError: Cannot read properties of null (reading 'displayName')` 錯誤
- 修復 `Error: fromMillis requires a numerical input, but received a object with value null` 錯誤
- 修復 `TypeError: Cannot read properties of null (reading 'indexOf')` 錯誤

### 調整
- 更新依賴項 [discord.js](https://www.npmjs.com/package/discord.js) 至版本 14.1.2
- 更新依賴項 [discord-api-types](https://www.npmjs.com/package/discord-api-types) 至版本 0.37.0
- 更新依賴項 [@gonetone/hoyowiki-api](https://www.npmjs.com/package/@gonetone/hoyowiki-api) 至版本 1.2.0
- 新增依賴項 [ping](https://www.npmjs.com/package/ping)
- 新增依賴項 [discord-player](https://www.npmjs.com/package/discord-player)
- 新增依賴項 [play-dl](https://www.npmjs.com/package/play-dl)
- 移除依賴項 [hinet-hichannel-taiwan-radio](https://www.npmjs.com/package/hinet-hichannel-taiwan-radio)

## v3.0.0 (2022/07/30)
### 新功能
- 專案重寫，v3 初始版本上線
