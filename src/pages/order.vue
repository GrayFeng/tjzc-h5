<template>
  <div class="page-order">
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">日租包车</mt-tab-item>
      <mt-tab-item id="2">接送机</mt-tab-item>
      <mt-tab-item id="3">接送火车</mt-tab-item>
      <mt-tab-item id="4">月租包车</mt-tab-item>
      <mt-tab-item id="5">企业租车</mt-tab-item>
    </mt-navbar>
    <div class="order-item">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell :title="startTimeData.title" is-link @click.native="startTimeData.pickerVisible=!startTimeData.pickerVisible">
            <img slot="icon" src="../assets/order/time-icon.png" width="24" height="24">
          </mt-cell>
          <mt-cell :title="addressData.startTitle" is-link @click.native="showStartAddressPopup">
            <img slot="icon" src="../assets/order/address-icon-1.png" width="24" height="24">
          </mt-cell>
          <mt-cell :title="addressData.endTitle" is-link @click.native="showEndAddressPopup">
            <img slot="icon" src="../assets/order/address-icon-1.png" width="24" height="24">
          </mt-cell>
          <mt-cell :title="vehicleData.title" is-link @click.native="vehicleData.pickerVisible=!vehicleData.pickerVisible">
            <img slot="icon" src="../assets/order/car-icon.png" width="24" height="24">
          </mt-cell>
          <mt-cell :title="tenancyData.title" is-link @click.native="tenancyData.zqModelPickerVisible=!tenancyData.zqModelPickerVisible">
            <img slot="icon" src="../assets/order/day-icon.png" width="24" height="24">
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell :title="startTimeData.title" is-link @click.native="startTimeData.pickerVisible=!startTimeData.pickerVisible">
            <img slot="icon" src="../assets/order/time-icon.png" width="24" height="24">
          </mt-cell>
          <mt-cell :title="addressData.startTitle" is-link @click.native="showStartAddressPopup">
            <img slot="icon" src="../assets/order/address-icon-1.png" width="24" height="24">
          </mt-cell>
          <mt-cell :title="addressData.endTitle" is-link @click.native="showEndAddressPopup">
            <img slot="icon" src="../assets/order/address-icon-1.png" width="24" height="24">
          </mt-cell>
          <mt-cell :title="vehicleData.title" is-link @click.native="vehicleData.pickerVisible=!vehicleData.pickerVisible">
            <img slot="icon" src="../assets/order/car-icon.png" width="24" height="24">
          </mt-cell>
          <mt-cell class="cell-input">
            <img slot="icon" src="../assets/order/address-icon-1.png" width="24" height="24">
            <input v-model="flight" type="text" placeholder="请输入航班号">
          </mt-cell>
          <mt-cell :title="fetchSendData.title" is-link @click.native="fetchSendData.visible=!fetchSendData.visible">
            <img slot="icon" src="../assets/order/address-icon-1.png" width="24" height="24">
          </mt-cell>
          <mt-cell :title="singleData.title" is-link @click.native="singleData.visible=!singleData.visible">
            <img slot="icon" src="../assets/order/address-icon-1.png" width="24" height="24">
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell :title="startTimeData.title" is-link @click.native="startTimeData.pickerVisible=!startTimeData.pickerVisible">
            <img slot="icon" src="../assets/order/time-icon.png" width="24" height="24">
          </mt-cell>
          <mt-cell :title="addressData.startTitle" is-link @click.native="showStartAddressPopup">
            <img slot="icon" src="../assets/order/address-icon-1.png" width="24" height="24">
          </mt-cell>
          <mt-cell :title="addressData.endTitle" is-link @click.native="showEndAddressPopup">
            <img slot="icon" src="../assets/order/address-icon-1.png" width="24" height="24">
          </mt-cell>
          <mt-cell :title="vehicleData.title" is-link @click.native="vehicleData.pickerVisible=!vehicleData.pickerVisible">
            <img slot="icon" src="../assets/order/car-icon.png" width="24" height="24">
          </mt-cell>
          <mt-cell class="cell-input">
            <img slot="icon" src="../assets/order/address-icon-1.png" width="24" height="24">
            <input v-model="train" type="text" placeholder="请输入车次">
          </mt-cell>
            <mt-cell :title="fetchSendData.title" is-link @click.native="fetchSendData.visible=!fetchSendData.visible">
              <img slot="icon" src="../assets/order/address-icon-1.png" width="24" height="24">
            </mt-cell>
            <mt-cell :title="singleData.title" is-link @click.native="singleData.visible=!singleData.visible">
              <img slot="icon" src="../assets/order/address-icon-1.png" width="24" height="24">
            </mt-cell>

        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <mt-cell :title="startTimeData.title" is-link @click.native="startTimeData.pickerVisible=!startTimeData.pickerVisible">
            <img slot="icon" src="../assets/order/time-icon.png" width="24" height="24">
          </mt-cell>
          <mt-cell :title="vehicleData.title" is-link @click.native="vehicleData.pickerVisible=!vehicleData.pickerVisible">
            <img slot="icon" src="../assets/order/car-icon.png" width="24" height="24">
          </mt-cell>
          <mt-cell :title="rzTenancyData.title" is-link @click.native="rzTenancyData.visible=!rzTenancyData.visible">
            <img slot="icon" src="../assets/order/day-icon.png" width="24" height="24">
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <mt-cell class="cell-input">
            <img slot="icon" src="../assets/order/time-icon.png" width="24" height="24">
            <input v-model="customerCarType" type="text" placeholder="请输入车型">
          </mt-cell>
          <mt-cell class="cell-input">
            <img slot="icon" src="../assets/order/car-icon.png" width="24" height="24">
            <input v-model="remark" type="text" placeholder="请输入其他需求">
          </mt-cell>
          <mt-cell :title="qyTenancyData.title" is-link @click.native="qyTenancyData.visible=!qyTenancyData.visible">
            <img slot="icon" src="../assets/order/day-icon.png" width="24" height="24">
          </mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-button v-on:click="createOrder" size="large" type="primary">提交</mt-button>


    <mt-popup v-model="rzTenancyData.visible" position="bottom" class="mint-datetime model-picker">
      <mt-picker
        ref="rzTenancyModelPicker"
        :slots="rzTenancyData.modelPickerSlot"
        :visible-item-count="3"
        showToolbar
        @change="onRzTenancyChange">
        <span class="toolbar-title">请选择租期</span>
      </mt-picker>
    </mt-popup>

    <mt-popup v-model="qyTenancyData.visible" position="bottom" class="mint-datetime model-picker">
      <mt-picker
        ref="qyTenancyModelPicker"
        :slots="qyTenancyData.modelPickerSlot"
        :visible-item-count="3"
        showToolbar
        @change="onQyTenancyChange">
        <span class="toolbar-title">请选择租期</span>
      </mt-picker>
    </mt-popup>

    <mt-popup v-model="singleData.visible" position="bottom" class="mint-datetime model-picker">
      <mt-picker
        ref="singleModelPicker"
        :slots="singleData.modelPickerSlot"
        :visible-item-count="3"
        showToolbar
        @change="onSingleChange">
        <span class="toolbar-title">单程／往返</span>
      </mt-picker>
    </mt-popup>

    <mt-popup v-model="fetchSendData.visible" position="bottom" class="mint-datetime model-picker">
      <mt-picker
        ref="fetchSendModelPicker"
        :slots="fetchSendData.modelPickerSlot"
        :visible-item-count="3"
        showToolbar
        @change="onFetchSendChange">
        <span class="toolbar-title">接机／送机</span>
      </mt-picker>
    </mt-popup>


    <mt-popup v-model="tenancyData.zqModelPickerVisible" position="bottom" class="mint-datetime model-picker">
      <mt-picker
        ref="zqModelPicker"
        :slots="tenancyData.zqModelPickerSlot"
        :visible-item-count="3"
        showToolbar
        @change="onTenancyChange">
        <span class="toolbar-title">请选择包车天数</span>
      </mt-picker>
    </mt-popup>

    <mt-popup v-model="startTimeData.pickerVisible" position="bottom" class="mint-datetime model-picker">
      <mt-picker
        ref="dateTimePicker"
        :slots="startTimeData.pickerSlot"
        :visible-item-count="3"
        show-toolbar
        @change="onDateTimeChange">
        <span class="toolbar-title">请选择用车时间</span>
      </mt-picker>
    </mt-popup>

    <mt-popup v-model="vehicleData.pickerVisible" position="bottom" class="mint-datetime model-picker">
      <mt-picker
        ref="modelPicker"
        :slots="vehicleData.pickerSlot"
        :visible-item-count="3"
        show-toolbar
        @change="onVehicleChange">
        <span class="toolbar-title">请选择车型</span>
      </mt-picker>
    </mt-popup>

    <mt-popup v-model="addressData.popupVisible3" position="right" class="mint-popup-3" :modal="false">
      <mt-header title="请选择地址">
        <router-link to="" slot="left">
          <mt-button @click.native="addressData.popupVisible3 = false">返回</mt-button>
        </router-link>
      </mt-header>
      <div style="position: relative;">
      <mt-search v-model="addressData.keyword" autofocus v-on:input="searchAddress">
        <mt-cell
          v-for="item in addressData.addressList"
          :title="item"
          @click.native="selectedAddress(item)">
        </mt-cell>
      </mt-search>
        </div>
    </mt-popup>
  </div>
