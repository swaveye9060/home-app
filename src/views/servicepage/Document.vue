<template>
  <section class="box">
    <div class="left">
      <h5 class="titleh5">文档中心</h5>
      <span class="titlespan"></span>
      <div v-if="false" class="input-group mb-3">
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
          <!-- 2级 -->
          <div
            class="collapse"
            :class="{ show: item.id === showID }"
            :id="`home-collapse-${item.id}`"
          >
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1">
              <li v-for="ite in item.children" :key="ite.id">
                <div
                  class="title02"
                  :class="{ active: ite.id === activeID }"
                  @click="handlerActive(ite, item)"
                >
                  <!-- 3级 -->
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
                    <!-- /// -->
                    <div
                      class="collapse title02sel"
                      :class="{ show: ite.id === showItemID }"
                      :id="`home-collapse-${ite.id}`"
                    >
                      <ul class="btn-toggle-nav list-unstyled fw-normal pb-1">
                        <li
                          v-for="sub in ite.children"
                          :key="sub.id"
                          @click.stop="handlerActive(sub, ite, item.titleOne)"
                          :class="{ active: sub.id === activeID }"
                        >
                          <div @click="getContent(ite.content)">
                            <i class="bi bi-file-word-fill icon02"></i>
                            <span>{{ sub.titleOne }}</span>
                          </div>
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
      <div class="topbox">
        <ul>
          <li v-if="titlebox.title">{{ titlebox.title }}<i>/</i></li>
          <li v-if="titlebox.title01">{{ titlebox.title01 }}<i>/</i></li>
          <li v-if="titlebox.title02">{{ titlebox.title02 }}</li>
        </ul>
        <p class="time">
          更新时间:
          <span>{{ updateTime }}</span>
        </p>
      </div>

      <div class="output ql-snow">
        <div class="ql-editor" v-html="html01"></div>
      </div>

      <div class="btmbox" v-show="false">
        <div>
          <h6>上一篇</h6>
          <p>已经是第一个</p>
        </div>
        <div>
          <h6>下一篇</h6>
          <p>产品支持小优语音控制</p>
        </div>
      </div>
    </div>
    <div v-if="false" class="right">
      <div class="flex-shrink-0 p-3 bg-white" style="width: 280px">
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
      showID: 0,
      showItemID: 0,
      activeID: 0,
      content: "",
      datalist: [],
      html01: [],
      titlebox: {},
      updateTime: "",
      iteData: JSON.parse(sessionStorage.getItem("ite")),
      itemData: JSON.parse(sessionStorage.getItem("item")),
      treeItem: sessionStorage.getItem("treeItem"),
    };
  },

  created() {
    this.$homeApi
      .getDocumentCenter({ typeId: this.$route.path.split("/")[2] })
      .then((res) => {
        // console.log(res.data.data[0].children[0].content, 33);
        if (res.data.code !== 0) return;
        this.datalist = res.data.data;
        this.showID = this.datalist[0].id;

        // 确保数据存在
        let a = [];
        this.datalist.forEach((e) => {
          if (e.children.length > 0) {
            a.push(e.children);
          }
        });
        let b = this.datalist.filter((e) => e.id === a[0][0].parentId);

        // 首次进入页面 & 刷新页面回显
        if (this.iteData && this.itemData) {
          this.getContent(this.iteData.content);
          this.handlerActive(this.iteData, this.itemData, this.treeItem);
        } else {
          this.getContent(a[0][0].content);
          this.handlerActive(a[0][0], b[0]);
        }
      });
  },

  methods: {
    getContent(html) {
      if (!html) {
        this.html01 = "暂无数据。。。";
        return;
      }
      this.html01 = html.replace(/\r\n/g, "<br/>");
    },

    handlerActive(ite, item, treeItem) {
      console.log(ite, item, treeItem, 333);
      if (ite.children && ite.children.length !== 0) return;
      // console.log(data, 6);
      this.activeID = ite.id;
      this.showID = item.parentId == 0 ? ite.parentId : item.parentId;
      this.showItemID = ite.parentId;
      this.updateTime = ite.updateTime;
      // 内容 > 面包屑
      this.titlebox = {
        title01: item.titleOne || "",
        title02: ite.titleOne || "",
        title: treeItem,
      };
      sessionStorage.setItem("ite", JSON.stringify(ite));
      sessionStorage.setItem("item", JSON.stringify(item));
      // console.log(treeItem, 6);
      treeItem = treeItem ? treeItem : "";
      sessionStorage.setItem("treeItem", treeItem);
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  display: flex;
  justify-content: space-between;
  min-height: calc(100vh - 120px);
  overflow: hidden;
}

.titleh5 {
  position: relative;
  font-size: 18px;
  font-weight: 600;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 72px;
    height: 9px;
    background-color: #90ade8;
    margin-bottom: 6px;
    transform: translateY(-10px);
    z-index: -1;
  }
}

.left {
  width: 16%;
  padding: 20px;
  padding-left: 30px;
  border-right: 1px dashed rgba(0, 0, 0, 0.1);

  .active {
    background-color: rgba(191, 213, 255, 0.4);
    span {
      color: #333;
    }
  }

  /* title */
  .title01 {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.75);
    font-weight: 600;
    line-height: 36px;

    span {
      margin-left: 6px;
    }
  }

  .title02 {
    color: rgba(0, 0, 0, 0.7);
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
    color: rgba(0, 0, 0, 0.5);
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
  width: 84%;
  padding: 8px 20px 80px;

  .topbox,
  .btmbox {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0;
    }
  }

  .topbox {
    .time {
      color: rgba(0, 0, 0, 0.3);
    }
    ul {
      display: flex;
      li {
        i {
          padding: 0 6px;
          color: rgba(0, 0, 0, 0.3);
        }
        &:not(:last-child) {
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  .btmbox {
    text-align: center;
  }
}
.right {
}

span {
  cursor: pointer;
}
</style>