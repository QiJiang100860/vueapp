<template>
  <div id="app">
    <router-view></router-view>
    <!-- <van-button plain hairline type="info" @click="login">登录</van-button>
    <van-button plain hairline type="info" @click="loginWebview"
      >登录webView</van-button
    > -->
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
        const w = window.plus.webview.create('http://www.baidu.com', 1, {}, "");
        w.show()
      });
    },
  },
};
</script>
