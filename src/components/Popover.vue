<template>
  <div class="pop-box" v-if="visible">
    <p>我是内容</p>
    <label>
      <input type="number" :value="number" @change="changeNumber" />
    </label>
    <br />
    <button @click="changevVisible" style="margin-top: 20px">隐藏子组件</button>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 0
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const changevVisible = () => {
      context.emit("update:visible", false);
    };
    const changeNumber = e => {
      context.emit("update:number", parseInt(e.target.value));
    };
    return {
      changevVisible,
      changeNumber
    };
  }
};
</script>

<style scoped lang="less">
.pop-box {
  width: 400px;
  height: 200px;
  border: 1px dashed aquamarine;
  margin: 10px auto;
}
</style>
