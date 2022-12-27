<!-- 
  * Author: ye9060
  * 2022-12-13
  * [主页]
  * 
  * 获取图片
  <img
    class="可设置宽高"
    :src="`${BaseUrl}/system/file/downloadFile?fid=1670898904174.jpg&fileBucket=smarthome&fileName=333.jpeg`"
    alt="..."
  />
 -->

<template>
  <section>
    <!-- 轮播图 -->
    <Shuffling />
    <div v-if="false" class="container text-center">
      <CountTo :endVal="2022" separator="" prefix="6/" suffix="/3xxx"></CountTo>
      <Countdown />
    </div>
    <!-- 开放能力 -->
    <TypeInfo />
    <!-- 技术支撑 -->
    <Serve />
    <!-- 数据统计 -->
    <Statistical />
    <!-- 网器方案 -->
    <Device />
    <!-- 快速接入 -->
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