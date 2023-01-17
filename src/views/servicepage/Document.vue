<template>
  <section class="box">
    <div class="left">
      <h5>文档中心</h5>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Button
        </button>
      </div>
      <!-- 导航 -->
      <ul class="list-unstyled ps-0">
        <li v-for="item in datalist" :key="item.id">
          <div
            class="title01 collapsed"
            data-bs-toggle="collapse"
            :data-bs-target="`#home-collapse-${item.id}`"
            aria-expanded="false"
          >
            <i class="bi bi-bookmarks-fill icon01"></i>
            <span>{{ item.titleOne }}</span>
          </div>
          <div
            class="collapse"
            :class="{ show: item.id === datalist[0].id }"
            :id="`home-collapse-${item.id}`"
          >
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1">
              <li v-for="ite in item.children" :key="ite.id">
                <div
                  class="title02"
                  :class="{ active: ite.id === xxxid }"
                  @click="xxx(ite)"
                >
                  <div
                    v-if="ite.children && ite.children.length === 0"
                    @click="getContent(ite.content)"
                  >
                    <i class="bi bi-file-word-fill icon02"></i>
                    <span>{{ ite.titleOne }}</span>
                  </div>

                  <!-- class=" btn btn-toggle align-items-center rounded collapsed " -->

                  <div v-else>
                    <div
                      class="title02sel"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#home-collapse-${ite.id}`"
                      aria-expanded="false"
                    >
                      <i class="bi bi-bookmarks-fill icon01"></i>
                      <span>{{ ite.titleOne }}</span>
                    </div>
                    <div
                      class="collapse title02sel"
                      :id="`home-collapse-${ite.id}`"
                    >
                      <ul class="btn-toggle-nav list-unstyled fw-normal pb-1">
                        <li
                          v-for="sub in ite.children"
                          :key="sub.id"
                          @click.stop="xxx(sub)"
                          :class="{ active: sub.id === xxxid }"
                        >
                          <i class="bi bi-file-word-fill icon02"></i>
                          <span @click="getContent(ite.content)">{{
                            sub.titleOne
                          }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="center">
      <div class="output ql-snow">
        <div class="ql-editor" v-html="html01"></div>
      </div>
    </div>
    <div class="right">
      <div v-if="false" class="flex-shrink-0 p-3 bg-white" style="width: 280px">
        <a
          href="/"
          class="
            d-flex
            align-items-center
            pb-3
            mb-3
            link-dark
            text-decoration-none
            border-bottom
          "
        >
          <span class="fs-5 fw-semibold">Collapsible</span>
        </a>
        <ul class="list-unstyled ps-0">
          <li>
            <button
              class="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              Home
            </button>
            <div class="collapse show" id="home-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" class="link-dark rounded">Overview</a></li>
                <li><a href="#" class="link-dark rounded">Updates</a></li>
                <li><a href="#" class="link-dark rounded">Reports</a></li>
              </ul>
            </div>
          </li>
          <li>
            <button
              class="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              Dashboard
            </button>
            <div class="collapse" id="dashboard-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" class="link-dark rounded">Overview</a></li>
                <li><a href="#" class="link-dark rounded">Weekly</a></li>
                <li><a href="#" class="link-dark rounded">Monthly</a></li>
                <li><a href="#" class="link-dark rounded">Annually</a></li>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button
              class="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              Orders
            </button>
            <div class="collapse" id="orders-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" class="link-dark rounded">New</a></li>
                <li><a href="#" class="link-dark rounded">Processed</a></li>
                <li><a href="#" class="link-dark rounded">Shipped</a></li>
                <li><a href="#" class="link-dark rounded">Returned</a></li>
              </ul>
            </div>
          </li>
          <li class="border-top my-3"></li>
          <li class="mb-1">
            <button
              class="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#account-collapse"
              aria-expanded="false"
            >
              Account
            </button>
            <div class="collapse" id="account-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" class="link-dark rounded">New...</a></li>
                <li><a href="#" class="link-dark rounded">Profile</a></li>
                <li><a href="#" class="link-dark rounded">Settings</a></li>
                <li><a href="#" class="link-dark rounded">Sign out</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
// import theme style  富文本回显样式
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
export default {
  data() {
    return {
      titleicon01: false,
      xxxid: 0,
      content: "",
      datalist: [],
      html01: [],
    };
  },

  created() {
    this.$homeApi
      .getDocumentCenter({ typeId: this.$route.path.split("/")[2] })
      .then((res) => {
        // console.log(res.data.data[0].children[0].content, 33);
        if (res.data.code !== 0) return;
        this.datalist = res.data.data;

        this.getContent(res.data.data[0].children[0].content);
      });
  },

  methods: {
    getContent(html) {
      // console.log(html, 333);
      if (html) this.html01 = html.replace(/\r\n/g, "<br/>");
    },

    xxx(val) {
      if (val.children && val.children.length !== 0) return;
      // console.log(val, 333);
      this.xxxid = val.id;
      // this.content = val.content;
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  display: flex;
  justify-content: space-between;
}
.left {
  width: 20%;
  padding: 20px;
  border-right: 1px dashed rgba(0, 0, 0, 0.1);

  .active {
    background-color: aquamarine;
  }

  /* title */
  .title01 {
    cursor: pointer;
    color: #333;
    font-weight: 600;
    line-height: 30px;

    span {
      margin-left: 6px;
    }
  }

  .title02 {
    color: rgba(0, 0, 0, 0.8);
    line-height: 30px;
    span {
      margin-left: 6px;
    }
  }

  .title02sel {
    cursor: pointer;
    span {
      margin-left: 6px;
    }
  }

  .collapse {
    color: rgba(0, 0, 0, 0.6);
    margin-left: 10px;
    transition: 0.3s;
  }

  /* icon */
  .icon01 {
    color: rgba(0, 0, 0, 0.7);
  }
  .icon02 {
    color: rgba(1, 0, 71, 0.6);
  }
}

.center {
  width: 60%;
}
.right {
  width: 20%;
}

span {
  cursor: pointer;
}
</style>