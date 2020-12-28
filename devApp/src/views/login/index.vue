<template>
  <div>
    <van-notice-bar
      left-icon="volume-o"
      text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
    />
    <van-grid :column-num="3">
      <van-grid-item icon="photo-o" text="登录" @click="login" />
      <van-grid-item icon="photo-o" text="webview" @click="webview" />
      <van-grid-item icon="photo-o" text="winOpen" @click="winOpen" />
    </van-grid>

    <!-- <van-button plain hairline type="info" @click="login">登录</van-button> -->
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("home");
    },
    webview() {
      alert("new webview")
      const _this = this;
      _this.$Plus(() => {
        alert('plus ready')
        const wv = window.plus.webview.create("http://www.dcloud.io/");
        wv.show();
      });
    },
    winOpen(){
      window.open('http://www.dcloud.io/')
    },
    game() {
      this.$plus.then(() => {});
    },
    sign() {},
  },
};
</script>