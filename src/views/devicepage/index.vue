<template>
  <section class="pagebox">
    <div class="container text-center">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-tabs01-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-tabs01"
            type="button"
            role="tab"
            aria-controls="pills-tabs01"
            aria-selected="true"
          >
            快速解决方案
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-tab02-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-tab02"
            type="button"
            role="tab"
            aria-controls="pills-tab02"
            aria-selected="false"
          >
            设备解决方案
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-tab03-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-tab03"
            type="button"
            role="tab"
            aria-controls="pills-tab03"
            aria-selected="false"
          >
            行业解决方案
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-tabs01"
          role="tabpanel"
          aria-labelledby="pills-tabs01-tab"
          tabindex="0"
        >
          ...666
        </div>
        <div
          class="tab-pane fade"
          id="pills-tab02"
          role="tabpanel"
          aria-labelledby="pills-tab02-tab"
          tabindex="0"
        >
          <TabTwo />
        </div>
        <div
          class="tab-pane fade"
          id="pills-tab03"
          role="tabpanel"
          aria-labelledby="pills-tab03-tab"
          tabindex="0"
        >
          ...4
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    TabOne: () => import("./tabs/TabOne.vue"),
    TabTwo: () => import("./tabs/TabTwo.vue"),
  },
};
</script>

<style lang="less" scoped>
// .pagebox {
//   height: 50px;
//   border: 1px solid #000;
// }
</style>