<template>
  <div id="app">
    <van-button type="primary" @click="test">扫一扫</van-button>
    <div
      id="scanContainer"
      style="
        width: 300px;
        height: 300px;
        border: 1px solid red;
        margin: 10px auto;
      "
    ></div>
    <div>二维码信fdsa息</div>
    {{ info }}

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="onClickButton"
      />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      info: "",
    };
  },
  methods: {
    onClickIcon(){

    },
    onClickButton(){},
    test() {
      const _this = this;
      _this.$Plus(() => {
        alert("开始进入扫一扫业务");
        const plus = window.plus;
        const barScan = new plus.barcode.Barcode("scanContainer");
        barScan.onmarked = function (type, code, file) {
          alert("扫描成功");
          _this.info =
            "type" + type + "<br/>code:" + code + "<br/>file:" + file;
          barScan.cancel();
          barScan.close();
        };
        barScan.start();
      });
    },
  },
};
</script>

<style>
</style>
