<template>
  <section>
    <!-- 轮播图 -->
    <Shuffling />
    <!-- 介绍 -->
    <Serve />
    <!-- 统计 -->
    <Statistical />
    <!-- 设备 -->
    <Device />
  </section>
</template>

<script>
export default {
  components: {
    Shuffling: () => import("@/views/homepage/Shuffling.vue"),
    Serve: () => import("@/views/homepage/Serve.vue"),
    Statistical: () => import("@/views/homepage/Statistical.vue"),
    Device: () => import("@/views/homepage/Device.vue"),
  },
  created() {},
};
</script>

<style>
</style>