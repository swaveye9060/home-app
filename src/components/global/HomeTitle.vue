<template>
  <div class="titelbox">
    <div class="h3">{{ list.title01 }}</div>
    <div>
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
  padding: 3vh 0;
}
</style>