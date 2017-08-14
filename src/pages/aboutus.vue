<template>
  <div class="page-aboutus">
    <div class="item">
        <div class="item-icon">
            <i></i>
        </div>
        <div class="item-content">
          服务热线:<br>
          400-0000-0000
        </div>
    </div>
    <div class="item">
      <div class="item-icon">
        <i></i>
      </div>
      <div class="item-content">
        服务热线:<br>
        400-0000-0000
      </div>
    </div>
    <div class="item">
      <div class="item-icon">
        <i></i>
      </div>
      <div class="item-content">
        服务热线:<br>
        400-0000-0000
      </div>
    </div>
    <div class="item">
      <div class="item-icon">
        <i></i>
      </div>
      <div class="item-content">
        服务热线:<br>
        400-0000-0000
      </div>
    </div>
    <div class="item">
      <div class="item-icon">
        <i></i>
      </div>
      <div class="item-content">
        服务热线:<br>
        400-0000-0000
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
    background: url(../assets/aboutus/icon-kf.png) no-repeat;
    background-size: 64px 64px;
    display: block;
    height: 64px;
    width: 64px;
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
