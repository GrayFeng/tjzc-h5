<template>
  <div class="page-aboutus">
    <div class="item">
        <div class="item-icon">
            <i class="icon-kf"></i>
        </div>
        <div class="item-content">
          服务热线:<br>
          <span class="bgc">022-23556703</span>
        </div>
    </div>
    <div class="item">
      <div class="item-icon">
        <i class="icon-cz"></i>
      </div>
      <div class="item-content">
        公司传真:<br>
        <span class="bgc">022-23347817</span>
      </div>
    </div>
    <div class="item">
      <div class="item-icon">
        <i class="icon-dz"></i>
      </div>
      <div class="item-content">
        公司地址:<br>
        <span class="bgc" style="font-size: 16px">天津市南开区复康路八里台中天大厦A座13层</span>
      </div>
    </div>
    <div class="item">
      <div class="item-icon">
        <i class="icon-kf"></i>
      </div>
      <div class="item-content">
        媒体联系:<br>
        <span class="bgc">daxingdaodingche@163.com</span>
      </div>
    </div>
    <div class="item">
      <div class="item-icon">
        <i class="icon-zx"></i>
      </div>
      <div class="item-content">
        在线客服:<br>
        <span class="bgc">QQ2963007610</span>
      </div>
    </div>
    <div class="item">
      <div class="item-icon">
        <i class="icon-qd"></i>
      </div>
      <div class="item-content">
        渠道合作:<br>
        <span class="bgc">022-23556705</span>
      </div>
    </div>
  </div>
</template>
<style>
.page-aboutus{
  padding: 10px;
}
.page-aboutus .item{
  font-size: 18px;
  margin: 10px;
  height: 80px;
}
.page-aboutus .item-icon{
  display: inline-block;
  width: 25%;
  text-align: center;
}
.page-aboutus .item-content{
  display: inline-block;
  width: 75%;
  margin-top: 10px;
  float: right;
}
  .page-aboutus .item-icon i{
    display: block;
    height: 64px;
    width: 64px;
  }

  .page-aboutus .icon-kf{
    background: url(../assets/aboutus/icon-kf1.png) no-repeat;
    background-size: 64px 64px;
  }

  .page-aboutus .icon-cz{
    background: url(../assets/aboutus/icon-cz.png) no-repeat;
    background-size: 64px 64px;
  }

.page-aboutus .icon-dz{
  background: url(../assets/aboutus/icon-dz.png) no-repeat;
  background-size: 64px 64px;
}

.page-aboutus .icon-zx{
  background: url(../assets/aboutus/icon-zx.png) no-repeat;
  background-size: 64px 64px;
}

.page-aboutus .icon-qd{
  background: url(../assets/aboutus/icon-qd.png) no-repeat;
  background-size: 64px 64px;
}

  .page-aboutus .bgc{
    color: #ec6d09;
  }
</style>
<script type="text/babel">
  export default {
    name: 'page-aboutus',
    data () {
      return {}
    },
  methods:{

  },
  mounted(){

  }
  }
</script>
