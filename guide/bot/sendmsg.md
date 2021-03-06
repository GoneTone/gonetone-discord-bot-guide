# 機器人發送訊息

[[toc]]

## 發送訊息給所有群組的擁有者

### 指令

::: warning
- 機器人擁有者才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/bot sendmsg toallguildowner
```
:::
::::

![](../.vuepress/public/bot/sendmsg/toallguildowner_modal.png)

## 發送訊息至指定的頻道

### 指令

::: warning
- 機器人擁有者才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/bot sendmsg tochannel [?channelid]
```
:::
::: code-group-item 範例
```text:no-line-numbers
/bot sendmsg tochannel 873840673407795210
```
:::
::::

| 參數名稱      | 類型     | 說明             | 必要  |
|-----------|--------|----------------|:---:|
| channelid | String | 頻道 ID          |     |

![](../.vuepress/public/bot/sendmsg/tochannel_modal.png)

## 發送訊息至指定的使用者

### 指令

::: warning
- 機器人擁有者才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/bot sendmsg touser [?userid]
```
:::
::: code-group-item 範例
```text:no-line-numbers
/bot sendmsg touser 297957463649550339
```
:::
::::

| 參數名稱    | 類型     | 說明             | 必要  |
|---------|--------|----------------|:---:|
| userid  | String | 使用者 ID         |     |

![](../.vuepress/public/bot/sendmsg/touser_modal.png)
