
var xml2json = require('./lib/xml2json.js');

App({
  globalData: {
  },

  getRss: function (url, fn) {
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var data = res.data.replace(/content:encoded/g, "content");
        //console.log(data);
        try {
          data = decodeURIComponent(data)
        }catch (err){}
        //data = htmlDecodeByRegExp(data)
        data = unescape(data.replace(/&#x/g, '%u').replace(/;/g, ''))
        //console.log(xml2json(data));
        var json; 
        try {
          json = xml2json(data).rss.channel.item.slice(0,10);    
        } catch(err){
          json = xml2json(data).feed.entry.slice(0,10);
        }
        //console.log(json);
        fn(json);
      }
    })
  },
  

});
