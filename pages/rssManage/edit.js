// pages/rssManage/edit.js
const Zan = require('../../dist/index');

Page(Object.assign({}, Zan.Toast, {

  /**
   * 页面的初始数据
   */
  data: {
    isEdit : false,
    title: "新增站点",
    fields: {
      url: {
        title: 'Feed',
        placeholder: '请输入Feed地址：https://yantuz.cn/atom.xml',
        value:"",
        name:"url"
      },
      name: {
        title: '名称',
        placeholder: '页面名称（不填将自动获取）',
        value:"",
        name:"name"
      }
    },
    url: "",
    name: "",
    sites: wx.getStorageSync("Sites"),
    id:-1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    if (id) {
      var site = wx.getStorageSync("Sites")[id];
      var field = that.data.fields;
      field.url.value = site.url;
      field.name.value = site.name;
      that.setData({ isEdit: true, title: "修改站点", fields: field,id:id});
    }
  },
  deleteSite:function(){
    var id = this.data.id;
    var site = wx.getStorageSync("Sites");
    site.splice(id,1);
    wx.setStorage({
      key: 'Sites',
      data: site,
    })
    this.showZanToast({
      title: '已删除',
      icon: 'success'
    }, 2000);

    wx.navigateTo({
      url: '/pages/rssManage/index'
    })
  },
  
  saveSubmit:function(e){
    var url = e.detail.value.url;
    var name = e.detail.value.name;
    var site = wx.getStorageSync("Sites");
    var id = this.data.id;

    if(url == null || url == "" || !url.startsWith("http")){
        this.showZanToast({
          title: '非法URL',
          icon: 'close'
        }, 2000);
    }else if(name == null || name == ""){
      this.showZanToast({
        title: '请输入名称',
        icon: 'close'
      }, 2000); 
    }else{

      //修改数据
      if(id>=0){
        site[id] = { name: name, url: url };
        wx.setStorage({
          key: 'Sites',
          data: site,
        })
      }else{
        //先删除数组中的重复项
        if(site != ""){
          site.forEach(function (val, index) {
            if(val.url == url){
              site.splice(index,1);
            }
            //console.log(val,index);
          });
        }else{
          site = [];
        }

        site.push({ name: name, url: url });      
        wx.setStorage({
          key: 'Sites',
          data: site,
        })
        this.showZanToast({
          title: '添加成功',
          icon: 'success'
        }, 2000); 
        
      }

      //跳转至站点列表页
      wx.redirectTo({
        url: '/pages/rssManage/index'
      })
    }
  }
}))