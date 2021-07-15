Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0,
    isShow: true
  },
  handleIncrement() {
    console.log('---------')
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabClick(event) {
    console.log(event)
  },
  incrementCpn(event) {
    // 目的：修改my-select中的数据
    const my_sel = this.selectComponent(".select")

    // 2.通过setData修改组件中的数据（不合理）
    // my_sel.setData({
    //   counter: this.data.counter += 20
    // })
    // 3.通过方法对数据进行修改
    my_sel.incrementCounter(10)
  },
  handleChangeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }

  
})