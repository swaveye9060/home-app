<template>
  <section class="container">
    <section>
      <div
        class="row"
        v-for="item in datalist.filter((e) => e.type === 1)"
        :key="item.id"
      >
        <pre>{{ item }}</pre>
      </div>
    </section>
    <section>
      <div>
        <h3>方案介绍</h3>
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
        <h3>适用场景</h3>
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
</template>

<script>
export default {
  data() {
    return {
      datalist: [],
      titlelist: ["方案介绍", "适用场景", "技术优势", "模组", "详情"],
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
        this.datalist = res.data.data;
      });
  },
};
</script>

<style>
</style>