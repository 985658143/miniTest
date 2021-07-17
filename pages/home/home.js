Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "哈哈哈"
  },
  handleDetail() {
    //所有open-type里的都有对应的api
    wx.navigateTo({
      url: '/pages/detail/detail?title=你好啊',
    })
  }
 
})