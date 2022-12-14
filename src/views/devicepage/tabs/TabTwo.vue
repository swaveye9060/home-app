<!-- 
  * Author: ye9060
  * 2022-12-13 ~ 2022-12-14
  * [网器方案-设备解决方案]
 -->

<template>
  <section class="container">
    <div class="d-flex align-items-start bigbox">
      <div
        class="nav flex-column nav-pills me-3 lbox"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          v-for="(item, i) in leftTabs"
          :key="item.id"
          class="nav-link"
          :class="{ active: i === 0 }"
          :id="`v-pills-${listIndex}-tab`"
          data-bs-toggle="pill"
          :data-bs-target="`#v-pills-${listIndex}`"
          type="button"
          role="tab"
          :aria-controls="`v-pills-${listIndex}`"
          aria-selected="true"
          @click="getIndex(item.id)"
        >
          {{ item.name }}
        </button>
      </div>

      <div class="tab-content rbox" id="v-pills-tabContent">
        <div
          class="tab-pane fade show active"
          :id="`v-pills-${listIndex}`"
          role="tabpanel"
          :aria-labelledby="`v-pills-${listIndex}-tab`"
          tabindex="0"
        >
          <!-- <pre>{{ datalist }}</pre> -->
          <section class="cardbox">
            <div
              class="listbox"
              v-for="(item, i) in datalist"
              :key="i"
              @click="$router.push({ path: `/device-detail/${item.id}` })"
            >
              <img
                class="imgs"
                :src="`${BaseUrl}/system/file/downloadFile?fid=${item.icon}&fileBucket=smarthome&fileName=333.jpeg`"
                alt="..."
              />
              <p>{{ item.name }}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      listIndex: 0,
      leftTabs: [],
      datalist: [],
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
        this.getIndex(res.data.data[0].id);
      });

    /* 首次调用 */
  },

  methods: {
    /* 获取下标 */
    getIndex(id) {
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
.bigbox {
  width: 100%;
}
.lbox {
  flex: 0.2;
}
.rbox {
  flex: 1;
}

.cardbox {
  border: 1px solid #000;
  display: flex;
  flex-wrap: wrap;
}
.listbox {
  border: 1px solid #f00;
  margin-right: 5px;
}
</style>