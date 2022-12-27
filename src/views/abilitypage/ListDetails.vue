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
          <div class="row">
            <div
              class="col-12 col-sm-6 colbox"
              v-for="item in datalist[1].value"
              :key="item.id"
            >
              <div class="textbox">
                <div class="title">
                  <h4>{{ item.titleOne }}</h4>
                  <span></span>
                </div>
                <p>{{ item.content }}</p>
              </div>
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
          <div v-for="item in datalist[2].value" :key="item.id">
            <div class="cardbox">
              <div class="imgbox">
                <img
                  class="imgs"
                  :src="`${BaseUrl}/system/file/downloadFile?fid=${item.fid}&fileBucket=smarthome&fileName=333.jpeg`"
                  alt="..."
                />
              </div>
              <div class="cardbody">
                <h5>{{ item.titleOne }}</h5>
                <p>{{ item.content }}</p>
                <!-- <a href="#" class="card-link">Card link</a> -->
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
              class="col-12 col-sm-6 col-lg-3 colbox"
              v-for="item in datalist[3].value"
              :key="item.id"
            >
              <div class="textbox">
                <div class="title">
                  <h4>{{ item.titleOne }}</h4>
                  <span></span>
                </div>
                <p>{{ item.content }}</p>
              </div>
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
          <div class="row">
            <div
              class="col-12 col-sm-6 colbox"
              v-for="(item, i) in datalist[4].value"
              :key="item + i"
            >
              <div class="textbox">
                <div class="title">
                  <h4>{{ item.titleOne }}</h4>
                  <span></span>
                </div>
                <p>{{ item.content }}</p>
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
          label: "功能介绍",
          type: 2,
          value: [],
        },
        {
          label: "应用场景",
          type: 3,
          value: [],
        },
        {
          label: "特色优势",
          type: 4,
          value: [],
        },
        {
          label: "资源中心",
          type: 5,
          value: [
            {
              titleOne: "服务接入指南",
              content: "引导开发者正确接入该服务，并给出过程问题的应对方案。",
            },
            {
              titleOne: "服务接口文档",
              content: "为开发者提供免费的API接口及详细的调用接口说明文档。",
            },
          ],
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
  padding: 3vh 0 8vh;

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

.name1,
.name3,
.name4 {
  .colbox {
    // border: 1px solid #000;
    margin-bottom: 2vh;
  }

  .textbox {
    height: 100%;
    background-color: #fff;
    padding: 4vh 2vw 3vh;
    border-radius: 8px;

    .title {
      h4 {
        display: inline-block;
        position: relative;
        font-size: 20px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.7);
        padding-bottom: 6px;
        z-index: 1;
        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 10px;
          background-color: #90ade8;
          transform: translateY(-6px);
          z-index: -1;
        }
      }
    }
  }
}

.name3,
.name4 {
  .textbox {
    .title {
      h4 {
        font-size: 18px;
        &::after {
          background-color: transparent;
        }
      }
    }
  }
}

.name3 {
  background-color: rgba(0, 0, 0, 0.8) !important;
  h3 {
    color: #fff;
  }
}

.name4 {
  background-color: #fff !important;

  .textbox {
    box-shadow: 0 4px 16px 0 rgb(26 40 114 / 8%),
      0 3px 6px -10px rgb(26 40 114 / 20%);
    transition: all 0.1s;

    &:hover {
      transform: translate(0, -8px);
    }
  }
}

.name2 {
  .cardbox {
    position: relative;

    .imgbox {
      position: relative;
      width: 98%;
      // height: 50vh;
      // border: 1px solid #000;
      img {
        margin-left: 2%;
        width: 100%;
        border-radius: 30px 8px 8px 8px;
      }

      &::after {
        content: "";
        display: block;
        margin-left: 2%;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #000000;
        border-radius: 30px 8px 8px 8px;
        opacity: 0.4;
        z-index: 1;
      }

      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #e8ebf6;
        transform: translateY(-24px);
        z-index: -1;
        border-radius: 40px 8px 8px 8px;
      }
    }

    .cardbody {
      width: 40%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 7vw;

      z-index: 2;

      overflow: hidden;

      h5,
      p {
        color: #fff;
      }

      h5 {
        font-weight: 600;
        margin-top: 3vh;
        padding-bottom: 2vh;
        &::before {
          font-weight: 700;
          content: "“";
          display: block;
          font-size: 100px;
          transform: translateY(30px);
          opacity: 0.9;
        }
      }
    }
  }
}
</style>