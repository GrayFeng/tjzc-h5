<template>
  <div class="page-order">
    <div class="order-item">
      <mt-cell title="请选择出发地点" is-link>
        <img slot="icon" src="../assets/order/address-icon-1.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="请选择送达地点" is-link>
        <img slot="icon" src="../assets/order/address-icon-1.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="请选择出发时间" is-link @click.native="open('picker4')">
        <img slot="icon" src="../assets/order/time-icon.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="请选择车型" is-link>
        <img slot="icon" src="../assets/order/car-icon.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="请选择包车天数" is-link>
        <img slot="icon" src="../assets/order/day-icon.png" width="24" height="24">
      </mt-cell>
    </div>
    <mt-button size="large" type="primary">提交</mt-button>

  <mt-datetime-picker
    ref="picker4"
    year-format="{value} 年"
    month-format="{value} 月"
    date-format="{value} 日">
  </mt-datetime-picker>
  </div>
</template>
<style>
  .page-order .order-item{
    margin-bottom: 30px;
  }
  .page-order .mint-button--primary {
    width: 90%;
    margin: auto;
  }
</style>
<script type="text/babel">
export default {
  name: 'order',
  data () {
    return {
      title: '租车服务'
    };
  },
  methods: {
    open (picker) {
      this.$refs[picker].open();
    }
  }
}
</script>
