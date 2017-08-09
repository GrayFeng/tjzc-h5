<template>
  <div class="page-my">
    <div class="memberInfo">
      <img src="../assets/my/head-icon.png" width="80px" height="80px">
      <p>{{loginName}}</p>
    </div>
    <div class="my-nav">
      <mt-cell title="我的订单" is-link to="/orderList"></mt-cell>
      <mt-cell title="我的信息" is-link to="/memberInfo"></mt-cell>
      <mt-cell title="密码修改" is-link to="/modifyPwd"></mt-cell>

      <mt-button v-on:click="logout" class="login-btn" size="large" type="primary">退出</mt-button>
    </div>
  </div>
</template>
<style>
.page-my .memberInfo{
  height: 110px;
  text-align: center;
  padding: 10px;
}
.page-my .login-btn{
  margin-top: 30px;
}
</style>
<script type="text/babel">
export default {
  name: 'my',
  data () {
    return {
      title: '我的中心',
      loginName:'13000000000'
    };
  },
  methods: {
    logout:function(){
      var $this = this;
      $this.$http.post('/api/logout.do').then((response) => {
        $this.loading = false;
        var data = response.body;
        if(data && data.status == '200'){
          $this.$router.push({path:'/login'});
        }else{
          $this.myToast(data.msg);
        }
      }).catch(function(response) {
        console.log(response)
      })
    }
  },
  mounted(){
    var $this = this;
    $this.$http.post('/api/my/getMemberInfo.do').then((response) => {
        $this.loading = false;
        var data = response.body;
        if(data && data.re){
          if(data.re.displayName){
            $this.loginName = data.re.displayName;
          }else{
            $this.loginName = data.re.loginName;
          }
          console.log(data.re)
        }else if(data && data.status == '910'){
          $this.$router.push({path:'/login'});
        }else{
          $this.myToast(data.msg);
        }
      }).catch(function(response) {
        console.log(response)
      })
  }
}
</script>
