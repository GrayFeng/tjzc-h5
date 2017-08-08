<template>
  <div class="page-my">
    <div class="memberInfo">
      <img src="../assets/my/head-icon.png" width="80px" height="80px">
      <p>{{loginName}}</p>
    </div>
    <div class="my-nav">
      <mt-cell title="我的订单" is-link to="/orderList"></mt-cell>
      <mt-cell title="我的信息" is-link></mt-cell>
      <mt-cell title="密码修改" is-link></mt-cell>
    </div>
  </div>
</template>
<style>
.page-my .memberInfo{
  height: 110px;
  text-align: center;
  padding: 10px;
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

  }
}
</script>
