const app = getApp()
console.log(app.globalData.name)

Page({
  //-------------2.初始化数据-----------
  data: {
    index: "11",
    age: 18,
    students: [
      {id: 1, name: 'kobe', age: 30},
      {id: 2, name: 'james', age: 18},
      {id: 3, name: 'cc', age: 27},
      {id: 4, name: 'dd', age: 55},
    ],
    counter: 0,
  },
  
  //----------1.监听页面的生命周期函数-------------
  //当页面被加载出来
  onload() {
    console.log(onload);
  },
  //当页面显示出来时
  onshow() {
    console.log(onShow);
  },
  //当页面初次渲染完成时
  onready() {
    console.log(onReady);
  },
  //当页面被销毁时
  onUnload() {
    console.log(onUnload);
  },
  //当页面隐藏起来时
  onHide() {
    console.log(onHide);
  },
  //------------3.监听wxml里的事件----------
  BtnClick() {
    //错误做法
    // this.data.counter += 1
    this.setData({
      counter: this.data.counter + 1
    })
  },
  BtnClick2() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  //获取用户信息
  handleGetUserInfo(event) {
    console.log(event);
  },
  //---------4.其他事件-------------
  //监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  }
  
})