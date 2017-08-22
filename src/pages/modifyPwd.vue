<template>
  <div class="page-modifyPwd">
    <mt-field  v-model="oldPassword" label="原密码" placeholder="请输入原密码" type="password"></mt-field>
    <mt-field  v-model="newPassword" label="新密码" placeholder="请输入新密码" type="password"></mt-field>
    <mt-field  v-model="newPassword1" label="确认新密码" placeholder="请输入确认密码" type="password"></mt-field>
    <mt-button v-on:click="modifyPwd"  class="login-btn" size="large" type="primary">保存</mt-button>
  </div>
</template>
<style>
  .page-modifyPwd .login-btn{
    margin-top: 30px;
  }
</style>
<script type="text/babel">
export default {
  name: 'modifyPwd',
  data () {
    return {
      title: '修改密码',
      oldPassword:'',
      newPassword:'',
      newPassword1:''
    };
  },
  methods: {
    modifyPwd:function(){
      var $this = this;
      if(!$this.oldPassword){
        $this.myToast('请输入原密码');
        return;
      }
      if(!$this.newPassword){
        $this.myToast('请输入新密码');
        return;
      }
      if($this.newPassword != $this.newPassword1){
        $this.myToast('两次密码不一致');
        return;
      }
      var param = {};
      param.oldPassword = $this.oldPassword;
      param.newPassword = $this.newPassword;
      $this.$http.post('/api/my/modifyPassword.do',param).then((response) => {
        $this.loading = false;
        var data = response.body;
        if(data && data.status == '200'){
          $this.myToast('修改成功');
        }else if(data && data.status == '910'){
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

  }
}
</script>
