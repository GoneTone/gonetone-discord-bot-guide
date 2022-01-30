# YouTube 頻道通知

[[toc]]

## 新增要接收通知的 YouTube 頻道 (群組)

### 指令

::: warning
- 只能在群組內執行此指令。
- 群組管理員才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/notify youtube addforguild [ytchannelurl] [channel] [?role]
```
:::
::: code-group-item 範例
```text:no-line-numbers
/notify youtube addforguild https://www.youtube.com/channel/UCiS882YPwZt1NfaM0gR0D9Q #youtube-gonetone-bot-dev-test @❄ 原神 
```
:::
::::

| 參數名稱         | 類型      | 說明                     | 必要  |
|--------------|---------|------------------------|:---:|
| ytchannelurl | String  | YouTube 頻道網址           |  V  |
| channel      | Channel | 設定用於發送通知的文字頻道          |  V  |
| role         | Role    | 要標註的身分組 (未選擇則不標註任何身分組) |     |

### 結果

![](../.vuepress/public/notify/youtube/addforguild.png)

## 新增要接收通知的 YouTube 頻道 (私密)

### 指令

::: tip
- 此指令只能私密機器人使用。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/notify youtube addforpm [ytchannelurl]
```
:::
::: code-group-item 範例
```text:no-line-numbers
/notify youtube addforpm https://www.youtube.com/channel/UCiS882YPwZt1NfaM0gR0D9Q
```
:::
::::

| 參數名稱         | 類型      | 說明                     | 必要  |
|--------------|---------|------------------------|:---:|
| ytchannelurl | String  | YouTube 頻道網址           |  V  |

## 移除正在接收通知的 YouTube 頻道

### 指令

::: warning
- 請注意指令輸入位置是否是您想要移除接收通知的群組或私密。
- 如果是在群組內輸入，只有群組管理員才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/notify youtube remove [ytchannelurl]
```
:::
::: code-group-item 範例
```text:no-line-numbers
/notify youtube remove https://www.youtube.com/channel/UCiS882YPwZt1NfaM0gR0D9Q
```
:::
::::

| 參數名稱         | 類型      | 說明                     | 必要  |
|--------------|---------|------------------------|:---:|
| ytchannelurl | String  | YouTube 頻道網址           |  V  |

### 結果

![](../.vuepress/public/notify/youtube/remove.png)

## 清除並取消接收所有 YouTube 頻道通知

### 指令

::: warning
- 請注意指令輸入位置是否是您想要取消接收所有通知的群組或私密。
- 如果是在群組內輸入，只有群組管理員才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/notify youtube clear
```
:::
::::

### 結果

![](../.vuepress/public/notify/youtube/clear.png)

## 查看目前接收通知的所有 YouTube 頻道和設定

### 指令

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/notify youtube query
```
:::
::::

### 結果

![](../.vuepress/public/notify/youtube/query.png)

## YouTube 頻道通知訊息 Demo

![](../.vuepress/public/notify/youtube/message_demo.png)
