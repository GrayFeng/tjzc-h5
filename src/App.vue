<template>
  <div>
    <mt-header title="仅图标">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" icon="more"></mt-button>
    </mt-header>
    <router-view></router-view>
  </div>
</template>

<style>
  html, body {
    margin: 0;
    padding: 0;
  }
</style>

<script type="text/babel">
  export default {

  }
</script>
