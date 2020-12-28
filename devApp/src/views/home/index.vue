<template>
  <div>
    <van-button type="danger" @click="login">登陆</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
        this.$Login({origin:"home"})
    },
  },
};
</script>