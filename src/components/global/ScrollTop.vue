<template>
  <section class="scrolltopbox" v-if="scrolltop">
    <a href="#">Top</a>
    <a href="#">Top</a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      scrolltop: false,
    };
  },
  mounted() {
    // 滚动条的获取
    window.addEventListener("scroll", this.handleScroll, true);
  },

  methods: {
    handleScroll() {
      // console.log("滚动高度", window.pageYOffset);
      this.scrolltop = window.pageYOffset > 400 ? true : false;
    },
  },
};
</script>

<style lang="less" scoped>
.scrolltopbox {
  z-index: 999;
  position: fixed;
  width: 50px;
  height: 50px;
  background-color: #212121;
  right: 30px;
  bottom: 60px;
  box-shadow: 0 30px 50px rgb(0 0 0 / 3%);
  overflow: hidden;
  animation: playscrolltop 0.7s;

  a {
    display: block;
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: #fff;

    transition: 0.5s;
  }

  &:hover {
    background-color: #122179;
    a {
      transform: translateY(-50px);
    }
  }
}

@keyframes playscrolltop {
  0% {
    transform: translateY(200px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>