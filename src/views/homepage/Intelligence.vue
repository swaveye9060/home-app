<!-- 
  * Author: ye9060
  * 2022-12-20 ~ 2022-12-20
  * [智能化]
 -->


<template>
  <section class="homebox box">
    <div class="container text-center">
      <HomeTitle :list="list" />

      <div class="playbox">
        <div class="rowbox">
          <div
            class="cardbox"
            :class="{ active: i === boxIndex }"
            v-for="(item, i) in 5"
            :key="i"
            @mouseover="mouseover(i)"
            @mouseout="mouseout"
          >
            <img
              class="img"
              :src="require(`../../assets/image/homePage/int-00${i + 1}.png`)"
              alt=""
            />
            <img
              class="imga"
              :src="require(`../../assets/image/homePage/int-00${i + 1}-a.png`)"
              alt=""
            />
            <img
              class="imgbg"
              :src="
                require(`../../assets/image/homePage/int-00${i + 1}-bg.png`)
              "
              alt=""
            />
            <h5>注册认证</h5>
            <p>支持个人/企业开发者</p>
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
      timeout: null,
      isplay: true,
      index: 0,
      boxIndex: 0,
      list: {
        title01: "快速接入，开启智能化",
        title02: "提供简单高效的接入流程，助力开发者快速实现产品智能化",
        title02a: "立即体验 >",
        url: "/",
      },
    };
  },

  mounted() {
    this.timeout = setInterval(() => {
      if (this.isplay) {
        this.boxIndex++;
        if (this.boxIndex >= 5) {
          this.boxIndex = 0;
        }
      }
    }, 3000);
  },

  beforeDestroy() {
    this.timeout = null;
    this.isplay = false;
  },

  methods: {
    mouseover(i) {
      this.boxIndex = i;
      this.timeout = null;
      this.isplay = false;
    },

    mouseout() {
      this.isplay = true;
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  background-color: #f4f5f9;
}

.playbox {
  // position: relative;
  // height: 130px;
}

.rowbox {
  width: 100%;
  // position: absolute;
  // top: 0;
  // left: 0;
  display: flex;
  // justify-content: space-between;
  // flex-wrap: nowrap;
  transition: all 0.3s;
}

.cardbox {
  flex: 0.2;
  position: relative;

  text-align: left;
  background-color: #fff;
  border-radius: 4px;
  padding: 50px 30px 0;
  cursor: pointer;

  margin-right: 16px;
  &:last-child {
    margin-right: 0;
  }

  h5 {
    font-size: 18px;
    font-weight: 600;
    white-space: nowrap;
  }

  p {
    white-space: nowrap;
  }

  img {
    position: absolute;
    transition: all 0.5s ease-in-out;
  }

  .img {
    width: 36%;
    top: -25%;
    left: 10px;
  }

  .imga {
    transform: rotateX(90deg);
    top: 4px;
    left: 26px;
    width: 20%;
  }

  .imgbg {
    display: none;
    top: -30%;
    right: 0;
    width: 90%;
  }
}

.active {
  background-color: #2468f2;

  h5 {
    color: #fff;
  }

  p {
    color: rgba(255, 255, 255, 0.6);
  }
  .img {
    transform: rotateX(90deg);
  }
  .imga {
    transform: rotateX(0deg);
  }
  .imgbg {
    display: block;
  }
}

@media (max-width: 1200px) {
  .rowbox {
    flex-wrap: wrap;

    .cardbox {
      flex: 0.25;
      margin-right: 16px;
      &:nth-child(4) {
        margin-right: 0;
      }
      &:nth-child(5) {
        margin-top: 40px;
        flex: 0.19;
      }
    }
  }
}
@media (max-width: 991px) {
  .rowbox {
    flex-wrap: wrap;
    .cardbox {
      flex: 0.4;
      margin-right: 16px;
      &:nth-child(3) {
        margin-right: 0;
      }
      &:nth-child(n + 4) {
        margin-top: 40px;
        flex: 0.297;
        margin-right: 16px;
      }
    }
  }
}
@media (max-width: 768px) {
  .rowbox {
    flex-wrap: wrap;
    .cardbox {
      flex: 0.5;
      margin-right: 16px;
      &:nth-child(n + 3) {
        margin-top: 40px;
        flex: 0.5;
        margin-right: 16px;
      }
      &:nth-child(2n) {
        margin-right: 0;
      }
      &:nth-child(5) {
        flex: 0.43;
      }
    }
  }
}
@media (max-width: 479px) {
  .rowbox {
    flex-wrap: wrap;
    justify-content: center;
    .cardbox {
      flex: 0.6;
      &:nth-child(n + 1) {
        margin-top: 40px;
        flex: 0.6;
        margin-right: 0;
      }
    }
  }
}
</style>