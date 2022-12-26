<template>
  <section>
    <!-- 轮播图 -->
    <Shuffling />
    <div class="container text-center">
      <CountTo :endVal="2022" separator="" prefix="6/" suffix="/3xxx"></CountTo>
      <Countdown />
    </div>
    <!-- TypeInfo -->
    <TypeInfo />
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
    Countdown: () => import("./homepage/Countdown.vue"),
    Shuffling: () => import("@/views/homepage/Shuffling.vue"),
    TypeInfo: () => import("@/views/homepage/TypeInfo.vue"),
    Intelligence: () => import("@/views/homepage/Intelligence.vue"),
    Serve: () => import("@/views/homepage/Serve.vue"),
    Statistical: () => import("@/views/homepage/Statistical.vue"),
    Device: () => import("@/views/homepage/Device.vue"),
  },
  created() {
    this.$showLoading.show();
    setTimeout(() => {
      this.$showLoading.hide();
    }, 1000);
  },
};
</script>

<style scoped>
</style>