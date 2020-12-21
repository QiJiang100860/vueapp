<template>
  <div id="app">
    <button @click="test">扫一扫</button>
    <div id="scanContainer" style="width:300px; height:300px; border:1px solid red; margin:10px auto;"></div>
    <div>二维码信fdsa息</div>
    {{ info }}
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
    test() {
      const _this = this
      _this.$Plus(() => {
        alert("开始进入扫一扫业务")
        const plus = window.plus;
        const barScan = new plus.barcode.Barcode("scanContainer");
        barScan.onmarked = function (type, code, file) {
          alert("扫描成功")
          _this.info = "type" + type + "<br/>code:" + code + "<br/>file:" + file;
          barScan.cancel()
          barScan.close()
        };
        barScan.start()
      });
    },
  },
};
</script>

<style>
</style>
