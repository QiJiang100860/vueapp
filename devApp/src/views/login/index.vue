<template>
  <div>
    <van-notice-bar
      left-icon="volume-o"
      text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
    />
    <van-grid :column-num="3">
      <van-grid-item icon="photo-o" text="登录" @click="login" />
      <van-grid-item icon="photo-o" text="小游戏" @click="game" />
      <van-grid-item icon="photo-o" text="签名木板" @click="sign" />
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
    game() {},
    sign() {},
  },
};
</script>