<template>
  <div class="titelbox">
    <h3>{{ list.title01 }}</h3>
    <div class="alink">
      {{ list.title02 }}
      <router-link :to="list.url">{{ list.title02a }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: () => {
        return {
          title01: "全面、专业、智能、成熟的网器方案",
          title02:
            "提供海量源于实践的成熟方案，助力开发者快速简单实现产品智能化",
          title02a: "查看全部解决方案 >",
          url: "/",
        };
      },
    },
  },
};
</script>

<style lang="less" scoped>
.titelbox {
  color: rgba(0, 0, 0, 0.8);
  padding: 0 0 4vh;
  h3 {
    font-weight: 600;
  }
  .alink {
    padding: 1vh 0;
  }
}
</style>