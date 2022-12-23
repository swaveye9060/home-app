<template>
  <section>
    <!-- 轮播图 -->
    <Shuffling />
    <CountTo :endVal="2022" separator="" prefix="6/" suffix="/3333"></CountTo>
    <!-- 介绍 -->
    <Serve />
    <!-- 统计 -->
    <Statistical />
    <!-- 设备 -->
    <Device />
    <!-- 智能化 -->
    <Intelligence />
    <Footers />
  </section>
</template>

<script>
export default {
  components: {
    Loding: () => import("@/components/global/Loding/index.vue"),
    Shuffling: () => import("@/views/homepage/Shuffling.vue"),
    Intelligence: () => import("@/views/homepage/Intelligence.vue"),
    Serve: () => import("@/views/homepage/Serve.vue"),
    Statistical: () => import("@/views/homepage/Statistical.vue"),
    Device: () => import("@/views/homepage/Device.vue"),
  },
  created() {
    this.$showLoading.show();
    setTimeout(() => {
      this.$showLoading.hide();
    }, 2000);
  },
};
</script>

<style scoped>
</style>