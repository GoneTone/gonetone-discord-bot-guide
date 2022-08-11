# 音樂播放

[[toc]]

## 播放音樂

### 指令

::: tip
- 只能在群組內執行此指令。
- 必須先進入 `語音頻道` 或 `舞台頻道` 後才能執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/music play [query]
```
:::
::: code-group-item 範例 (YouTube 播放清單)
```text:no-line-numbers
/music play https://www.youtube.com/playlist?list=PLc1B6gJoAgwjAqgL6TWxsvOuvtlswXsiO
```
:::
::: code-group-item 範例 (YouTube 影片)
```text:no-line-numbers
/music play https://www.youtube.com/watch?v=9gXh8VOfQT4
```
:::
::: code-group-item 範例 (關鍵字搜尋)
```text:no-line-numbers
/music play 莉可麗絲 ED
```
:::
::::

| 參數名稱  | 類型     | 說明                                  | 必要  |
|-------|--------|-------------------------------------|:---:|
| query | String | 搜尋音樂或者輸入網址 (僅支援 YouTube、SoundCloud) |  V  |

### 結果

![](../.vuepress/public/music/music/play_1.png)

![](../.vuepress/public/music/music/play_2.png)

## 插入接下來要播放的音樂 (將音樂添加到隊列頂部，當前音樂播放完畢後接著播放)

### 指令

::: tip
- 只能在群組內執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/music playnext [query]
```
:::
::: code-group-item 範例 (YouTube 影片)
```text:no-line-numbers
/music playnext https://www.youtube.com/watch?v=9gXh8VOfQT4
```
:::
::: code-group-item 範例 (關鍵字搜尋)
```text:no-line-numbers
/music playnext 莉可麗絲 ED
```
:::
::::

| 參數名稱  | 類型     | 說明                                  | 必要  |
|-------|--------|-------------------------------------|:---:|
| query | String | 搜尋音樂或者輸入網址 (僅支援 YouTube、SoundCloud) |  V  |

### 結果

![](../.vuepress/public/music/music/playnext.png)

## 查看音樂播放隊列

### 指令

::: tip
- 只能在群組內執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/music queue
```
:::
::::

### 結果

![](../.vuepress/public/music/music/queue.png)

## 跳過當前播放的音樂

### 指令

::: tip
- 只能在群組內執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/music skip
```
:::
::::

### 結果

![](../.vuepress/public/music/music/skip.png)

## 從隊列中移除指定音樂

### 指令

::: tip
- 只能在群組內執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/music remove [trackid]
```
:::
::: code-group-item 範例
```text:no-line-numbers
/music remove 2
```
:::
::::

| 參數名稱    | 類型      | 說明       | 必要  |
|---------|---------|----------|:---:|
| trackid | Integer | 隊列中的音樂編號 |  V  |

### 結果

![](../.vuepress/public/music/music/remove.png)

## 查看目前正在播放的音樂資訊

### 指令

::: tip
- 只能在群組內執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/music nowplaying
```
:::
::::

### 結果

![](../.vuepress/public/music/music/nowplaying.png)

## 暫停當前播放的音樂

### 指令

::: tip
- 只能在群組內執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/music pause
```
:::
::::

### 結果

![](../.vuepress/public/music/music/pause.png)

## 恢復播放當前暫停的音樂

### 指令

::: tip
- 只能在群組內執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/music resume
```
:::
::::

### 結果

![](../.vuepress/public/music/music/resume.png)

## 清除所有等待播放的音樂

### 指令

::: tip
- 只能在群組內執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/music clear
```
:::
::::

### 結果

![](../.vuepress/public/music/music/clear.png)

## 停止播放音樂並清除播放隊列

### 指令

::: tip
- 只能在群組內執行此指令。
:::

:::: code-group
::: code-group-item 格式
```text:no-line-numbers
/music stop
```
:::
::::

### 結果

![](../.vuepress/public/music/music/stop.png)
