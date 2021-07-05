// pages/rss/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:
      [{
      title: '订阅列表',
      content: [
        {
          name: '岩兔站',
          path: '/pages/rss/list'
        }]
    }, {
      title: '设置',
      content: [
        {
          name: '管理订阅列表',
          path: '/pages/rssManage/index'
        },{
          name: '导入/导出',
          path: '/pages/rssManage/export'
        }, {
          name: '关于',
          path: '/pages/about/index'
        }]
    },
    // {
    //   title: '示例',
    //   content: [
    //     {
    //       name: '示例',
    //       path: '/pages/dashboard/index'
    //     }]
    // }
    ]
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var newData = this.data.list;
    var site = wx.getStorageSync("Sites")

    if(site == ""){
      site = new Array()
      site[0] = { name: "岩兔站", url: "https://yantuz.cn/atom.xml"};
      wx.setStorageSync('Sites', site)
    }

    if (site && site != "") {
      //console.log(site);
      var sites = []
      site.forEach(function (val, key) {
        sites.push({ name: val.name, path: "/pages/rss/list?url=" + encodeURIComponent(val.url) + "&tid=" + key })
      })
      if (sites != "") {
        newData[0].content = sites
        this.setData({ list: newData })
      }
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
    this.onLoad()
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