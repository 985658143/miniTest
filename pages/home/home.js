Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  showToast() {
    wx.showToast({
      title: '加载中ing',
      duration: 1500,
      icon: 'loading',
      // image: 'image',
      mask: true,//蒙版
      success: (res) => {
        console.log('展示弹窗成功')
      },
      fail: (res) => {
        console.log('展示弹窗失败')
      },
      complete: (res) => {
        console.log('完成函数的调用')
      },
    })
  },
  showModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      // showCancel: false,//关闭取消按钮
      cancelText: '退出',//取消按钮文本修改
      cancelColor: 'red',//取消按钮颜色修改
      success: function (res) {
        console.log(res)
        if(res.cancel) {
          console.log('用户点击了取消按钮')
        }
        if(res.confirm) {
          console.log('用户点击了确定按钮')
        }
      }
    })
  },
  showLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true
    })

    setTimeout(()=>{
      //必须手动hideLoading才会让loading消失
      wx.hideLoading()
    },1000)
  },
  showAciton() {
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'red',
      success: function (res) {
        console.log(res)
      }
    })
  },
/**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    return {
      title: '裤裤笔记',//转发给别人的标题
      path: 'pages/about/about',//转发给别人的页面路径
      imageUrl: ''//转发分享的图片:可以是本地图片也可以是网络图片 默认是把页面截图作为图片

    }

  }
  
})
