<template>
  <div id="app">
    <!-- nav -->
    <Headers />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$loadDialog(), 33);
    // setTimeout(() => {
    //   console.log(this.$closeLoading(), 333);
    // }, 2000);
  },
};
</script>


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
}
</style>
