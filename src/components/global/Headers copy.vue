<template>
  <section class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
          <span class="navbar-toggler-icon"></span>
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
                {{ item.title }}
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
                {{ item.title }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li
                  v-for="(sub, i) in item.label"
                  :key="i + sub"
                  ref="subRef"
                  @click="open($refs['subRef'].textContent)"
                >
                  <router-link class="dropdown-item" :to="sub.routerUrl">{{
                    sub.value
                  }}</router-link>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
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
        </div>
      </div>
    </nav>
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
  data() {
    return {
      isactive: -1,
      navlist: [
        {
          title: "开放能力",
          label: [],
          isdisabled: false,
          routerUrl: "/home01",
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
              value: "技能一",
              routerUrl: "/device",
            },
            {
              value: "技能二",
              routerUrl: "/home",
            },
            {
              value: "技能三",
              routerUrl: "/home",
            },
          ],
          isdisabled: false,
          routerUrl: "/home",
        },
        {
          title: "开发者",
          label: [],
          isdisabled: false,
          routerUrl: "/home",
        },
        {
          title: "合作与生态",
          label: [],
          isdisabled: true,
          routerUrl: "/home",
        },
        {
          title: "支持服务",
          label: [],
          isdisabled: true,
          routerUrl: "/home",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
nav {
  padding: 8px 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #0d6efd !important;
    }
  }
}
.logotitle.router-link-exact-active {
  color: #000 !important;
}
</style>