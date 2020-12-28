<template>
  <div v-if="show">
    <van-action-sheet v-model="show" title="登陆">
      <div class="content">
          <j-input></j-input>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import JInput from '@/components/JInput'
export default {
    components:{
        JInput
    },
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="less" scoped>
.content {
  height:450px;
}
</style>