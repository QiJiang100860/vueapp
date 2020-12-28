<template>
  <div v-if="show">
    <van-action-sheet v-model="show" title="登陆">
      <div class="content">
        <j-input placeholder="请输入用户名" v-model="userName"></j-input>
        <j-input
          placeholder="请输入密码"
          type="password"
          v-model="password"
        ></j-input>
        <van-button type="primary" block @click="login">登陆</van-button>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import JInput from "@/components/JInput";
export default {
  components: {
    JInput,
  },
  data() {
    return {
      show: true,
      userName: "",
      password: "",
    };
  },
  methods: {
    login() {
      alert("登陆");
      this.show = !this.show;
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  padding: 0 15px;
  height: 450px;
}
</style>