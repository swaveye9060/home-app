<!-- 
  * Author: ye9060
  * 2022-12-13 ~ 2022-12-13
  * [轮播图]
 -->

 <template>
  <section>
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-touch="true"
      data-bs-interval="5000"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/image/1-1.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item xxx">
          <img
            src="../../assets/image/1-2.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/image/1-3.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
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
  name: "Shuffling",
};
</script>
 
<style lang="less" scoped>
.xxx img {
  transition: all 0.5s;
}
.xxx:hover img {
  background-color: red;
  transform: scale(1.1);
}
</style>