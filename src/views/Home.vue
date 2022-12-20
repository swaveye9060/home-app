<template>
  <section>
    <!-- 轮播图 -->
    <Shuffling />
    <CountTo :endVal="2022" separator="/" prefix="6/" suffix="/3333"></CountTo>
    <!-- 介绍 -->
    <Serve />
    <!-- 统计 -->
    <Statistical />
    <!-- 设备 -->
    <Device />
    <!-- 智能化 -->
    <Intelligence />

    <footer>
      <div class="text-center py-3 border-top border-bottom">
        Copyright © 2022-2022 睿哲科技有限公司 版权所有 @ye9060 2022-12-20
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  components: {
    Shuffling: () => import("@/views/homepage/Shuffling.vue"),
    Intelligence: () => import("@/views/homepage/Intelligence.vue"),
    Serve: () => import("@/views/homepage/Serve.vue"),
    Statistical: () => import("@/views/homepage/Statistical.vue"),
    Device: () => import("@/views/homepage/Device.vue"),
  },
  created() {},
};
</script>

<style>
</style>