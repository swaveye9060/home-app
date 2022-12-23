<template>
  <section class="pagebox">
    <PlayImgs :datalist="dataDevPic" />
    <div class="container">
      <!-- 电器wiring -->
      <div class="wiringbox">
        <div class="row mt-n2 btnbox">
          <div class="messonry-button text-center mb-6" data-aos="fade-up">
            <button
              class="port-filter"
              :class="{ 'is-checked': isChecked === -1 }"
              @click="getAll"
            >
              全部
            </button>

            <button
              class="port-filter"
              v-for="(item, i) in leftTabs"
              :key="item.id"
              :class="{ 'is-checked': isChecked === i }"
              @click="getIndex(item.id, i)"
            >
              {{ item.name }}
            </button>
          </div>
        </div>
        <!-- 内容 -->
        <Cradbox :datalist="datalist" />
      </div>
    </div>
    <Footers />
  </section>
</template>

<script>
export default {
  components: {
    TabOne: () => import("./tabs/TabOne.vue"),
    TabTwo: () => import("./tabs/TabTwo.vue"),
    Cradbox: () => import("@/components/other/Cradbox.vue"),
    PlayImgs: () => import("@/components/other/PlayImgs.vue"),
  },
  data() {
    return {
      isChecked: -1,
      datalist: [],
      leftTabs: [],
      dataDevPic: [],
    };
  },

  created() {
    /* 侧边title */
    this.$homeApi
      .getDevTypeInfo({
        type: 1,
      })
      .then((res) => {
        if (res.data.code !== 0) return;
        this.leftTabs = res.data.data;
        // this.getIndex(res.data.data[0].id);
      });

    /* 获取设备轮播图 */
    this.$homeApi.getDevPic().then((res) => {
      // console.log(res, 333);
      if (res.data.code !== 0) return;
      this.dataDevPic = res.data.data;
    });

    /* 首次调用 */
    this.getAll();
  },

  methods: {
    /* 获取所有 */
    getAll() {
      this.$homeApi.getAllDevice().then((res) => {
        if (res.data.code !== 0) return;
        this.datalist = res.data.data;
        this.isChecked = -1;
      });
    },

    /* 获取下标 */
    getIndex(id, index) {
      this.isChecked = index;
      // console.log(i, 66);
      this.listIndex = id;
      // 获取列表内容
      this.$homeApi
        .getDevByTypeId({
          id: id,
        })
        .then((res) => {
          // console.log(res, 33);
          if (res.data.code !== 0) return;
          this.datalist = res.data.data;
        });
    },
  },
};
</script>

<style lang="less" scoped>
.pagebox {
  // height: 2000px;
  // height: 50px;
  // border: 1px solid #000;
}

.wiringbox {
  padding: 5vh 0 3vh;
}

.btnbox {
  padding: 2vh 0;
}

.messonry-button .port-filter {
  position: relative;
  border: 0;
  background-color: #fff;
  padding: 0;
  margin: 0 30px 10px 0;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  color: #212121;
}

.messonry-button .port-filter:before {
  background-color: #122179;
  content: "";
  position: absolute;
  left: auto;
  right: 0;
  bottom: 0;
  height: 2px;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  width: 0;
}

.messonry-button .port-filter:last-child {
  margin-right: 0;
}

.messonry-button .port-filter:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.messonry-button .port-filter.is-checked {
  color: #122179;
}

.messonry-button .port-filter.is-checked:before {
  left: 0;
  right: auto;
  width: 100%;
}

.messonry-button .port-filter:hover {
  color: #122179;
  left: 0;
  right: auto;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.messonry-button .port-filter:hover:before {
  left: 0;
  right: auto;
  width: 100%;
}
</style>