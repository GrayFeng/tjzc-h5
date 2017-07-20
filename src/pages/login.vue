<template>
  <div class="page-login">
    <div class="page-part">
      <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
    </div>
    <a href="#" class="reg">注册新用户</a>
    <mt-button class="login-btn" size="large" type="primary">提交</mt-button>

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
      title: '登录'
    };
  },
  methods: {

  }
}
</script>
