// pages/rss/list.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: 'https://bak.yantuz.cn:8000/view.php?v=' + Math.random() +"&url=",
    title:'岩兔站',
    items:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var thisdata = this;
    var sites = wx.getStorageSync("Sites")
    var appInstance = getApp()
    var url = this.data.url;
    //console.log(options);
    if (options.tid >= 0){
      //console.log(options.tid)
      thisdata.setData({ title: sites[options.tid].name })
    }
    if (options.url && options.url != ""){
      url += options.url;
    }else{
      url+="https://yantuz.cn/atom.xml"
    }
//console.log(url);
    appInstance.getRss(url,function(json){
      wx.setStorage({
        key: 'SiteData',
        data: json,
      })
      thisdata.setData({ items: json });
      
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