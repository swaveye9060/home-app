<template>
  <section>
    <!-- <pre>{{ typelist }}</pre> -->
    <button
      v-for="item in typelist"
      :key="item.id"
      @click="$router.push({ path: `service/${item.id}` })"
    >
      {{ item.name }}
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      typelist: [],
    };
  },

  created() {
    this.$homeApi.getDevTypeInfo({ type: 6 }).then((res) => {
      // console.log(res, 33);
      if (res.data.code !== 0) return;
      this.$homeApi.getDevByTypeId({ id: res.data.data[0].id }).then((res) => {
        // console.log(res, 33);
        if (res.data.code !== 0) return;
        this.typelist = res.data.data;
      });
    });
  },
};
</script>

<style>
</style>