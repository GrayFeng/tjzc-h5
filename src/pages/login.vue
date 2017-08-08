<template>
  <div class="page-login">
    <div class="page-part">
      <mt-field v-model="loginName" label="账号" placeholder="请输入手机号／邮箱" type="text"></mt-field>
      <mt-field v-model="password" label="密码" placeholder="请输入密码" type="password"></mt-field>
    </div>
    <router-link to="reg" class="reg">注册新用户</router-link>
    <mt-button v-on:click="login" class="login-btn" size="large" type="primary">登录</mt-button>

  </div>
</template>
<style>
  .page-login .login-btn {
    width: 90%;
    margin: auto;
    margin-top: 30px;;
  }
  .page-login .reg{
    display: block;
    float: right;
    text-decoration: none;
    margin: 15px;
    color: #333;
  }
</style>
<script type="text/babel">
export default {
  name: 'login',
  data () {
    return {
      title: '登录',
      loginName:'',
      password:''
    };
  },
  methods: {
    login : function(){
      var _this = this;
      if(!_this.loginName || !_this.password){
        _this.myToast('请输入用户名密码');
        return;
      }
      if(!_this.myValidata.isMobile(_this.loginName)
        && !_this.myValidata.isEmail(_this.loginName)){
        _this.myToast('用户名格式不正确');
        return;
      }
      _this.$http.post('/api/login.do',{
        loginName:_this.loginName,
        password:_this.password
      }).then((response) => {
        var data = response.body;
        if(data && data.re){
          _this.$router.push({path:'/'});
        }else{
          _this.myToast(data.msg);
        }
      }).catch(function(response) {
          console.log(response)
      })
    }
  }
}
</script>
