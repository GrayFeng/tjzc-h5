<template>
  <div class="page-vehicle">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul class="tours-box">
          <li class="tours-item" v-for="item in vehicleList">
            <a href="#">
              <img src="../assets/vehicle/1.jpg"/>
            </a>
            <p>{{item.name}}</p>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<style>

  .page-vehicle .mint-tab-item-label{
    font-size: 18px;
  }
  .page-vehicle .mint-tab-container-wrap{
    margin-top: 5px;
  }
  .page-vehicle .tours-box{
    padding: 0px 10px 5px 10px;
  }
  .page-vehicle .tours-item{
    float: left;
    width: 49%;
  }
  .page-vehicle .tours-box li:nth-of-type(odd){
    list-style: none;
    margin-right: 1px;
  }
  .page-vehicle .tours-box li:nth-of-type(even){
    list-style: none;
    margin-left: 5px;
  }
  .page-vehicle .tours-item img{
    width: 100%;
  }
  .page-vehicle .tours-item p{
    font-size: 15px;
    text-align: center;
  }

</style>
<script type="text/babel">
  export default {
    name: 'page-vehicle',
    data () {
      return {
        selected: '1',
        vehicleList:[
          {url:'',name:'宝马'},
          {url:'',name:'宝马'},
          {url:'',name:'宝马'},
          {url:'',name:'宝马'},
          {url:'',name:'宝马'},
          {url:'',name:'宝马'},
          {url:'',name:'宝马'}
        ]
      }
    },
  methods:{

  },
  mounted(){

  }
  }
</script>
