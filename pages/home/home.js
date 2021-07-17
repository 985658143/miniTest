import {
  getMultiData
} from "../../service/home.js"

Page({
  data: {
    banner: [],
    recommend: []
  },

  onLoad: function (options) {
    // 1.请求轮播图以及推荐数据
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
  externalClasses: ['swiperStyle']
})