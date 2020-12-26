<template>
  <div>
    <div class="header">
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="content">
      <slot></slot>
      <router-view></router-view>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight(){}
  },
};
</script>