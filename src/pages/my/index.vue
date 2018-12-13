<template>
  <div class="my">
    <div class="head">
      <i-icon i-class="setup" type="setup" size="28" color="#ffffff" />
      <i-icon i-class="message" type="message" size="28" color="#ffffff" />
      <div class="userinfo">
        <!-- <image :src="avatar"></image> -->
        <i-avatar :src="user.avatarUrl" size="large"></i-avatar>
        <button v-if="!user" open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">点击登录</button>
        <span>{{user.nickName}}</span>
      </div>
      <div class="excerpt">
        <!-- <button class="write"><image :src="write" />制作札记</button>
        <button class="note"><image :src="note" />我的札记</button> -->
        <i-button i-class="brush" shape="circle" :click="writeClick"><i-icon type="brush" size="28" color="#80848f" />制作札记</i-button>
        <i-button i-class="activity" shape="circle" :click="handleClick"><i-icon type="activity" size="28" color="#80848f" />我的札记</i-button>
      </div>
    </div>
    <i-cell-group>
    <i-cell title="我的喜欢" is-link url="#"></i-cell>
    <i-cell title="我的关注" is-link url="#"></i-cell>
    </i-cell-group>
  </div>
</template>

<script>
import qcloud from 'wafer2-client-sdk'
import config from '@/config.js'
import {showSuccess} from '@/until.js'
export default {
  data: {
    avatarUrl: require('../../../static/images/unlogin.png'),
    user: ''
  },
  methods: {
    doLogin: function (e) {
      qcloud.setLoginUrl(config.loginUrl)
      var _this = this // 在success回调里面 this.user指向的已经不是data里的user了
      qcloud.login({
        success: function (userInfo) {
          console.log('登录成功', userInfo)

          showSuccess('登陆成功') // 显示登录成功提示图标
          wx.setStorageSync('userinfo', userInfo)
          _this.user = wx.getStorageSync('userinfo')
          _this.avatarUrl = _this.user.avatarUrl
        },
        fail: function (err) {
          console.log('登录失败', err)
        }
      })
    }
  },
  created () {
    this.user = wx.getStorageSync('userinfo')
    if (this.user) {
      this.avatarUrl = this.user.avatarUrl
      this.nickName = this.user.nickName
    }
    console.log(321, this.user)
  }
}
</script>

<style>
.my {
  width: 100%;
  /* height: 350rpx;
  background-image: #99CCFF; */
}
.my .setup{
  width: 25rpx;
  height: 25rpx;
  float: left;
  margin-left: 20rpx;
  margin-top: 20rpx;
}
.my .message{
  width: 25rpx;
  height: 25rpx;
  float: right;
  margin-right: 50rpx;
  margin-top: 20rpx;
}
.head{
  background-color: #99CCCC;
  height: 450rpx;
}
.userinfo{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120rpx;
}
.userinfo button{
  width:200rpx;
  height:50rpx;
  font-size:24rpx;
}
/* .user image{
  width: 70px;
  height: 70px;
  border-radius: 100%;
} */
.user span{
  font-size: 16px;
  color: #333333;
  margin-top: 10rpx;
}
.excerpt{
  margin-top:20rpx;
}
.excerpt .brush{
  float: left;
  margin-left: 130rpx;
}
.excerpt .activity{
  float: left;
}
/* .excerpt button{
  width: 100px;
  height: 40px;
  border-radius: 50%;
}
.excerpt .write{
  background-color: #000;
  filter: alpha(opacity=50);
  opacity: 0.5;
  color: #fff;
  font-size: 12px;
  float: left;
  margin-left: 50px;
}
.excerpt image{
  width: 20px;
  height: 20px;
  margin-top: 8px;
}
.excerpt .note{
  background-color: #000;
  filter: alpha(opacity=50);
  opacity: 0.5;
  color: #fff;
  font-size: 12px;
  float: right;
  margin-right: 50px;
  border-radius: 30%;
} */
</style>

