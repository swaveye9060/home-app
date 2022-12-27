<!-- 
  * Author: ye9060
  * 2022-12-26 ~ 2022-12-26
  * [开放能力]
 -->

<template>
  <section class="homebox">
    <div class="container text-center">
      <HomeTitle :list="list" />

      <!-- 内容Tab -->
      <div class="wiringbox">
        <div class="row mt-n2 btnbox">
          <div class="messonry-button text-center mb-6" data-aos="fade-up">
            <button
              class="port-filter"
              v-for="(item, i) in tablist"
              :key="item.id"
              :class="{ 'is-checked': isChecked === i }"
              @click="getIndex(item.id, i)"
            >
              {{ item.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="cbox">
      <div class="container">
        <div class="row">
          <div
            class="col-4 cradbox"
            v-for="(item, i) in datalist"
            :key="item.id + i"
          >
            <div
              class="lisbox"
              @click="$router.push(`/ability-detail/${item.id}`)"
            >
              <div class="toptitle">
                <h5>{{ item.name }}</h5>
                <span>》》》</span>
              </div>
              <p>{{ item.content }}</p>
              <ul>
                <li v-for="(sub, i) in item.label" :key="sub + i">{{ sub }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <pre>{{ datalist }}</pre> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: {
        title01: "全栈的开放能力，为开发者提供一站式服务",
        title02: "提供安全可靠的智能硬件自助开发平台",
        title02a: "",
        url: "/",
      },
      isChecked: 0,
      tablist: [],
      datalist: [],
    };
  },

  created() {
    this.$homeApi
      .getDevTypeInfo({
        type: 3,
      })
      .then((res) => {
        // console.log(res, 33);
        if (res.data.code !== 0) return;
        this.tablist = res.data.data;
        // 获取第一个tab数据
        this.getIndex(this.tablist[0].id, this.isChecked);
      });
  },

  methods: {
    /* 获取下标 */
    getIndex(id, index) {
      this.isChecked = index;
      // console.log(id, index, 333);
      // this.listIndex = id;
      // 获取列表内容
      this.$homeApi
        .getDevByTypeId({
          id: id,
        })
        .then((res) => {
          // console.log(res, 33);
          if (res.data.code !== 0) return;
          this.datalist = res.data.data.slice(0, 6);
          this.datalist.forEach((e) => {
            e.label = e.label.split(/[,，]+/);
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
.wiringbox {
  padding: 5vh 0 3vh;
}

// 内容
.cbox {
  // border: 1px solid #000;
  background: #f4f5f9;
  padding: 5vh 0;
}
.cradbox {
  // height: 100%;
  .lisbox {
    // border: 1px solid #000;
    padding: 4vh 2.6vw;
    background-color: #fcfcfc;
    box-shadow: 2px 5px 20px 3px #ebedf5, 0 5px 13px 1px rgb(202 207 215 / 34%);
    border: 1px solid rgba(0, 0, 0, 0);
    // box-shadow: 20px 20px 36px 0px rgba(0, 60, 255, 0.3) inset;
    margin: 1.3vh 0;
    border-radius: 8px;
    transition: all 0.06s;

    cursor: pointer;

    &:hover {
      box-shadow: 20px 20px 36px 0px rgba(0, 31, 131, 0.08) inset;
      border: 1px solid rgba(0, 0, 0, 0.07);

      .toptitle {
        color: #122179;
        h5 {
          transform: scale(0.96);
        }

        span {
          opacity: 1;
          transform: translateX(0px);
        }
      }
    }
  }

  .toptitle {
    display: flex;
    justify-content: space-between;

    h5 {
      font-size: 18px;
      font-weight: 600;
      transition: all 0.1s;
    }

    span {
      opacity: 0;
      transform: translateX(-20px);
      transform-origin: left center;
      transition: all 0.3s;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      font-size: 14px;
      color: #98a3b7;
      border: 1px solid #d6dbe3;
      padding: 2px 5px;
      border-radius: 2px;
      margin-right: 8px;
      margin-bottom: 8px;
    }
  }
}

// 按钮
.btnbox {
  padding: 2vh 0;
}

.messonry-button .port-filter {
  position: relative;
  border: 0;
  background-color: #fff;
  padding: 0;
  margin: 0 30px 10px 0;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  color: #212121;
}

.messonry-button .port-filter:before {
  background-color: #122179;
  content: "";
  position: absolute;
  left: auto;
  right: 0;
  bottom: 0;
  height: 2px;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  width: 0;
}

.messonry-button .port-filter:last-child {
  margin-right: 0;
}

.messonry-button .port-filter:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.messonry-button .port-filter.is-checked {
  color: #122179;
}

.messonry-button .port-filter.is-checked:before {
  left: 0;
  right: auto;
  width: 100%;
}

.messonry-button .port-filter:hover {
  color: #122179;
  left: 0;
  right: auto;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.messonry-button .port-filter:hover:before {
  left: 0;
  right: auto;
  width: 100%;
}
</style>