<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("home");
    },
    loginWebview() {
      const url = window.location.origin + "/home";
      alert(url);
      this.$Plus(() => {
        const w = window.plus.webview.create("http://www.baidu.com", 1, {}, "");
        w.show();
      });
    },
  },
};
</script>



<style lang="less">
@import url("@/style/index.less");
</style>
