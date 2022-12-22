<!-- 
  * Author: ye9060
  * 2022-12-13 ~ 2022-12-16
  * [设备]
  * 获取图片
  <img
    class="可设置宽高"
    :src="`${BaseUrl}/system/file/downloadFile?fid=1670898904174.jpg&fileBucket=smarthome&fileName=333.jpeg`"
    alt="..."
  />
 -->

<template>
  <section class="homebox box">
    <div class="container text-center">
      <HomeTitle :list="list" />

      <Cradbox :datalist="datalist" />
    </div>
  </section>
</template>

<script>
export default {
  components: {
    Cradbox: () => import("@/components/other/Cradbox.vue"),
  },
  data() {
    return {
      list: {
        title01: "全面、专业、智能、成熟的网器方案",
        title02: "提供海量源于实践的成熟方案，助力开发者快速简单实现产品智能化",
        title02a: "查看全部解决方案 >",
        url: "/device",
      },

      datalist: [],
    };
  },

  created() {
    /*  */
    this.$homeApi.getAllDevice().then((res) => {
      // console.log(res.data, 33);
      if (res.data.code !== 0) return;
      this.datalist = res.data.data.slice(0, 8);
    });

    //
    // window.open(
    //   `/manage/system/file/downloadFile?fileBucket='smarthome'&fileName=333.png&fid='1670898904174.jpg'`
    // );
  },
};
</script>

<style lang="less" scoped>
</style>