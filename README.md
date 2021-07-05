## 微信Rss阅读器

WxRssReader-用微信小程序开发的Rss阅读器，可手工添加或批量导入订阅源，方便微信随时阅读订阅内容。

## 小程序码

![](https://bak.yantuz.cn:8000/weiboUploader-Watermark/upload/2021/07/60e2b1c339614.jpg)

## 界面截图

![](https://ws3.sinaimg.cn/large/007452UMly1frj6kjeu9jj30dw0otdke.jpg)

## 使用说明

1. 手工添加订阅列表

进入“管理订阅列表”-“添加订阅源”分别输入Feed地址和名称即可，如：

* __Feed__:https://yantuz.cn/atom.xml
* __名称__:岩兔站

2. 批量导入Feed，形式必须为标准OPML格式，如：

```xml
<?xml version="1.0" encoding="ISO-8859-1"?><opml version="2.0">
<head><title>岩兔RSS阅读器</title></head>
<body>
<outline type="rss" text="岩兔站" xmlUrl="https://yantuz.cn/atom.xml"/>
</body>
```

3. 查阅文章

根据添加的订阅源，点击时获取最新的10篇文章

|文章列表|阅读文章|
|---|---
|![](https://bak.yantuz.cn:8000/weiboUploader-Watermark/upload/2021/07/60e2b45f0ed74.png)|![](https://bak.yantuz.cn:8000/weiboUploader-Watermark/upload/2021/07/60e2b45f1a220.png)

## 关注我

* 博客：[岩兔站](https://yantuz.cn "岩兔站-关注互联网折腾服务器分享码农的日常")
* 微博：[新浪微博](https://weibo.com/yztop "岩兔站")
