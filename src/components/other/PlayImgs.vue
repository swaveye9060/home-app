<!-- 
  * Author: ye9060
  * 2022-12-23 ~ 2022-12-23
  * [轮播图组件]
 -->

<template>
  <section class="playimgsbox">
    <!--  carousel-dark 黑色 -->
    <div
      id="carouselExampleDark"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators indicatorsbox">
        <button
          v-for="(item, i) in datalist"
          :key="item.id + item"
          type="button"
          data-bs-target="#carouselExampleDark"
          :data-bs-slide-to="i"
          :class="{ active: i === 0 }"
          aria-current="true"
          :aria-label="`Slide ${i + 1}`"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          data-bs-interval="10000"
          v-for="(item, i) in datalist"
          :key="item.id"
          :class="{ active: i === 0 }"
        >
          <img
            class="imgs"
            :src="`${BaseUrl}/system/file/downloadFile?fid=${item.fid}&fileBucket=smarthome`"
            alt="..."
          />
          <!-- playtextbox 去除后文案居中 -->
          <div class="carousel-caption d-none d-md-block playtextbox">
            <h5>{{ item.titleOne }}</h5>
            <p>
              {{ item.content }}
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
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
/* --- */
.playimgsbox {
  min-height: 230px;
  background-color: rgba(0, 0, 0, 0.01);
}

/* 轮播标记点 */
.indicatorsbox {
  justify-content: flex-start;
}

.carousel-indicators [data-bs-target] {
  background-color: #122179;
}

.carousel-inner {
  .carousel-item {
    border: 0px solid #f00;
  }

  img {
    width: 100%;
  }

  // 文案

  .playtextbox {
    color: #212121;
    // border: 1px solid #000;
    text-align: left;
    height: 90%;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
  }

  h5 {
    font-size: 42px;
    font-weight: 600;
  }

  p {
    padding: 2vh 0;
  }
}
</style>