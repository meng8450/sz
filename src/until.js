// 工具函数

import config from './config'

export function get (url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      success: function (res) {
        if (res.data.code === 0) {
          // eslint-disable-next-line no-undef
          resolve(res.data.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}
