<!-- 
  * Author: ye9060
  * 2022-12-16 ~ 2022-12-16
  * [数据统计]
 -->

<template>
  <section class="box">
    <div class="funfact-section d-flex flex-column justify-content-center">
      <div class="container-fluid p-0">
        <div class="row no-gutters counters align-items-center">
          <div
            class="col-lg-3 col-6 item"
            v-for="item in datalist"
            :key="item.id"
          >
            <div
              class="single-fun-fact-wrap aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="counter-area">
                <strong class="counter">
                  <CountTo :endVal="item.content * 1" suffix="+" />
                </strong>
                <!-- <span class="text-white ml-2">+</span> -->
              </div>
              <div class="counter-content">
                <h3 class="title">{{ item.name }}</h3>
              </div>
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
      datalist: [],
    };
  },

  created() {
    this.$homeApi
      .getDevTypeInfo({
        type: 5,
      })
      .then((res) => {
        // console.log(res, 33);
        if (res.data.code !== 0) return;

        // 获取列表内容
        this.$homeApi
          .getDevByTypeId({
            id: res.data.data[0].id,
          })
          .then((res) => {
            // console.log(res, 33);
            if (res.data.code !== 0) return;
            this.datalist = res.data.data;
          });
      });
  },
};
</script>

<style lang="less" scoped>
.box {
  overflow: hidden;
}

.funfact-section {
  background-image: url("../../assets/image/1.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 400px;
  position: relative;
}

@media (max-width: 575px) {
  .funfact-section {
    min-height: 350px;
  }
}

@media (max-width: 479px) {
  .funfact-section {
    min-height: 300px;
  }
}

.funfact-section:after {
  background-color: rgba(0, 0, 0, 0.8);
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
}

.funfact-section .single-fun-fact-wrap {
  z-index: 9;
  position: relative;
  text-align: center;
}

@media (max-width: 991px) {
  .funfact-section .single-fun-fact-wrap {
    margin: 20px 0;
  }
}

.funfact-section .single-fun-fact-wrap .counter-area .counter,
.funfact-section .single-fun-fact-wrap .counter-area span {
  font-size: 60px;
  color: #fff;
}

@media (max-width: 575px) {
  .funfact-section .single-fun-fact-wrap .counter-area .counter,
  .funfact-section .single-fun-fact-wrap .counter-area span {
    font-size: 45px;
  }
}

@media (max-width: 479px) {
  .funfact-section .single-fun-fact-wrap .counter-area .counter,
  .funfact-section .single-fun-fact-wrap .counter-area span {
    font-size: 35px;
  }
}

.funfact-section .single-fun-fact-wrap .counter-content .title {
  font-size: 20px;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
}

@media (max-width: 575px) {
  .funfact-section .single-fun-fact-wrap .counter-content .title {
    font-size: 16px;
  }
}

@media (max-width: 479px) {
  .funfact-section .single-fun-fact-wrap .counter-content .title {
    font-size: 13px;
  }
}
</style>