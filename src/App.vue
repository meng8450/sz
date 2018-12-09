<script>
import {get} from './until'

export default {
  async created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    const res = await get('/weapp/demo')
    console.log(123, res)
    console.log('小程序启动了')
  }
}
</script>

<style>
page{
  background-color: #EDEDED;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
*{
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
  font-family: Microsoft yahei;
}
</style>
