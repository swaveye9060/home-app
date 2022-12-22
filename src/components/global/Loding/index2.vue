<template>
  <div class="hart_loading load-loading-dialog">
    <div class="box">
      <div :class="className"></div>
      <p v-if="messageTip" class="tip-msg">{{ messageTip }}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    loadShow: {
      type: Boolean,
      default: true,
    },
    className: {
      type: String,
      default: "loader-chart",
    },
    messageTip: {
      type: String,
      default: "333",
    },
  },
  created() {
    console.log(">>>>>>", this.loadShow);
  },
};
</script>

<style lang="less" scoped>
.hart_loading {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: #fff;
  border: 1px solid #fff;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    display: inline-block;
    border-radius: 3px;
    font-size: 30px;
    color: #5caeea;
    padding: 1em;
    margin-bottom: 0.25em;
    vertical-align: top;
    -webkit-transition: 0.3s color, 0.3s border;
    transition: 0.3s color, 0.3s border;
    [class*="loader-"] {
      display: inline-block;

      color: inherit;
      vertical-align: middle;
      pointer-events: none;
      position: relative;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .loader-chart {
      width: 1em;
      height: 1em;
      border: 0.2em solid transparent;
      border-top-color: currentcolor;
      border-radius: 50%;
      -webkit-animation: 1s loader-05 linear infinite;
      animation: 1s loader-05 linear infinite;
      top: 34%;
      left: 50%;
      margin-left: -15px;
      &:before {
        content: "";
        display: block;
        width: inherit;
        height: inherit;
        position: absolute;
        top: -0.2em;
        left: -0.2em;
        border: 0.2em solid currentcolor;
        border-radius: 50%;
        opacity: 0.5;
      }
    }
    .loader-iframe {
      width: 1.5em;
      height: 1.5em;
      border: 0.05em solid #5264d9;
      border-bottom-color: transparent;
      border-radius: 50%;
      -webkit-animation: 0.7s loader-03 linear infinite;
      animation: 0.7s loader-03 linear infinite;
    }
  }
}
@-webkit-keyframes loader-05 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loader-05 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes loader-03 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loader-03 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

<style scoped>
.tip-msg {
  width: 100%;
  text-align: center;
  font-size: 14px;
}
</style>

