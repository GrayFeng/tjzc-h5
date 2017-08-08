<template>
  <div class="page-orderList">
    <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
        <li v-for="item in list" class="page-infinite-listitem">
          <div class="order-status">
            <span>已完成</span><span style="float: right">订单金额:&yen88</span>
          </div>
          <p class="order-info">订单号码: 12333333</p>
          <p class="order-info">上车地址: 天津站</p>
          <p class="order-info">送达地址: 天津站</p>
          <p class="order-info">用车时间: 2017-08-10 10:00</p>
        </li>
      </ul>
      <p v-show="loading" class="page-infinite-loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        加载中...
      </p>
    </div>
  </div>
</template>
<style>
  .page-orderList{
    background-color: #f3f3f3;
    color: #999;
  }
  .page-orderList .page-infinite-desc{
    text-align: center;
    color: #666;
    padding-bottom: 5px;
    border-bottom: solid 1px #eee;
  }
  .page-orderList .order-status{
    position: relative;
    padding: 10px;
    border-bottom: solid 1px #ccc;
  }
  .page-orderList .order-info{
    padding: 5px 10px;
  }
  .page-orderList .page-infinite-list{
    margin: 0;
    padding: 0;
  }
  .page-orderList .page-infinite-listitem{
    background-color: #fff;
    list-style: none;
    margin-bottom: 10px;
  }
  .page-orderList .page-infinite-listitem:first-child{
    border-top: solid 1px #eee;
  }
  .page-orderList .page-infinite-wrapper{
    margin-top: -1px;
    overflow: scroll;
  }
  .page-orderList .page-infinite-loading{
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .page-orderList .page-infinite-loading div{
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }
</style>
<script type="text/babel">
export default {
  name: 'orderList',
  data () {
    return {
      title: '订单列表',
      list: [],
      loading: false,
      allLoaded: false,
      wrapperHeight: 0
    };
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  },

  mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    for (let i = 1; i <= 20; i++) {
      this.list.push(i);
    }
  }
}
</script>
