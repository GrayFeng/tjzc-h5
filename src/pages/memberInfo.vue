<template>
  <div class="page-memberInfo">
    <mt-field v-if="type==0" v-model="name" label="姓名" placeholder="" type="text" readonly></mt-field>
    <mt-field v-if="type==0" v-model="idNum" label="身份证号码" placeholder="" type="text" readonly></mt-field>
    <mt-field v-if="type==0" v-model="mobile" label="账号" placeholder="" type="tel" readonly></mt-field>
    <mt-field v-if="type==1" v-model="companyName" label="企业名称" placeholder="" type="text" readonly></mt-field>
    <mt-field v-if="type==1" v-model="taxId" label="税号" placeholder="" type="text" readonly></mt-field>
    <mt-field v-if="type==1" v-model="contact" label="联系人" placeholder="请输入联系人" type="text"></mt-field>
    <mt-field v-if="type==1" v-model="contactMobile" label="联系人手机号" placeholder="请输入联系人手机号" type="tel"></mt-field>
    <mt-button v-on:click="updateMemberInfo" v-if="type==1" class="login-btn" size="large" type="primary">保存</mt-button>
  </div>
</template>
<style>
  .page-memberInfo .login-btn{
    margin-top: 30px;
  }
</style>
<script type="text/babel">
export default {
  name: 'memberInfo',
  data () {
    return {
      title: '我的信息',
      mobile:'',
      name:'',
      idNum:'',
      companyName:'',
      taxId:'',
      contact:'',
      contactMobile:'',
      type:''
    };
  },
  methods: {
    updateMemberInfo:function(){
      var $this = this;
      var param = {};
      param.contact = $this.contact;
      param.contactMobile = $this.contactMobile;
      $this.$http.post('/api/my/updateMemberInfo.do',param).then((response) => {
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
    var $this = this;
    $this.$http.post('/api/my/getMemberInfo.do').then((response) => {
      $this.loading = false;
      var data = response.body;
      if(data && data.re){
        $this.mobile = data.re.loginName;
        $this.name = data.re.displayName;
        $this.companyName = data.re.displayName;
        $this.idNum = data.re.idNumber;
        $this.taxId = data.re.taxId;
        $this.contact = data.re.contact;
        $this.contactMobile = data.re.contactMobile;
        $this.type = data.re.type;

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
