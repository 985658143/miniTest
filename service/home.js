import request from "./network.js"
import request2 from "./news.js"


export function getMultiData() {
  return request({
    url: '/home/multidata',
  })
}

// export function getGoodsData(type, page) {
//   return request({
//     url: '/home/data',
//     data: {
//       type,
//       page
//     }

//   })
// }
export function getNewsData(type, page, key) {
  return request2({
    data: {
      url: '/index',
      type,
      page,
      key: 'ffff5d2cfd9f1d10c5e9901d35a260a4'
    }
  })
}