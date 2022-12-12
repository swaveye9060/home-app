<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{{ homeTitle }}</a>
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
              @click="open(item.title)"
            >
              <a
                v-if="item.label.length === 0"
                :key="'001'"
                class="nav-link"
                :class="{
                  active: isactive === i,
                  disabled: item.isdisabled,
                }"
                aria-current="page"
                href="#"
              >
                {{ item.title }}
              </a>
              <a
                v-else
                :key="'001'"
                class="nav-link dropdown-toggle"
                :class="{
                  active: isactive === i,
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
                  <a class="dropdown-item" href="#">{{ sub.value }}</a>
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
  computed: {
    homeTitle() {
      return homeTitle;
    },
  },
  data() {
    return {
      isactive: -1,
      navlist: [
        {
          title: "开放能力",
          label: [],
          isdisabled: false,
        },
        {
          title: "网器方案",
          label: [],
          isdisabled: false,
        },
        {
          title: "技能中心",
          label: [
            {
              value: "技能一",
            },
            {
              value: "技能二",
            },
            {
              value: "技能三",
            },
          ],
          isdisabled: false,
        },
        {
          title: "开发者",
          label: [],
          isdisabled: false,
        },
        {
          title: "合作与生态",
          label: [],
          isdisabled: true,
        },
        {
          title: "支持服务",
          label: [],
          isdisabled: true,
        },
      ],
    };
  },
  methods: {
    open(i) {
      console.log(i, 33);
      this.active = i;
    },
  },
};
</script>

<style lang="less" scoped>
</style>