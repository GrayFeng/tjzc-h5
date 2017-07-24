<template>
  <div class="page-toursr">
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">境内游</mt-tab-item>
      <mt-tab-item id="2">出境游</mt-tab-item>
      <mt-tab-item id="3">私人定制</mt-tab-item>
    </mt-navbar>


    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul class="tours-box">
          <li class="tours-item" v-for="item in domesticItems">
            <a href="#">
              <img :src="item.img"/>
            </a>
            <p>{{item.title}}</p>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
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
        domesticItems:[{
          img:require('../assets/tours/domestic-01.jpg'),
          title:'【三亚一地】5日【全程海景房/经典景点全含】'
        },
          {
            img:require('../assets/tours/domestic-02.jpg'),
            title:'丽江泸沽湖5日游【玉龙雪山/泸沽湖环湖游/漫品泸沽湖】'
          },
          {
            img:require('../assets/tours/domestic-03.jpg'),
            title:'长白山西北坡镜泊湖软卧6日游'
          },
          {
            img:require('../assets/tours/domestic-04.jpg'),
            title:'武夷山厦门鼓浪屿土楼卧高飞6日'
          },
          {
            img:require('../assets/tours/domestic-05.jpg'),
            title:'南宁/德天跨国瀑布/通灵峡谷/桂林大漓江'
          },
          {
            img:require('../assets/tours/domestic-06.jpg'),
            title:'华东五市/宿西塘双高5日游【江南船奇/水乡乌镇】'
          },
          {
            img:require('../assets/tours/domestic-07.jpg'),
            title:'三亚一地双飞5日游【海景时光/海岛雨林/呀诺达观光车】'
          },
          {
            img:require('../assets/tours/domestic-08.jpg'),
            title:'云南昆明/西双版纳升级版6日游'
          }]
      }
    }
  }
</script>
