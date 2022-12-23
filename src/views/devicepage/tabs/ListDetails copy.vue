<template>
  <section v-if="false">
    <section>
      <div
        class="row"
        v-for="item in datalist.filter((e) => e.type === 1)"
        :key="item.id"
      >
        <section class="imgsbox">
          <!--  carousel-dark 黑色 -->
          <div
            id="carouselExampleDark"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div
                class="carousel-item"
                data-bs-interval="10000"
                :class="{ active: true }"
              >
                <img
                  class="imgs"
                  :src="`${BaseUrl}/system/file/downloadFile?fid=${item.fid}&fileBucket=smarthome`"
                  alt="..."
                />
                <!-- playtextbox 去除后文案居中 -->
                <div class="carousel-caption d-none d-md-block playtextbox">
                  <h5>{{ item.titleOne }}</h5>
                  <p>{{ item.content }}</p>
                  <p>{{ item.titleTwo }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <section class="container">
      <div>
        <h3 class="text-center">方案介绍</h3>
        <div
          class="row"
          v-for="item in datalist.filter((e) => e.type === 2)"
          :key="item.id"
        >
          <div class="col-6">
            <h4>{{ item.titleOne }}</h4>
            <p>{{ item.content }}</p>
          </div>
          <div class="col">
            <img
              class="imgs"
              :src="`${BaseUrl}/system/file/downloadFile?fid=${item.fid}&fileBucket=smarthome&fileName=333.jpeg`"
              alt="..."
            />
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-center">适用场景</h3>
        <div class="row">
          <div
            class="col-4"
            v-for="item in datalist.filter((e) => e.type === 3)"
            :key="item.id"
          >
            <div>
              <img
                class="imgs"
                :src="`${BaseUrl}/system/file/downloadFile?fid=${item.fid}&fileBucket=smarthome&fileName=333.jpeg`"
                alt="..."
              />
            </div>
            <div>
              <h5>{{ item.titleOne }}</h5>
              <p>{{ item.content }}</p>
            </div>
          </div>
          <!-- <pre>{{ item }}</pre> -->
        </div>
      </div>

      <div>
        <h3>技术优势</h3>
        <div class="row">
          <div
            class="col-6"
            v-for="item in datalist.filter((e) => e.type === 4)"
            :key="item.id"
          >
            <h5>{{ item.titleOne }}</h5>
            <p>{{ item.content }}</p>
          </div>
          <!-- <pre>{{ item }}</pre> -->
        </div>
      </div>
      <div>
        <h3>模组</h3>
        <div class="row">
          <div
            v-for="item in datalist.filter((e) => e.type === 5)"
            :key="item.id"
          >
            <div>
              <img
                class="imgs"
                :src="`${BaseUrl}/system/file/downloadFile?fid=${item.fid}&fileBucket=smarthome&fileName=333.jpeg`"
                alt="..."
              />
            </div>
            <div class="col-6">{{ item.titleOne }}</div>
            <div class="col">{{ item.content }}</div>
            <!-- <pre>{{ item }}</pre> -->
          </div>
        </div>
      </div>
      <div>
        <h3>详情</h3>
        <div
          class="row"
          v-for="item in datalist.filter((e) => e.type === 6)"
          :key="item.id"
        >
          <pre>{{ item }}</pre>
          <div class="col-6">1 of 2</div>
          <div class="col">2 of 2</div>
        </div>
      </div>
    </section>
  </section>
  <div v-else>333</div>
</template>

<script>
export default {
  data() {
    return {
      xxx: [],
      datalist: [
        {
          label: "banner",
          type: 1,
          value: [],
        },
        {
          label: "方案介绍",
          type: 2,
          value: [],
        },
        {
          label: "适用场景",
          type: 3,
          value: [],
        },
        {
          label: "技术优势",
          type: 4,
          value: [],
        },
        {
          label: "模组",
          type: 5,
          value: [],
        },
        {
          label: "详情",
          type: 6,
          value: [],
        },
      ],
    };
  },
  created() {
    this.$homeApi
      .getInfoByDevId({
        id: this.$route.params.id,
      })
      .then((res) => {
        // console.log(res, 33);
        if (res.data.code !== 0) return;

        res.data.data.find((e) => {
          this.datalist.forEach((el) => {
            if (e.type == el.type) {
              el.value.push(e);
            }
          });
        });
      });
  },
};
</script>


<style lang="less" scoped>
.imgsbox {
  .carousel-inner {
    img {
      width: 100%;
    }

    // 文案
    .playtextbox {
      color: #212121;
      // border: .0625rem solid #000;
      text-align: left;
      height: 90%;
      display: flex !important;
      flex-direction: column;
      justify-content: center;
    }

    h5 {
      font-size: 2.625rem;
      font-weight: 600;
    }

    p {
      padding: 2vh 0;
    }
  }
}
</style>