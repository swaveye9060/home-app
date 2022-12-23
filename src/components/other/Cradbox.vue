<!-- 
  * Author: ye9060
  * 2022-12-22 ~ 2022-12-22
  * [卡片组件]
 -->

<template>
  <section class="text-center">
    <div class="row mb-10">
      <div
        class="col-lg-3 col-md-4 mb-12 cardbox"
        v-for="item in datalist"
        :key="item.id"
        @click="$router.push({ path: `/device-detail/${item.id}` })"
      >
        <figure class="figure">
          <section>
            <img
              class="xxximgs"
              :src="`${BaseUrl}/system/file/downloadFile?fid=${item.icon}&fileBucket=smarthome`"
              alt=""
            />
            <div class="mask"></div>
          </section>
          <figcaption class="figure-caption">
            <div class="info">{{ item.name }}</div>
          </figcaption>
        </figure>
        <div class="textbox">
          <div class="text01">点击查看详情</div>
          <div class="text02">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    datalist: Array,
  },
};
</script>

<style lang="less" scoped>
@keyframes plsycard {
  40% {
    transform: rotateY(90deg);
  }
}

.cardbox {
  padding: 0 1vw;
  margin-bottom: 2.8vh;
  cursor: pointer;

  animation: plsycard 0.7s;

  &:hover {
    .text01 {
      transform: translateX(-50%) rotateX(0deg);
      transition: all 0.5s;
    }

    .text02 {
      transform: translateX(-50%) rotateX(90deg);
    }
  }

  // &:nth-child(4n - 1),
  // &:nth-child(4n - 2) {
  //   // margin-bottom: 2vw;
  //   // border: 1px solid #000;
  // }
}

///
.figure {
  &:hover {
    .mask {
      opacity: 0.7;
    }

    img {
      transform: scale(1.05) rotate(3deg);
    }

    .figure-caption {
      .info {
        opacity: 1;
        // top: 40%;
        transform: translateY(50%) scale(1.02);
        // transform: translateY(50%) rotateX(360deg) scale(1.02);
      }
    }
  }

  position: relative;
  width: 100%;
  a {
    display: block;
  }

  img {
    width: 100%;
    z-index: -1;
    transition: all 0.3s ease;
  }

  .mask {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    content: "";
    background-color: black;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }

  .figure-caption {
    box-sizing: border-box;
    .info {
      position: absolute;
      top: 40%;
      transform: translateY(-50%);
      opacity: 0;
      transition: all 0.3s ease 0s;
      align-items: center;
      font-size: 1.2vw;
      width: 100%;
      font-weight: 600;
      color: #fff;
    }
  }
}

///
.textbox {
  position: relative;
  height: 30px;
  font-size: 1vw;
  // font-size: 14px;
  .text01 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) rotateX(90deg);
    color: #0d6efd;
  }

  .text02 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) rotateX(0deg);
    transition: all 0.2s;
  }
}
</style>