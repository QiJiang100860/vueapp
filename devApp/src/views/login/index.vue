<template>
  <div>
    <van-button plain hairline type="info" @click="login">登录</van-button>
    <van-button plain hairline type="info" @click="loginWebview"
      >登录webView</van-button
    >
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
        window.plus.webview.create(url, 1, {}, "");
      });
    },
  },
};
</script>