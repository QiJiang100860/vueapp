<template>
  <div class="j-input">
    <div class="input-wrapper">
      <input :value="value" :type="type" @input="change" />
      <label class="placeholder" :class="value ? 'active' : ''">{{
        placeholder
      }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "用户名",
    },
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data(){
      return {
          inputVal:""
      }
  },
  methods: {
    change(e) {
      const {value} = e.target
      setTimeout(()=>{
          this.$emit('input',value)
      })
    },
  },
};
</script>

<style lang="less" scoped>
@import url("@/style/theme.less");
.j-input {
  padding: 20px 0;
  .input-wrapper {
    position: relative;
    input {
      display: block;
      width: 100%;
      height: 42px;
      border-bottom: solid 1px #dedede;
      position: relative;
      transition: all 0.3s;
      &:focus {
        border-bottom: solid 1px @theme-main-color;
        & + label {
          left: 0;
          top: -7px;
          font-size: 12px;
          color: #333;
        }
      }
    }
    label {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-12px);
      color: #999;
      transition: all 0.3s;
      z-index: -1;
      &.active {
        left: 0;
        top: -7px;
        font-size: 12px;
        color: #333;
      }
    }
  }
}
</style>