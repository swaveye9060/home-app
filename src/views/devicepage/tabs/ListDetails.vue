<template>
  <section class="box">
    <section class="bannerbox">
      <div class="row" v-for="item in datalist[0].value" :key="item.id">
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
                  <p v-if="item.titleTwo">{{ item.titleTwo }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <!-- 内容 -->
    <section>
      <!-- name1 -->
      <div class="namebox name1" v-if="datalist[1].value.length">
        <div class="container">
          <h3 class="text-center">
            {{ datalist[1].label }}
          </h3>
          <div class="row" v-for="item in datalist[1].value" :key="item.id">
            <div class="col-8 textbox">
              <h4>{{ item.titleOne }}</h4>
              <p>{{ item.content }}</p>
            </div>
            <div class="col-4 imgbox">
              <img
                class="imgs"
                :src="`${BaseUrl}/system/file/downloadFile?fid=${item.fid}&fileBucket=smarthome&fileName=333.jpeg`"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <!-- name2 -->
      <div class="namebox name2" v-if="datalist[2].value.length">
        <div class="container">
          <h3 class="text-center">
            {{ datalist[2].label }}
          </h3>
          <div class="row mb-10">
            <div
              class="col-lg-4 col-md-6 mb-12 cardbox"
              v-for="item in datalist[2].value"
              :key="item.id"
            >
              <div class="card">
                <img
                  class="imgs"
                  :src="`${BaseUrl}/system/file/downloadFile?fid=${item.fid}&fileBucket=smarthome&fileName=333.jpeg`"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{{ item.titleOne }}</h5>
                  <p class="card-text">
                    {{ item.content }}
                  </p>
                  <!-- <a href="#" class="card-link">Card link</a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- name3 -->
      <div class="namebox name3" v-if="datalist[3].value.length">
        <div class="container">
          <h3 class="text-center">
            {{ datalist[3].label }}
          </h3>
          <div class="row">
            <div
              class="col-6 colbox"
              v-for="item in datalist[3].value"
              :key="item.id"
            >
              <h5>{{ item.titleOne }}</h5>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- name4 -->
      <div class="namebox name4" v-if="datalist[4].value.length">
        <div class="container">
          <h3 class="text-center">
            {{ datalist[4].label }}
          </h3>
          <div class="row mb-10 rowbox">
            <div
              class="col-lg-4 col-md-6 mb-12 cardbox"
              v-for="item in datalist[4].value"
              :key="item.id"
            >
              <div class="card">
                <img
                  class="imgs"
                  :src="`${BaseUrl}/system/file/downloadFile?fid=${item.fid}&fileBucket=smarthome&fileName=333.jpeg`"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{{ item.titleOne }}</h5>
                  <p class="card-text">
                    {{ item.content }}
                  </p>
                  <!-- <a href="#" class="card-link">Card link</a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footers />
  </section>
</template>

<script>
export default {
  data() {
    return {
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
.box {
  width: 100%;
  overflow: hidden;
  // min-height: 2000px;
}

.bannerbox {
  border-bottom: 30px solid #90ade8;
}

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

/* 内容 */
.card {
  height: 100%;
}

.namebox {
  padding: 3vh 0 6vh;

  &:nth-child(2n - 1) {
    background-color: #f0f2f5;
  }

  &:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.01);
  }

  h3 {
    font-weight: 600;
    padding: 4vh 0;
  }

  p {
    color: rgba(0, 0, 0, 0.9);
  }
}

.name1 {
  .textbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // border: 1px solid #000;
    padding-right: 3vw;

    h4 {
      font-weight: 600;
      color: rgba(0, 0, 0, 0.7);
    }

    p {
      padding: 2vh 0 1vh;
    }
  }

  .imgbox {
    img {
      width: 100%;
    }
  }
}

.name2 {
  .cardbox {
    transition: 0.3s;
    // border: 1px solid #000;

    &:hover {
      // transform: translateY(-6px);
    }

    h5 {
      padding: 1vh;
      font-size: 18px;
      font-weight: 600;
    }

    p {
      padding: 0 1vh 2vh;
    }
  }
}

.name3 {
  .colbox {
    padding: 1vh 0;

    &:nth-child(2n - 1) {
      padding-right: 3vw;
    }
    &:nth-child(2n) {
      padding-left: 3vw;
    }
  }
  h5 {
    font-weight: 600;
    font-size: 18px;
  }
}

.name4 {
  .rowbox {
    padding: 9vh 5vw 7vh;
    box-shadow: inset 0 10px 20px 0 rgb(152 163 183 / 50%),
      inset 0 -55px 50px 0 #f4f5f9;
    background: #e9eaf0;
    border-radius: 8px;
  }

  .cardbox {
    // transition: 0.3s;
    // border: 1px solid #000;

    // &:hover {
    //   transform: translateY(-6px);
    // }

    h5 {
      padding: 1vh;
      font-size: 18px;
      font-weight: 600;
    }

    p {
      padding: 0 1vh 2vh;
    }
  }
}
</style>