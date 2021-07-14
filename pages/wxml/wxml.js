// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "你好小程序",
    firstname: "kobe",
    lastname: "bryant",
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 58,
    movie: ['星际穿越','盗梦空间','大话西游'],
    numbers: [
      [10,14,21,16],
      [20,18,29,13],
      [7,15,22,16],
      [17,4,21,15]
    ],
    letter: ['a','b','c'],
  },
  onLoad() {
    // 每秒改变时间
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  handleChange() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitch() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleAdd() {
    this.setData({
      score: this.data.score + 6
    })
  },
  

})