// pages/rss/view.js
var WxParse = require('../wxParse/wxParse.js');
var htmlDecodeByRegExp = function (str) {
  var s = "";
  if (str.length == 0) return "";
  s = str.replace(/&amp/g, "&");
  s = s.replace(/&lt/g, "<");
  s = s.replace(/&gt/g, ">");
  s = s.replace(/&nbsp/g, " ");
  s = s.replace(/&#39/g, "\'");
  s = s.replace(/&quot/g, "\"");
  return s;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
  title:"标题",
  url:'https://yantuz.cn'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var items = wx.getStorageSync('SiteData');
    var item = items[options.id];
    //console.log(item);
    that.setData({title:item.title.text,url: item.link.text|| item.link.href})
    var html = item.content ? item.content.text : (item.summary ? item.summary.text : item.description.text);
    html = htmlDecodeByRegExp(html)
    WxParse.wxParse('article', 'html', html, that, 5);
  },
  copyUrl:function(){
    wx.setClipboardData({
      data: this.data.url,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
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