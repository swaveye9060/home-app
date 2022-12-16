<!-- 
  * Author: ye9060
  * 2022-12-16 ~ 2022-12-16
  * [服务]
 -->

<template>
  <section class="box">
    <div class="container text-center">
      <HomeTitle :list="list" />

      <div class="row mb-10">
        <div
          class="col-lg-3 col-md-4 mb-12 cardbox"
          v-for="(item, i) in 3"
          :key="i"
        >
          <div class="card">
            <img
              src="../../assets/picture/3.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">智能家居语音</h5>
              <p class="card-text">
                行业领先的产业级智能家居语音能力，提供方言识别、自然语言处理，以及分布式唤醒等语音交互技术能力。
              </p>
              <a href="#" class="card-link">Card link</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mb-12 cardbox">
          <div class="card">
            <img
              src="../../assets/picture/3.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">智能家居语音</h5>
              <p class="card-text">行业领先的分布式唤醒等语音交互技术能力。</p>
              <a href="#" class="card-link">Card link</a>
            </div>
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
        title01: "核心技术支撑，生态资源共享",
        title02: "智能家居行业核心技术全栈开放，提供行业领先的智能服务",
        title02a: "",
        url: "/",
      },
    };
  },
};
</script>

<style lang="less" scoped>
.box {
  padding: 3vh 0;
}

.cardbox {
  &:hover {
    .card {
      transform: translateY(-6%) rotate(0deg);
    }
  }
}

.card {
  height: 100%;
  box-shadow: 0 0 8px 0px rgb(0 0 0 / 0.06);
  transition: all 0.2s ease-out;
}
</style>