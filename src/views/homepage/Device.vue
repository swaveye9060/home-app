<template>
  <section>
    <div class="container text-center">
      <img
        class="xxximgs"
        :src="`${BaseUrl}/system/file/downloadFile?fid=1670898904174.jpg&fileBucket=smarthome&fileName=333.jpeg`"
        alt=""
      />

      <div class="justify-content-md-center">
        <div class="h3">
          {{ list.title01 }}
        </div>
        <div>
          {{ list.title02 }} <a href="#">{{ list.title02a }}</a>
        </div>
      </div>

      <div class="row">
        <div class="col" v-for="item in datalist" :key="item.id">
          <div
            class="card"
            @click="$router.push({ path: `/device-detail/${item.id}` })"
          >
            <img
              class="xxximgs"
              :src="`${BaseUrl}/system/file/downloadFile?fid=1670898904174.jpg&fileBucket=smarthome`"
              alt=""
            />
            <a href="#" class="btn btn-primary">{{ item.name }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: {
        title01: "全面、专业、智能、成熟的网器方案",
        title02: "提供海量源于实践的成熟方案，助力开发者快速简单实现产品智能化",
        title02a: "查看全部解决方案",
      },

      datalist: [],
    };
  },

  created() {
    /*  */
    this.$homeApi.getAllDevice().then((res) => {
      // console.log(res.data, 33);
      if (res.data.code !== 0) return;
      this.datalist = res.data.data;
    });

    //
    // window.open(
    //   `/manage/system/file/downloadFile?fileBucket='smarthome'&fileName=333.png&fid='1670898904174.jpg'`
    // );
  },
};
</script>

<style lang="less" scoped>
.col01 {
  background-color: aqua;
  height: 20vw;
  .cardbox {
    display: flex;
    height: 100%;

    overflow-x: auto;
    // flex-wrap: wrap;
    .imgbox {
      // flex-wrap: wrap;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 0.2;
    }
    img {
      width: 200px;
      height: 200px;
    }
  }
}

.xxximgs {
  width: 100px;
  height: 100px;
}
</style>