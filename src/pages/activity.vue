<template>
  <div class="page-activity">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul class="tours-box">
          <li class="tours-item" v-for="item in activityList">
            <a href="#">
              <img src="../assets/banner/banner-01.jpg"/>
            </a>
            <p>{{item.name}}</p>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<style>

  .page-activity .mint-tab-item-label{
    font-size: 18px;
  }
  .page-activity .mint-tab-container-wrap{
    margin-top: 5px;
  }
  .page-activity .tours-box{
    padding: 0px 10px 5px 10px;
  }
  .page-activity .tours-box li:nth-of-type(odd){
    list-style: none;
    margin-right: 1px;
  }
  .page-activity .tours-box li:nth-of-type(even){
    list-style: none;
    margin-left: 5px;
  }
  .page-activity .tours-item img{
    width: 100%;
  }
  .page-activity .tours-item p{
    font-size: 15px;
    text-align: center;
  }

</style>
<script type="text/babel">
  export default {
    name: 'page-activity',
    data () {
      return {
        selected: '1',
        activityList:[
          {url:'',name:'精彩活动1'},
          {url:'',name:'精彩活动2'},
          {url:'',name:'精彩活动3'},
          {url:'',name:'精彩活动4'},
          {url:'',name:'精彩活动5'},
          {url:'',name:'精彩活动6'},
          {url:'',name:'精彩活动7'}
        ]
      }
    },
  methods:{

  },
  mounted(){

  }
  }
</script>
