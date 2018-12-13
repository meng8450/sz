<template>
  <div class="index">
    <i-card i-class="mycard" title="标题" extra="关注" :thumb="user">
      <view i-class="mycontent" slot="content">
        <image :src="picture1"/>
        札记内容札记内容札记内容札记内容札记内容札记内容札记内容札记内容札记内容札记内容札记内容札记内容札记内容札记内容札记内容札记内容札记内容札记内容札记内容
      </view>
      <view i-class="myfooter" slot="footer">
        <i-icon i-class="icon" type="like" size="24" color="#80848f" />
        <i-icon i-class="icon" type="message" size="24" color="#80848f" />
        <i-icon i-class="icon" type="send" size="24" color="#80848f" />
        <span class="date">发布时间</span>
      </view>
    </i-card>
    

    
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: require('../../../static/images/user.jpeg'),
      picture1: require('../../../static/images/first.jpeg')
    }
  }
}
</script>

<style>
.mycard{
  margin-top: 20px;
}
.mycontent image{
  width: 350rpx;
  margin: 0 auto;
}
.myfooter .icon{
  margin-left: 20rpx;
}
.myfooter .date{
  float: right;
  margin-left: 100rpx;
}
</style>

