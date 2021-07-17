// pages/detail/detail.js
Page({
  onLoad: (options) => {
    console.log(options)
  },
  //如果想要返回的时候传递数据
  onUnload() {
    // console.log("页面退出")
    //1.获取首页的页面对象 
    //getCurrentPages当前所有栈的页面
    const pages = getCurrentPages()
    const home = pages[pages.length - 2]
    // console.log(pages)
    //2.调用页面对象的setData
    home.setData({
      title: "呵呵呵"
    })
  },
  handleBack() {
    wx.navigateBack({
      delta: 1,
    })
  }
})