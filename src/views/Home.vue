<template>
  <section>
    <!-- 轮播图 -->
    <Shuffling />
    <!-- 设备 -->
    <Device />
  </section>
</template>

<script>
export default {
  components: {
    Shuffling: () => import("@/views/homepage/Shuffling.vue"),
    Device: () => import("@/views/homepage/Device.vue"),
  },
  created() {},
};
</script>

<style>
</style>