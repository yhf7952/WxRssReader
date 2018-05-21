// pages/rssManage/export.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    opml:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var storeSite = wx.getStorageSync("Sites")
    var sites = '<?xml version="1.0" encoding="ISO-8859-1"?><opml version="2.0">\n';
    sites += '<head><title>岩兔RSS阅读器</title></head>\n'
    sites += '<body>\n'
    if(storeSite != ""){
      storeSite.forEach(function(val,key){
        sites += '<outline type="rss" text="'+val.name+'" xmlUrl="'+val.url+'"/>\n'
      })
    }
    sites += '</body>'
    this.setData({opml:sites})
  },

  copyOpml:function(){
    wx.setClipboardData({
      data: this.data.opml,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },

  importOpml:function(e){
    var opml = e.detail.value.opml;
    var xml2json = require('../../lib/xml2json.js');

    var json = xml2json(opml);
    //console.log(json);

    if(!json.opml){
      wx.showToast({
        title: '请输入OPML格式',
        icon: 'none',
        duration: 2000
      })
    }else if(!json.opml.body){
      wx.showToast({
        title: '缺少body',
        icon: 'none',
        duration: 2000
      })
    } else if (!json.opml.body.outline){
      wx.showToast({
        title: 'body内无outline',
        icon: 'none',
        duration: 2000
      })
    } else{
      var lines = json.opml.body.outline;
      var sites = []
      //console.log(lines);
      lines.forEach(function(val,key){
        if (val.text && val.xmlUrl){
          sites.push({name:val.text,url:val.xmlUrl})
        }
      })
      wx.setStorage({
        key: 'Sites',
        data: sites,
        success:function () {
          wx.showToast({
            title: '导入成功'+ sites.length + "条",
            icon: 'success',
            duration: 2000
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})