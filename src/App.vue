<template>
  <div>
    <mt-header :title="title">
      <router-link to="/" slot="left" v-if="visible">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" icon="more" v-if="visible"></mt-button>
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
      }
    }
  };
</script>
