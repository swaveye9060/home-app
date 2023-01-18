<template>
  <section class="">
    <nav
      class="navbar navbar-expand-lg navbarbox"
      :class="{ 'header-sticky': headerSticky }"
    >
      <div class="container-fluid">
        <router-link class="navbar-brand logotitle" to="/home">{{
          homeTitle
        }}</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">按钮</span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul v-if="true" class="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              class="nav-item"
              :class="{ dropdown: item.label.length !== 0 }"
              v-for="(item, i) in navlist"
              :key="i + item"
            >
              <!-- {{ item.routerUrl }} -->
              <router-link
                :to="item.routerUrl"
                v-if="item.label.length === 0"
                :key="'001'"
                class="nav-link"
                :class="{
                  disabled: item.isdisabled,
                }"
                aria-current="page"
                href="#"
              >
                <span class="menu-text">{{ item.title }}</span>
              </router-link>
              <a
                v-else
                :key="'001'"
                class="nav-link dropdown-toggle"
                :class="{
                  disabled: item.isdisabled,
                }"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span class="menu-text">{{ item.title }}</span>
              </a>
              <ul
                class="dropdown-menu dropdown-menubox"
                aria-labelledby="navbarDropdown"
              >
                <li v-for="(sub, i) in item.label" :key="i + sub" ref="subRef">
                  <router-link
                    class="dropdown-item"
                    :class="{
                      disabled: sub.isdisabled,
                    }"
                    :to="sub.routerUrl"
                  >
                    <span class="menu-text">{{ sub.title }}</span>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
          <form v-if="false" class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div class="login">
            <a href="https://www.haigeek.com/haigeekWeb/#/" target="_blank"
              >登录</a
            >
          </div>
        </div>
      </div>
    </nav>

    <ScrollTop />
  </section>
</template>

<!--
开放能力
网器方案
技能中心
开发者
合作与生态
支持服务
-->

<script>
export default {
  components: {
    ScrollTop: () => import("./ScrollTop.vue"),
  },
  data() {
    return {
      isactive: -1,
      headerSticky: false,
      navlist: [
        {
          title: "开放能力",
          label: [],
          isdisabled: true,
          routerUrl: "/ability",
        },
        {
          title: "网器方案",
          label: [],
          isdisabled: false,
          routerUrl: "/device",
        },
        {
          title: "技能中心",
          label: [
            {
              title: "技能一",
              label: [],
              isdisabled: true,
              routerUrl: "/skill01",
            },
            {
              title: "技能二",
              label: [],
              isdisabled: true,
              routerUrl: "/skill02",
            },
            {
              title: "技能三",
              label: [],
              isdisabled: true,
              routerUrl: "/skill03",
            },
          ],
          isdisabled: false,
          routerUrl: null,
        },
        {
          title: "开发者",
          label: [],
          isdisabled: true,
          routerUrl: "/developer",
        },
        {
          title: "合作与生态",
          label: [],
          isdisabled: true,
          routerUrl: "/cooperation",
        },
        {
          title: "支持服务",
          label: [],
          isdisabled: false,
          routerUrl: "/service",
        },
      ],
    };
  },
  mounted() {
    // 滚动条的获取
    window.addEventListener("scroll", this.handleScroll, true);
  },

  methods: {
    handleScroll() {
      // console.log("滚动高度", window.pageYOffset);
      this.headerSticky = window.pageYOffset > 300 ? true : false;
    },
  },
};
</script>

<style lang="less" scoped>
nav {
  padding: 8px 30px;

  .disabled {
    color: #6c757d !important;
  }

  a {
    font-size: 15px;
    font-weight: 600;
    color: #2c3e50;

    &.router-link-exact-active {
      // color: #0d6efd !important;
      color: #122179 !important;

      // 添加底部横线
      .menu-text:before {
        left: 0;
        right: auto;
        width: 100%;
      }
    }
  }
}

.logotitle,
.logotitle:hover,
.logotitle.router-link-exact-active {
  font-size: 22px;
  color: #000 !important;
}

/* 白色文字去背景 */
// .navbarbox {
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 99;
//   border: 1px solid #000;
//   width: 100%;

//   padding: 3vh 3vw;
// }

// a,
// a:hover,
// a:focus {
//   color: #fff;
//   font-weight: 600;
//   font-size: 15px;
// }

// a .menu-text {
//   position: relative;
// }

// a:hover .menu-text:before {
//   left: 0;
//   right: auto;
//   width: 100%;
// }

// a .menu-text:before {
//   background-color: #fff;
//   content: "";
//   position: absolute;
//   left: auto;
//   right: 0;
//   bottom: -3px;
//   height: 2px;
//   -webkit-transition: 0.4s;
//   -o-transition: 0.4s;
//   transition: 0.4s;
//   width: 0;
// }

/* 黑色文字加背景 */
.navbarbox {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  box-shadow: 0 -1px 6px 0 rgba(0, 0, 255, 0.2);

  padding: 2vh 3vw;
}

a,
a:hover,
a:focus {
  color: rgba(0, 0, 0, 0.8);
  font-weight: 600;
  font-size: 15px;
}

a .menu-text {
  position: relative;
}

a:hover .menu-text:before {
  left: 0;
  right: auto;
  width: 100%;
}

a .menu-text:before {
  background-color: rgba(0, 0, 0, 0.8);
  content: "";
  position: absolute;
  left: auto;
  right: 0;
  bottom: -3px;
  height: 2px;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  width: 0;
}

.dropdown-menubox {
  a {
    color: rgba(0, 0, 0, 0.8);

    .menu-text:before {
      background-color: #122179;
    }

    &:hover {
      background-color: transparent;
    }
  }
}

/* 固定 */
.header-sticky {
  position: fixed;
  animation: stickyTop 1.6s;

  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 255, 0.3);
  // height: 80px;
  padding: 2vh 3vw;

  a,
  a:hover,
  a:focus {
    color: rgba(0, 0, 0, 0.8);
  }

  .disabled {
    color: rgba(0, 0, 0, 0.4);
  }

  a .menu-text:before {
    background-color: rgba(0, 0, 0, 0.8);
  }
}

@media (max-width: 991px) {
  .navbarbox {
    position: sticky;
    padding: 2vh;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 255, 0.3);
    a,
    a:hover,
    a:focus {
      color: rgba(0, 0, 0, 0.8);
    }

    .disabled {
      color: rgba(0, 0, 0, 0.4);
    }

    a .menu-text:before {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
}

@keyframes stickyTop {
  0% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>