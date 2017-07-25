<template>
  <div class="page-index">
    <mt-swipe :auto="4000">
      <mt-swipe-item class="slide1">
        <img src="../assets/banner/banner-02.jpg">
      </mt-swipe-item>
    </mt-swipe>
    <nav>
        <ul class="nav-ul">
          <router-link to="/order">
            <li class="nav-li bg-green">
              <i class="icon-zc"></i>
              <p>随租随到</p>
            </li>
          </router-link>
          <router-link to="/tours">
            <li class="nav-li1 bg-blue border-left-ccc">
              <i class="icon-ly"></i>
              <p>完美旅途</p>
            </li>
          </router-link>
          <router-link to="/tours">
            <li class="nav-li1 bg-yellow border-left-ccc">
              <i class="icon-qz"></i>
              <p>签动世界</p>
            </li>
          </router-link>
          <li class="nav-li2 bg-blue">
            <i class="icon-hd"></i>
            <p>精彩活动</p>
          </li>
          <li class="nav-li1 bg-blue border-left-ccc">
            <i class="icon-fc"></i>
            <p>有房有车</p>
          </li>
          <li class="nav-li2 bg-yellow">
            <i class="icon-cx"></i>
            <p>热门车型</p>
          </li>
          <li class="nav-li1 bg-green border-left-ccc">
            <i class="icon-us"></i>
            <p>关于我们</p>
          </li>
        </ul>
    </nav>
  </div>
</template>
<style>
    .page-index .mint-swipe {
      height: 180px;
      width: 100%;
      color: #fff;
      font-size: 30px;
      text-align: center;
      background-color: #ccc;
    }

    .page-index .mint-swipe-item {
      line-height: 200px;
    }

    .page-index .mint-swipe-item img{
      width: 100%;
      height: 200px;
    }

    .page-index .slide1 {
      background-color: #0089dc;
      color: #fff;
    }

    .page-index .slide2 {
      background-color: #ffd705;
      color: #000;
    }

    .page-index .slide3 {
      background-color: #ff2d4b;
      color: #fff;
    }

    .page-index .nav-ul{
      list-style-type: none;
      position: relative;
      margin: 5px 2px 5px 1px;
      padding: 0 0 0 2px;
      border: 0;
    }

    .page-index .nav-li{
      height: 180px;
      width: 59.6%;
      float: left;
      border-bottom: 2px #fff solid;
    }

    .page-index .nav-li1{
      height: 88.5px;
      width: 39.7%;
      float: left;
      border-bottom: 2px #fff solid;
    }

    .page-index .nav-li2{
      height: 88px;
      width: 59.6%;
      float: left;
      border-bottom: 2px #fff solid;
    }

    .page-index .nav-li3{
      height: 60px;
      width: 59.5%;
      float: left;
      border-bottom: 2px #fff solid;
    }

    .page-index .nav-li4{
      height: 60px;
      width: 39.5%;
      float: left;
      border-bottom: 2px #fff solid;
    }

    .page-index .nav-li i{
      display: block;
      margin: 30px auto 15px auto;
      width: 64px;
      height: 64px;
    }

    .page-index .nav-li1 i,
    .page-index .nav-li2 i{
      display: block;
      margin: 10px auto 10px auto;
      width: 36px;
      height: 36px;
    }

    .page-index .nav-li .icon-zc{
      background: url(../assets/index/nav-js.png) no-repeat;
    }

    .page-index .nav-li1 .icon-ly{
      background: url(../assets/index/nav-ly03.png) no-repeat;
      background-size: 36px 36px;
    }

    .page-index .nav-li1 .icon-qz{
      background: url(../assets/index/nav-qz02.png) no-repeat;
      background-size: 36px 36px;
    }

    .page-index .nav-li1 .icon-fc{
      background: url(../assets/index/nav-fc06.png) no-repeat;
      background-size: 36px 36px;
    }

    .page-index .nav-li2 .icon-cx{
      background: url(../assets/index/nav-zc03.png) no-repeat;
      background-size: 36px 36px;
    }

    .page-index .nav-li2 .icon-hd{
      background: url(../assets/index/nav-hd.png) no-repeat;
      background-size: 36px 36px;
    }

    .page-index .nav-li1 .icon-us{
      background: url(../assets/index/nav-us01.png) no-repeat;
      background-size: 36px 36px;
    }

    .page-index .nav-ul li p{
      text-align: center;
      margin: 0;
      padding: 0;
      font-size: 20px;
      color: #fff;

    }

    .bg-yellow{
      background-color: #FFB90F;
    }

    .bg-blue{
      background-color: #00BFFF;
    }

    .bg-green{
      background-color: #33cc00;
    }

    .border-left-ccc{
      border-left: 2px #fff solid;
    }


</style>
<script type="text/babel">
export default {
  name: 'index',
  data () {
    return {
      title: '大行道'
    };
  }
}
</script>
