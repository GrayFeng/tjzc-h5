<template>
  <div class="page-login">
    <div class="page-part">
      <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
      <mt-field label="验证码" placeholder="请输入短信验证码" type="number"></mt-field>
    </div>
    <mt-button size="large" type="primary">提交</mt-button>

  </div>
</template>
<style>
  .page-login .mint-button--primary {
    width: 90%;
    margin: auto;
    margin-top: 30px;;
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
