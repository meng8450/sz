<template>
  <div class="book">
    <i-input type="text" right mode="wrapped" placeholder="搜索书籍">{{value}}</i-input>
    <carousel/>
    <div class="hottag">
      <p>热门标签</p>
      <div class="taggroup">
      <i-tag i-class="tag" class="i-tags" name="心理">心理</i-tag>
      <i-tag i-class="tag" class="i-tags" name="诗歌">诗歌</i-tag>
      <i-tag i-class="tag" class="i-tags" name="古代">古代</i-tag>
      <i-tag i-class="tag" class="i-tags" name="散文">散文</i-tag>
      <i-tag i-class="tag" class="i-tags" name="感悟">感悟</i-tag>
      <i-tag i-class="tag" class="i-tags" name="爱情">爱情</i-tag>
      <i-tag i-class="tag" class="i-tags" name="历史">历史</i-tag>
      </div>
    </div>
    <div class="books">
      <p>精选书籍</p>
      <BookList :key='book.id' v-for='book in books' :book='book'></BookList>
      <!-- <ul class="booklist">
        <li v-for="(book,index)in bookImg" :key="index">
          <a><img :src="book.src"></a>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import carousel from '@/components/carousel'
import BookList from '@/components/BookList'
import {get} from '@/until'
export default{
  components: {carousel, BookList},
  data () {
    return {
      value: '',
      books: []
    }
  },
  methods: {
    async getList () {
      const books = await get('/weapp/booklist')
      this.books = books.data.list
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style>
.book .vary{
  width: 350rpx;
  margin-top:20rpx;
  margin:0 auto;
  font-size: 16rpx;
  text-align: center;
}
.hottag{
  margin-top: 20rpx;
}
.hottag .taggroup{
  height:80rpx;
  margin-top: 5rpx;
  background-color: #fff;
}
.hottag .tag{
  margin-top:20rpx;
  margin-left: 25rpx;
  outline: none;
  background-color:#99ccff;
}
.hottag p{
  margin-left: 20rpx;
  font-size: 28rpx;
  font-family: Microsoft yahei;
}
.books{
  margin-top:10rpx;
}
.books p{
  margin-left: 20rpx;
  font-size: 28rpx;
  font-family: Microsoft yahei;
}
</style>

