<template>
  <div class="page-visa">
    <mt-swipe :auto="4000">
      <mt-swipe-item class="slide1">
        <img src="../assets/banner/banner-02.jpg">
      </mt-swipe-item>
    </mt-swipe>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="4">
        <ul class="tours-box">
          <li class="tours-item" v-for="item in hotCountry">
            <a href="#">
              <img :src="item.url"/>
            </a>
            <p>{{item.name}}</p>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<style>
  .page-visa .mint-swipe {
    height: 180px;
    width: 100%;
    color: #fff;
    font-size: 30px;
    text-align: center;
    background-color: #ccc;
  }

  .page-visa .mint-swipe-item {
    line-height: 200px;
  }

  .page-visa .mint-swipe-item img{
    width: 100%;
    height: 200px;
  }
  .page-visa .mint-tab-item-label{
    font-size: 18px;
  }
  .page-visa .mint-tab-container-wrap{
    margin-top: 5px;
  }
  .page-visa .tours-box{
    padding: 0px 10px 5px 10px;
  }
  .page-visa .tours-item{
    float: left;
    width: 49%;
  }
  .page-visa .tours-box li:nth-of-type(odd){
    list-style: none;
    margin-right: 1px;
  }
  .page-visa .tours-box li:nth-of-type(even){
    list-style: none;
    margin-left: 5px;
  }
  .page-visa .tours-item img{
    width: 100%;
    height: 130px;
  }
  .page-visa .tours-item p{
    font-size: 15px;
  }

</style>
<script type="text/babel">
  export default {
    name: 'page-visa',
    data () {
      return {
        selected: '4',
        hotCountry:[]
      }
    },
  methods:{
    getPicList(){
      var $this = this;
      $this.$http.post('/api/tours/getPicList.do',{
        type:$this.selected
      }).then((response) => {
        var data = response.body;
        if(data && data.re){
          $this.hotCountry = data.re;
          console.log(data.re)
        }else{
          $this.myToast(data.msg);
        }
      }).catch(function(response) {
        console.log(response)
      })
    }
  },
  mounted(){
    this.getPicList();
  }
  }
</script>
