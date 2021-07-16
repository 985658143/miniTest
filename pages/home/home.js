import request from '../../service/network'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  onLoad: function (options) {
    //------------1.原生的方式发送网络请求-----------
    this.get_data_origin()

    //------------2.使用封装的request发送网络请求
    request({
      url: 'https://api.qingcigame.com/web/lantern/pet',
    })

  },
  get_data_origin() {
    // 发送网络请求
    //1.发送最简单的get请求
    // wx.request({
    //   url: 'https://api.qingcigame.com/web/lantern/pet',
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
    // //2.get请求，但是携带参数
    // wx.request({
    //   url: 'https://api.qingcigame.com/web/lantern/pet/info?limit=0',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
    // //3.post 请求，并且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     name: 'ccc',
    //     age: 18
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   },
    //   fail: function (err) {
    //     console.log(err)
    //   }
    // })
  }
  
})