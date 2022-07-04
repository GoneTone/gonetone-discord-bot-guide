# 群組日誌

[[toc]]

## 設定用來顯示群組日誌訊息的頻道

### 指令

::: warning
- 只能在群組內執行此指令。
- 成員需要 `檢視頻道`、`檢視審核紀錄` 權限才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/settings guildlog set [channel]
```
:::
::: code-group-item 範例
```text:no-line-numbers
/settings guildlog set #log2-gonetone-bot-dev-test
```
:::
::::

| 參數名稱    | 類型      | 說明                            | 必要  |
|---------|---------|-------------------------------|:---:|
| channel | Channel | 選擇文字頻道 (如未選擇頻道，則設定為當前輸入指令的頻道) |     |

### 結果

![](../.vuepress/public/settings/guildlog/set.png)

## 設定群組日誌訊息是否開啟

### 指令

::: warning
- 只能在群組內執行此指令。
- 成員需要 `檢視頻道`、`檢視審核紀錄` 權限才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/settings guildlog switch [boolean]
```
:::
::: code-group-item 範例
```text:no-line-numbers
/settings guildlog switch true
```
:::
::::

| 參數名稱    | 類型      | 說明     | 必要  |
|---------|---------|--------|:---:|
| boolean | Boolean | 訊息是否開啟 |  V  |

### 結果

![](../.vuepress/public/settings/guildlog/switch.png)

## 查看目前群組日誌的設定

### 指令

::: warning
- 只能在群組內執行此指令。
- 成員需要 `檢視頻道`、`檢視審核紀錄` 權限才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/settings guildlog query
```
:::
::::

### 結果

![](../.vuepress/public/settings/guildlog/query.png)
