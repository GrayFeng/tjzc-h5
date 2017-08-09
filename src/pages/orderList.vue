<template>
  <div class="page-orderList">
    <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
        <li v-for="item in list" class="page-infinite-listitem">
          <div class="order-status">
            <span>{{item.status}}</span><span style="float: right">订单金额:&yen{{item.total}}</span>
          </div>
          <p class="order-info">订单号码: {{item.orderNo}}</p>
          <p class="order-info">上车地址: {{item.startAddress}}</p>
          <p class="order-info">送达地址: {{item.endAddress}}</p>
          <p class="order-info">用车时间: {{item.startTime}}</p>
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
      wrapperHeight: 0,
      pageNum:1,
      pageCount:5,
      orderStatus:['其他','等待处理','预约完成','订单完成','订单取消','订单终结']
    };
  },
  methods: {
    loadMore() {
      var $this = this;
      if($this.allLoaded){
        return;
      }
      console.info('loadMore')
      $this.loading = true;
      $this.getOrderList();

    },
    getOrderList(callback) {
      var $this = this;
      var param = {};
      param.pageNum = $this.pageNum;
      param.pageCount = $this.pageCount;
      $this.$http.post('/api/my/getOrderList.do',param
      ).then((response) => {
          $this.loading = false;
          var data = response.body;
          if(data && data.re && data.re.list){
            if(data.re.list.length > 0){
              this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
              for(var i =0 ; i < data.re.list.length;i++){
                var orderInfo = data.re.list[i];
                if(!orderInfo.total){
                  orderInfo.total = 0;
                }
                if(orderInfo.status){
                  orderInfo.status = $this.orderStatus[orderInfo.status];
                }else{
                  orderInfo.status = $this.orderStatus[1];
                }

                $this.list.push(orderInfo);
              }
            }
            console.info($this.list.length)
            if(data.re.list.length == $this.pageCount){
              $this.pageNum += 1;
            }else{
              $this.allLoaded = true;
            }
          }else if(data && data.status == '910'){
            $this.$router.push({path:'/login'});
          }else{
            $this.myToast(data.msg);
          }
        }).catch(function(response) {
          $this.loading = false;
          console.log(response)
        })
    }
  },

  mounted() {

//    this.getOrderList();
  }
  }
</script>
