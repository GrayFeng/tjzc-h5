<template>
  <div class="page-reg">
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">个人</mt-tab-item>
      <mt-tab-item id="2">企业</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-field v-model="mobile" label="账号" placeholder="请输入手机号" type="tel"></mt-field>
        <mt-field label="验证码" placeholder="输入验证码" v-model="vCode">
          <mt-button size="small" v-on:click="send" v-bind:type="snedBtnType">{{sendBtnTitle}}</mt-button>
        </mt-field>
        <mt-field v-model="password" label="密码" placeholder="请输入密码" type="password"></mt-field>
        <mt-field v-model="password1" label="确认密码" placeholder="请输入确认密码" type="password"></mt-field>
        <mt-field v-model="name" label="姓名" placeholder="请输入姓名" type="text"></mt-field>
        <mt-field v-model="idNum" label="身份证号码" placeholder="请输入身份证号码" type="text"></mt-field>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-field v-model="companyEmail" label="账号" placeholder="请输入电子邮箱" type="tel"></mt-field>
        <mt-field v-model="companyPassword" label="密码" placeholder="请输入密码" type="password"></mt-field>
        <mt-field v-model="companyPassword1" label="确认密码" placeholder="请输入确认密码" type="password"></mt-field>
        <mt-field v-model="companyName" label="姓名" placeholder="请输入姓名" type="text"></mt-field>
        <mt-field v-model="taxId" label="税号" placeholder="请输入税号" type="text"></mt-field>
        <mt-field v-model="contact" label="联系人" placeholder="请输入联系人" type="text"></mt-field>
        <mt-field v-model="contactMobile" label="联系人手机号" placeholder="请输入联系人手机号" type="tel"></mt-field>
        <mt-field label="验证码" placeholder="输入验证码" v-model="vCode" >
          <mt-button size="small" v-on:click="send" v-bind:type="snedBtnType">{{sendBtnTitle}}</mt-button>
        </mt-field>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-button v-on:click="reg" class="login-btn" size="large" type="primary">注册</mt-button>
  </div>
</template>
<style>
  .page-reg .login-btn {
    width: 90%;
    margin: auto;
    margin-top: 30px;;
  }
  .page-reg .mint-tab-item-label{
    font-size: 18px;
  }
</style>
<script type="text/babel">
export default {
  name: 'reg',
  data () {
    return {
      sendBtnTitle:'发送验证码',
      sendIng:false,
      snedBtnType:'primary',
      selected: '1',
      mobile:'',
      vCode:'',
      password:'',
      password1:'',
      name:'',
      idNum:'',
      companyEmail:'',
      companyPassword:'',
      companyPassword1:'',
      companyName:'',
      taxId:'',
      contact:'',
      contactMobile:''
    };
  },
  methods: {
    reg : function(){
      var _this = this;
      var regInfo = {};
      if(_this.selected == '1'){
        regInfo.loginName=_this.mobile
        regInfo.displayName=_this.name
        regInfo.password=_this.password
        regInfo.password1=_this.password1
        regInfo.idNumber=_this.idNum
        regInfo.type = 0;

      }else{
        regInfo.loginName=_this.companyEmail
        regInfo.displayName=_this.companyName
        regInfo.password=_this.companyPassword
        regInfo.password1=_this.companyPassword1
        regInfo.taxId=_this.taxId
        regInfo.contact=_this.contact
        regInfo.contactMobile=_this.contactMobile
        regInfo.type = 1;
      }
      regInfo.validateCode = _this.vCode;

      console.info(_this.vCode)
      if(!_this.myValidata.isMobile(regInfo.loginName)
        && !_this.myValidata.isEmail(regInfo.loginName)){
        _this.myToast('用户名格式不正确');
        return;
      }

      if(!regInfo.password){
        _this.myToast('请输入密码');
        return;
      }

      if(regInfo.password != regInfo.password1){
        _this.myToast('两次密码不一致');
        return;
      }

      if(regInfo.idNumber
        && !_this.myValidata.checkIDCard(regInfo.idNumber)){
        _this.myToast('身份证号格式不正确');
        return;
      }

      if(regInfo.contactMobile
        && !_this.myValidata.isMobile(regInfo.contactMobile)){
        _this.myToast('联系人手机号格式不正确');
        return;
      }


      if(!regInfo.validateCode){
        _this.myToast('请输入验证码');
        return;
      }

      _this.$http.post('/api/reg/add.do',regInfo).then((response) => {
        var data = response.body;
        if(data && data.re){
          _this.myToast('注册成功');
          setTimeout(function(){
            _this.$router.push({path:'/login'});
          },300)
        }else{
          _this.myToast(data.msg);
        }
      }).catch(function(response) {
          console.log(response)
      })
    },
    send:function(){
      var _this = this;
      var mobile = _this.mobile;
      if(_this.selected != '1'){
        mobile = _this.contactMobile;
      }
      if(!mobile){
        _this.myToast('请输入手机号');
        return;
      }
      if(_this.sendIng){
        return;
      }
      _this.$http.post('/api/reg/sendValidateCode.do',{mobile:mobile}).then((response) => {
        var data = response.body;
        if(data && data.re){
          _this.sendBtnTitle = '已发送(60)';
          _this.snedBtnType = 'default';
          var count = 60;
          _this.sendIng = true;
          function countFn(){
            setTimeout(function(){
              count -= 1;
             if(count == 0){
               _this.sendBtnTitle = '发送验证码';
               _this.snedBtnType = 'primary';
               _this.sendIng = false;
             }else{
               _this.sendBtnTitle = '已发送('+count+')';
               countFn();
             }
            },1000)
          }
          countFn();
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
