import {newsURL} from "./config.js"

export default function (options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: newsURL,
      method: options.method || "get",
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}


