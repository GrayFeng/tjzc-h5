<template>
  <div class="page-index">
    <mt-swipe :auto="4000">
      <mt-swipe-item class="slide1">
        <img src="../assets/banner/banner-01.jpg">
      </mt-swipe-item>
      <mt-swipe-item class="slide2">2</mt-swipe-item>
      <mt-swipe-item class="slide3">3</mt-swipe-item>
    </mt-swipe>
    <nav>
        <ul class="nav-ul">
          <router-link to="/order">
            <li class="nav-li">
              <i class="icon-zc"></i>
              <p>租车服务</p>
            </li>
          </router-link>
          <router-link to="/tours">
            <li class="nav-li  border-left-ccc">
              <i class="icon-ly"></i>
              <p>旅游服务</p>
            </li>
          </router-link>
          <li class="nav-li">
            <i class="icon-qz"></i>
            <p>签证服务</p>
          </li>
          <li class="nav-li border-left-ccc">
            <i class="icon-fc"></i>
            <p>房车服务</p>
          </li>
          <li class="nav-li">
            <i class="icon-qy"></i>
            <p>企业服务</p>
          </li>
          <li class="nav-li border-left-ccc">
            <i class="icon-us"></i>
            <p>关于我们</p>
          </li>
        </ul>
    </nav>
  </div>
</template>
<style>
    .page-index .mint-swipe {
      height: 200px;
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
      margin: 0;
      padding: 0;
      border: 0;
    }

    .page-index .nav-li{
      height: 100px;
      width: 49.5%;
      float: left;
      border-bottom: 1px #efefef solid;
    }

    .page-index .nav-li i{
      display: block;
      margin: 8px auto 8px auto;
      width: 48px;
      height: 48px;
    }

    .page-index .nav-li .icon-zc{
      background: url(../assets/index/nav-zc02.png) no-repeat;
    }

    .page-index .nav-li .icon-ly{
      background: url(../assets/index/nav-ly01.png) no-repeat;
    }

    .page-index .nav-li .icon-qz{
      background: url(../assets/index/nav-qz01.png) no-repeat;
    }

    .page-index .nav-li .icon-fc{
      background: url(../assets/index/nav-fc02.png) no-repeat;
    }

    .page-index .nav-li .icon-qy{
      background: url(../assets/index/nav-qy01.png) no-repeat;
    }

    .page-index .nav-li .icon-us{
      background: url(../assets/index/nav-us01.png) no-repeat;
    }

    .page-index .nav-li p{
      text-align: center;
      margin: 0;
      padding: 0;
      font-size: 18px;
      color: #333;

    }

    .border-left-ccc{
      border-left: 1px #efefef solid;
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
