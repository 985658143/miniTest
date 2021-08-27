<<<<<<< HEAD
<<<<<<< HEAD:pages/home/home.js
=======
// pages/category/category.js
>>>>>>> lzf:pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
=======
import {
  getMultiData,
  // getGoodsData
  getNewsData
} from "../../service/home.js"

const TOP_DISTANCE = 1000;
const types = ['shishang','youxi','top']

Page({
  data: {
    banner: [],
    recommend: [],
    titles: ['流行','新款','精选'],
    goods: {
      pop: {page: 0, list: []},
      new: {page: 0, list: []},
      sell: {page: 0, list: []}
    },
    news: {
      shishang: {page: 0, list: []},
      youxi: {page: 0, list: []},
      top: {page: 0, list: []}
    },
    currentType: 'shishang',
    showBackTop: false,
    isFixed: false,
    tabScrollTop: 0
  },

  onLoad: function (options) {
    // 1.请求轮播图以及推荐数据
    this._getMultidata()
    // 2.请求商品数据
    // this._getGoodsData('pop')
    // this._getGoodsData('new')
    // this._getGoodsData('sell')
    this._getNewsData('shishang')
    this._getNewsData('youxi')
    this._getNewsData('top')
    
  },
  //-------------网络请求函数------------------
_getMultidata() {
  getMultiData().then(res => {
    //取出轮播图和推荐的数据
    const banner = res.data.data.banner.list;
    const recommend = res.data.data.recommend.list
    // 将banner和recommend放到data中
    this.setData({
      banner: banner,
      recommend: recommend
    })
  })
},
// _getGoodsData(type) {
  
//   // 1.获取
//   const page = this.data.goods[type].page + 1;
//   // 2.发送网络请求
//   getGoodsData(type, page).then(res => {
//     console.log(res)
//     // 2.1取出数据
//     const list = res.data.data.list;
//     // 2.2将数据设置到对应type的list中
//     const oldList = this.data.goods[type].list;
//     oldList.push(...list)

//     // 2.3将数据设置到data中的goods里
//     const typeKey = `goods.${type}.list`;
//     const pageKey = `goods.${type}.page`;

//     this.setData({
//       [typeKey]: oldList,
//       [pageKey]: page 

//     })
//   })
// },
_getNewsData(type) {
  
  // 1.获取
  const page = this.data.news[type].page + 1;
  // 2.发送网络请求
  getNewsData(type,page).then(res => {
    console.log(res);
    // // 2.1取出数据
    const list = res.data.result.data;

    // // 2.2将数据设置到对应type的list中
    const oldList = this.data.news[type].list;
    oldList.push(...list)

    // // 2.3将数据设置到data中的goods里
    const typeKey = `news.${type}.list`;
    const pageKey = `news.${type}.page`;
    
    this.setData({
      [typeKey]: oldList,
      [pageKey]: page 
    })
  })
},
  //-------------事件监听函数------------------
  itemClick(event) {
    const index = event.detail.index;
    this.setData({
      currentType: types[index]
    })
  },
  onReachBottom() {
    // 上拉加载更多
    wx.showLoading({
      title: '加载中',
      mask: 'true',
      success: (res) => {
        this._getNewsData(this.data.currentType)
      }
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  onPageScroll(options) {
    // 1.取出scrollTop
    const scrollTop = options.scrollTop;
    // 2.修改showBackTop属性
    // 官方： 不要在滚动的函数回调中频繁的调用this.setData
    const flag = scrollTop >= TOP_DISTANCE;
    if(flag != this.data.showBackTop){
       this.setData ({
      showBackTop:  flag
    })
    }
    // 2.修改isFixed属性
    const flag2 = scrollTop >= this.data.tabScrollTop;
    if(flag2 != this.data.isFixed) {
      this.setData ({
        isFixed:  flag2
      })
    }
  },
  // 获取tabcontrol的准确定位值
  onShow() {
    setTimeout(() => {
      wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
        console.log(rect)
        this.data.tabScrollTop = rect.top
      }).exec()
    },1000)
  }
  
>>>>>>> lzf
})