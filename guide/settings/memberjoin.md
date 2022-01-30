# 成員加入歡迎訊息

[[toc]]

## 設定用來顯示成員加入歡迎訊息的群組頻道

### 指令

::: warning
- 只能在群組內執行此指令。
- 群組管理員才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/settings memberjoin setchannel [channel]
```
:::
::: code-group-item 範例
```text:no-line-numbers
/settings memberjoin setchannel #joinleave-gonetone-bot-dev-test
```
:::
::::

| 參數名稱    | 類型      | 說明                            | 必要  |
|---------|---------|-------------------------------|:---:|
| channel | Channel | 選擇文字頻道 (如未選擇頻道，則設定為當前輸入指令的頻道) |     |

### 結果

![](../.vuepress/public/settings/memberjoin/setchannel.png)

## 設定成員加入歡迎訊息

### 指令

::: warning
- 只能在群組內執行此指令。
- 群組管理員才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/settings memberjoin setmessage [for] [message]
```
:::
::: code-group-item 範例 (群組)
```text:no-line-numbers
/settings memberjoin setmessage guild \\\\ 歡迎 {member} //
```
:::
::: code-group-item 範例 (私密)
```text:no-line-numbers
/settings memberjoin setmessage pm 哈嘍 {member}！\n歡迎您加入 「{guild}」 群組OwO
```
:::
::::

| 參數名稱    | 類型     | 說明                                                                     | 必要  |
|---------|--------|------------------------------------------------------------------------|:---:|
| for     | String | 選擇要設定群組或私密的成員加入歡迎訊息                                                    |  V  |
| message | String | 成員加入歡迎訊息<br><br>可插入符號：<br>`\n` 換行<br>`{member}` 成員名稱<br>`{guild}` 群組名稱 |  V  |

### 結果

#### 群組

![](../.vuepress/public/settings/memberjoin/setmessage_guild.png)

#### 私密

![](../.vuepress/public/settings/memberjoin/setmessage_pm.png)

## 設定群組規定網址

### 指令

::: warning
- 只能在群組內執行此指令。
- 群組管理員才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/settings memberjoin setrulesurl [url]
```
:::
::: code-group-item 範例
```text:no-line-numbers
/settings memberjoin setrulesurl https://blog.reh.tw/discord-group-rules
```
:::
::::

| 參數名稱 | 類型     | 說明     | 必要  |
|------|--------|--------|:---:|
| url  | String | 群組規定網址 |  V  |

### 結果

![](../.vuepress/public/settings/memberjoin/setrulesurl.png)

## 設定成員加入歡迎訊息是否開啟

### 指令

::: warning
- 只能在群組內執行此指令。
- 群組管理員才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/settings memberjoin switch [for] [boolean]
```
:::
::: code-group-item 範例 (群組)
```text:no-line-numbers
/settings memberjoin switch guild true
```
:::
::: code-group-item 範例 (私密)
```text:no-line-numbers
/settings memberjoin switch pm true
```
:::
::: code-group-item 範例 (所有)
```text:no-line-numbers
/settings memberjoin switch all true
```
:::
::::

| 參數名稱    | 類型      | 說明                         | 必要  |
|---------|---------|----------------------------|:---:|
| for     | String  | 選擇要設定群組、私密或所有的成員加入歡迎訊息是否開啟 |  V  |
| boolean | Boolean | 成員加入歡迎訊息是否開啟               |  V  |

### 結果

#### 群組

![](../.vuepress/public/settings/memberjoin/switch_guild.png)

#### 私密

![](../.vuepress/public/settings/memberjoin/switch_pm.png)

#### 所有

![](../.vuepress/public/settings/memberjoin/switch_all.png)

## 清除群組規定網址

### 指令

::: warning
- 只能在群組內執行此指令。
- 群組管理員才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/settings memberjoin clearrulesurl
```
:::
::::

### 結果

![](../.vuepress/public/settings/memberjoin/clearrulesurl.png)

## 清除成員加入歡迎訊息的所有設定

### 指令

::: warning
- 只能在群組內執行此指令。
- 群組管理員才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/settings memberjoin clear
```
:::
::::

### 結果

![](../.vuepress/public/settings/memberjoin/clear.png)

## 查看目前成員加入歡迎訊息的設定

### 指令

::: warning
- 只能在群組內執行此指令。
- 群組管理員才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/settings memberjoin query
```
:::
::::

### 結果

![](../.vuepress/public/settings/memberjoin/query.png)

## 成員加入歡迎訊息 Demo

#### 群組

![](../.vuepress/public/settings/memberjoin/message_demo_guild.png)

#### 私密

![](../.vuepress/public/settings/memberjoin/message_demo_pm.png)
