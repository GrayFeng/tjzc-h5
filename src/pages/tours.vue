<template>
  <div class="page-toursr">
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">国内旅游</mt-tab-item>
      <mt-tab-item id="2">出境旅游</mt-tab-item>
      <mt-tab-item id="3">商务旅游</mt-tab-item>
    </mt-navbar>


    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul class="tours-box">
          <li class="tours-item" v-for="item in domesticItems">
            <a href="#">
              <img :src="item.url"/>
            </a>
            <p>{{item.name}}</p>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <ul class="tours-box">
          <li class="tours-item" v-for="item in abroadItems">
            <a href="#">
              <img :src="item.url"/>
            </a>
            <p>{{item.name}}</p>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <ul class="tours-box">
          <li class="tours-item" v-for="item in businessItems">
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
  .page-toursr .mint-tab-item-label{
    font-size: 18px;
  }
  .page-toursr .mint-tab-container-wrap{
    margin-top: 5px;
  }
  .page-toursr .tours-box{
    padding: 0px 10px 5px 10px;
  }
  .page-toursr .tours-item{
    float: left;
    width: 49%;
  }
  .page-toursr .tours-box li:nth-of-type(odd){
    list-style: none;
    margin-right: 1px;
  }
  .page-toursr .tours-box li:nth-of-type(even){
    list-style: none;
    margin-left: 5px;
  }
  .page-toursr .tours-item img{
    width: 100%;
    height: 120px;
  }
  .page-toursr .tours-item p{
    font-size: 15px;
  }

</style>
<script type="text/babel">
  export default {
    name: 'page-navbar',
    data () {
      return {
        selected: '1',
        domesticItems:[],
        abroadItems:[],
        businessItems:[]
      }
    },
  watch:{
    selected:{
      handler(curVal,oldVal){
        if(curVal != oldVal){
          this.getPicList();
        }
      }
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
          if($this.selected == 1){
            $this.domesticItems = data.re;
          }else if($this.selected == 2){
            $this.abroadItems = data.re;
          }else{
            $this.businessItems = data.re;
          }
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
