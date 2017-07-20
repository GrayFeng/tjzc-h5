<template>
  <div>
    <mt-header :title="title">
      <router-link to="/" slot="left" v-if="visible">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/login" slot="right" v-if="memberCenterVisble" >
        <mt-button>
          <img src="./assets/memerCenter.png" height="24" width="24" slot="icon">
        </mt-button>
      </router-link>
    </mt-header>
    <router-view></router-view>
  </div>
</template>

<style>
  html, body {
    margin: 0;
    padding: 0;
    ont-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  div,p{
    margin: 0;
    padding: 0;
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        title: '大行道'
      }
    },
    computed: {
      visible () {
        return ['/'].indexOf(this.$route.path) < 0;
      },

      memberCenterVisble () {
        return ['/member','/login'].indexOf(this.$route.path) < 0;
      }
    }
  };
</script>
