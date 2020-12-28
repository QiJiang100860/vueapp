<template>
  <van-swipe
    style="height: 100%"
    vertical
    :show-indicators="false"
    :loop="false"
  >
    <van-swipe-item>
      <van-button type="primary" to="home">主要按钮</van-button>
    </van-swipe-item>
    <van-swipe-item>
      <van-button type="info">信息按钮</van-button>
    </van-swipe-item>
    <van-swipe-item>
      <van-button type="warning">警告按钮</van-button>
    </van-swipe-item>
    <van-swipe-item>
      <van-button type="danger">危险按钮</van-button>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  methods: {},
};
</script>