</template>
<style>
  .page-order .mint-tab-item-label{
    font-size: 14px;
    font-weight: bold;
  }
  .page-order .order-item{
    margin-bottom: 30px;
  }
  .page-order .order-item .mint-cell{
    min-height: 60px;
  }
  .page-order .mint-button--primary {
    width: 90%;
    margin: auto;
  }
  .page-order .model-picker .toolbar-title{
    display: inline-block;
    width: 100%;
    text-align: center;
    padding: 5px;
    font-size: 18px;
    line-height: 30px;
    color: #33cc00;
  }

  .page-order .cell-input .mint-cell-title{
    -webkit-box-flex: 0;
    -ms-flex: 0;
    flex: 0;
  }

  .page-order .cell-input .mint-cell-value{
    width: 100%;
  }
  .page-order .cell-input input{
    width: 100%;
    border: none;
    font-size: 16px;
  }

  .page-order .cell-input :-moz-placeholder{
    color: #000; opacity:1;
  }

  .page-order .cell-input ::-moz-placeholder {
    color: #000;opacity:1;
  }

  .page-order .cell-input input:-ms-input-placeholder{
    color: #000;opacity:1;
  }

  .page-order .cell-input input::-webkit-input-placeholder{
    color: #000;opacity:1;
  }
  .page-order .mint-popup-3 {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .page-order .mint-searchbar-core{
    font-size: 16px;;
  }
</style>
<script type="text/babel">
export default {
  name: 'order',
  data () {
    return {
      value:'',
      dateTimeTitle: '请输入用车时间',
      selected: '1',
      modelPickerVisible:false,
      modelPickerSlot: [{
        flex: 1,
        values: ['舒适型','商务型','豪华型'],
        className: 'slot1'
      }],

      flight:'',
      train:'',
      remark:'',
      customerCarType:'',

      singleData:{
        visible:false,
        modelPickerSlot: [{
          flex: 1,
          values: ['单程','往返'],
          className: 'slot1'
        }],
        title:'单程／往返',
        value:''
      },
      fetchSendData:{
        visible:false,
        modelPickerSlot: [{
          flex: 1,
          values: ['接机','送机'],
          className: 'slot1'
        }],
        title:'接机／送机',
        value:''
      },
      rzTenancyData:{
        visible:false,
        modelPickerSlot: [{
          flex: 1,
          values: ['短租(1-3个月)','长租(4-12个月)'],
          className: 'slot1'
        }],
        title:'请选择租期',
        value:''
      },
      qyTenancyData:{
        visible:false,
        modelPickerSlot: [{
          flex: 1,
          values: ['3年','4年','5年','6年','7年','8年','9年','10年'],
          className: 'slot1'
        }],
        title:'请选择租期',
        value:''
      },
      tenancyData:{
        zqModelPickerVisible:false,
        zqModelPickerSlot: [{
          flex: 1,
          values: ['单次','半天','全天'],
          className: 'slot1'
        }],
        title:'请选择包车天数',
        value:''
      },
      startTimeData:{
        pickerVisible:false,
        pickerSlot:[{
          flex: 2,
          values: ['2017-08-10','08-11','08-12'],
          className: 'slot1',
          textAlign: 'right'
        },
          {
            flex: 1,
            values: ['10','11','12'],
            className: 'slot2',
            textAlign: 'right'
          },
          {
            flex: 1,
            values: ['10','11','12'],
            className: 'slot3'
          }],
        title:'请用车时间',
        value:''
      },

      vehicleData:{
        title:'请选择车型',
        value:'',
        pickerVisible:false,
        pickerSlot:[{
          flex: 1,
          values: ['舒适型','商务型','豪华型','其他'],
          className: 'slot1'
        }]
      },
      addressData:{
        popupVisible3: false,
        startTitle:'请选择出发地点',
        endTitle:'请选择送达地点',
        flag:1,
        keyword:'',
        addressList:[],
        startAddress:'',
        endAddress:'',
        keywordInput: ''
      },
    };
  },
  methods: {
    open (picker) {
      this.$refs[picker].open();
    },
    searchAddress() {
      var $this = this;
      window.clearTimeout($this.addressData.keywordInput);
      $this.addressData.keywordInput = setTimeout(function(){
        var options = {
          onSearchComplete: function(results){
            // 判断状态是否正确
            if (local.getStatus() == BMAP_STATUS_SUCCESS){
              var s = [];
              $this.addressData.addressList = [];
              for (var i = 0; i < results.getCurrentNumPois(); i ++){
                $this.addressData.addressList.push(results.getPoi(i).title);
              }
            }
          }
        };
        var local = new BMap.LocalSearch('天津',options);
        local.search($this.addressData.keyword);
      },300);
    },
    showStartAddressPopup(){
      this.addressData.flag = 1;
      this.addressData.popupVisible3 = true;
    },
    showEndAddressPopup(){
      this.addressData.flag = 2;
      this.addressData.popupVisible3 = true;
    },
    selectedAddress(item){
      if(this.addressData.flag == 1){
        this.addressData.startAddress = this.addressData.startTitle = item;
      }else{
        this.addressData.endAddress = this.addressData.endTitle = item;
      }
      this.addressData.popupVisible3 = false;
    },
    onVehicleChange(picker,values){
      this.vehicleData.title = values[0];
      this.vehicleData.value = values[0];
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    onDateTimeChange(picker,values){
      picker.setSlotValue(0, values[0]);
      picker.setSlotValue(1, values[1]);
      picker.setSlotValue(2, values[2]);
      this.startTimeData.title = this.startTimeData.value = (values[0] + ' ' + values[1] + ':' + values[2])
    },
    onTenancyChange(picker,values){
      this.tenancyData.title = values[0];
      this.tenancyData.value = values[0];
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    onRzTenancyChange(picker,values){
      this.rzTenancyData.title = values[0];
      this.rzTenancyData.value = values[0];
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    onQyTenancyChange(picker,values){
      this.qyTenancyData.title = values[0];
      this.qyTenancyData.value = values[0];
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    onFetchSendChange(picker,values){
      this.fetchSendData.title = values[0];
      if(values[0] == '接机'){
        this.fetchSendData.value = 0;
      }else{
        this.fetchSendData.value = 1;
      }
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    onSingleChange(picker,values){
      this.singleData.title = values[0];
      if(values[0] == '单程'){
        this.singleData.value = 0;
      }else{
        this.singleData.value = 1;
      }
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    createOrder(){
      var $this = this;
      console.info($this.selected)
      if(document.cookie.indexOf('loginName') == -1){
        $this.$router.push({path:'/login'});
        return;
      }
      var orderInfo = {};
      orderInfo.type = $this.selected;
      if(orderInfo.type == 1){
        orderInfo.startTime = $this.startTimeData.value;
        orderInfo.startAddress = $this.addressData.startAddress;
        orderInfo.endAddress = $this.addressData.endAddress;
        orderInfo.customerCarType = $this.vehicleData.value;
        orderInfo.tenancy = $this.tenancyData.value;
        if(orderInfo.startTime < $this.getNowDateTime()){
          $this.myToast("请选择有效时间");
          return;
        }
        if(!orderInfo.startAddress || !orderInfo.endAddress){
          $this.myToast("请输入用车地址");
          return;
        }
      }else if(orderInfo.type == 2){
        orderInfo.startTime = $this.startTimeData.value;
        orderInfo.startAddress = $this.addressData.startAddress;
        orderInfo.endAddress = $this.addressData.endAddress;
        orderInfo.customerCarType = $this.vehicleData.value;
        orderInfo.flightTrain = $this.flight;
        orderInfo.fetchSend = $this.fetchSendData.value;
        orderInfo.single = $this.singleData.value;
        if(orderInfo.startTime < $this.getNowDateTime()){
          $this.myToast("请选择有效时间");
          return;
        }
        if(!orderInfo.startAddress || !orderInfo.endAddress){
          $this.myToast("请输入用车地址");
          return;
        }
      }else if(orderInfo.type == 3){
        orderInfo.startTime = $this.startTimeData.value;
        orderInfo.startAddress = $this.addressData.startAddress;
        orderInfo.endAddress = $this.addressData.endAddress;
        orderInfo.customerCarType = $this.vehicleData.value;
        orderInfo.flightTrain = $this.train;
        orderInfo.fetchSend = $this.fetchSendData.value;
        orderInfo.single = $this.singleData.value;
        if(orderInfo.startTime < $this.getNowDateTime()){
          $this.myToast("请选择有效时间");
          return;
        }
        if(!orderInfo.startAddress || !orderInfo.endAddress){
          $this.myToast("请输入用车地址");
          return;
        }
      }else if(orderInfo.type == 4){
        orderInfo.startTime = $this.startTimeData.value;
        orderInfo.customerCarType = $this.vehicleData.value;
        orderInfo.tenancy = $this.rzTenancyData.value;
        if(orderInfo.startTime < $this.getNowDateTime()){
          $this.myToast("请选择有效时间");
          return;
        }
      }else if(orderInfo.type == 5){
        orderInfo.remark = $this.remark;
        orderInfo.customerCarType = $this.customerCarType;
        orderInfo.tenancy = $this.qyTenancyData.value;
        if(!orderInfo.customerCarType){
          $this.myToast("请输入车型");
        }
      }
      console.info(orderInfo);
      $this.$http.post('/api/rent/addOrder.do',orderInfo
      ).then((response) => {
        var data = response.body;
        if(data && data.re){
          $this.$messagebox.alert('订单创建成功!', '提示');
        }else{
          $this.myToast(data.msg);
        }
      }).catch(function(response) {
        console.log(response)
      })
    }
  },
created(){
    var now = new Date();
    var year = now.getYear() + 1900;
    var month = now.getMonth() + 1;
    var day = now.getDate();
    this.startTimeData.pickerSlot[0].values = [];
  this.startTimeData.pickerSlot[0].values.push(year + '-' + (month< 10 ? '0'+month:month) + '-' + (day< 10 ? '0'+day:day));
    for(var i = 0;i< 30;i++){
      now.setDate(now.getDate() + 1)
      var year = now.getYear() + 1900;
      var month = now.getMonth() + 1;
      var day = now.getDate();
      this.startTimeData.pickerSlot[0].values.push(year + '-' + (month< 10 ? '0'+month:month) + '-' + (day< 10 ? '0'+day:day));
    }

  this.startTimeData.pickerSlot[1].values = [];
    for(var i = 0;i< 24;i++){
      if(i < 10){
        this.startTimeData.pickerSlot[1].values.push('0' + i);
      }else{
        this.startTimeData.pickerSlot[1].values.push(i);
      }
      if(i == now.getHours()){
        this.startTimeData.pickerSlot[1].defaultIndex = i;
      }
    }

  this.startTimeData.pickerSlot[2].values = [];
    for(var i = 0;i< 60;i++){
      if(i < 10){
        this.startTimeData.pickerSlot[2].values.push('0' + i);
      }else{
        this.startTimeData.pickerSlot[2].values.push(i);
      }
      if(i == now.getMinutes()){
        this.startTimeData.pickerSlot[2].defaultIndex = i;
      }
    }
  }
}
</script>
