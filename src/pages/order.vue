<template>
  <div class="page-order">
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">日租包车</mt-tab-item>
      <mt-tab-item id="2">接送机</mt-tab-item>
      <mt-tab-item id="3">接送火车</mt-tab-item>
      <mt-tab-item id="4">长租短租</mt-tab-item>
      <mt-tab-item id="5">企业租车</mt-tab-item>
    </mt-navbar>
    <div class="order-item">
      <mt-cell title="请选择出发地点" is-link>
        <img slot="icon" src="../assets/order/address-icon-1.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="请选择送达地点" is-link>
        <img slot="icon" src="../assets/order/address-icon-1.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="请选择出发时间" is-link @click.native="open('dateTimePicker')">
        <img slot="icon" src="../assets/order/time-icon.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="请选择车型" is-link @click.native="modelPickerVisible=!modelPickerVisible">
        <img slot="icon" src="../assets/order/car-icon.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="请选择包车天数" is-link>
        <img slot="icon" src="../assets/order/day-icon.png" width="24" height="24">
      </mt-cell>
    </div>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">

      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-button size="large" type="primary">提交</mt-button>


    <mt-popup v-model="modelPickerVisible" position="bottom" class="mint-datetime model-picker">
      <mt-picker
        ref="modelPicker"
        :slots="modelPickerSlot"
        :visible-item-count="3"
        showToolbar>
        <span class="toolbar-title">请选择车型</span>
      </mt-picker>
    </mt-popup>

  <mt-datetime-picker
    ref="dateTimePicker"
    year-format="{value} 年"
    month-format="{value} 月"
    date-format="{value} 日">
  </mt-datetime-picker>
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
</style>
<script type="text/babel">
export default {
  name: 'order',
  data () {
    return {
      title: '租车服务',
      modelPickerVisible:false,
      selected: '1',
      modelPickerSlot: [{
        flex: 1,
        values: ['帕萨特','奥迪A6','宝马5系','别克GL8','雪佛兰景程'],
        className: 'slot1'
      }]
    };
  },
  methods: {
    open (picker) {
      this.$refs[picker].open();
    }
  }
}
</script>
