# 管理員身分組

[[toc]]

## 設定管理員身分組

### 指令

::: warning
- 只能在群組內執行此指令。
- 群組擁有者才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/settings guildadminrole set [role]
```
:::
::: code-group-item 範例
```text:no-line-numbers
/settings guildadminrole set @𓇻 𝑳𝒆𝒗𝒆𝒍 𝟔
```
:::
::::

| 參數名稱 | 類型   | 說明       | 必要  |
|------|------|----------|:---:|
| role | Role | 選擇管理員身分組 |  V  |

### 結果

![](../.vuepress/public/settings/guildadminrole/set.png)

## 清除設定的管理員身分組

### 指令

::: warning
- 只能在群組內執行此指令。
- 群組擁有者才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/settings guildadminrole clear
```
:::
::::

### 結果

![](../.vuepress/public/settings/guildadminrole/clear.png)

## 查看目前設定的管理員身分組

### 指令

::: warning
- 只能在群組內執行此指令。
- 群組擁有者才可執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/settings guildadminrole query
```
:::
::::

### 結果

![](../.vuepress/public/settings/guildadminrole/query.png)
