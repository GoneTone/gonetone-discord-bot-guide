# VIP 管理

[[toc]]

## 管理 VIP 群組

### 指令

::: warning
- 機器人擁有者才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/bot vip guild [guildid] [?level] [?expire]
```
:::
::: code-group-item 範例
```text:no-line-numbers
/bot vip guild 561945308532178969 2 12
```
:::
::::

| 參數名稱    | 類型     | 說明                     | 必要  |
|---------|--------|------------------------|:---:|
| guildid | String | 群組 ID                  |  V  |
| level   | Number | VIP 級別 (不填寫則為最高級別)     |     |
| expire  | Number | 目前時間幾個月後到期 (當前時間加上幾個月) |     |

## 查詢 VIP 群組

### 指令

::: warning
- 機器人擁有者才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/bot vip guildquery [guildid]
```
:::
::: code-group-item 範例
```text:no-line-numbers
/bot vip guildquery 561945308532178969
```
:::
::::

| 參數名稱    | 類型     | 說明    | 必要  |
|---------|--------|-------|:---:|
| guildid | String | 群組 ID |  V  |
