<template>
  <div>
    <h3>v-model的使用</h3>
    <button @click="changeFlag">显示子组件</button>
    <p>这是要传递的值 {{ num }}</p>
    <Popover v-model:number="num" v-model:visible="isShow"></Popover>
  </div>
</template>

<script>
import { ref } from "vue";
import Popover from "@/components/Popover";

export default {
  setup() {
    const num = ref(10);
    const isShow = ref(false);
    const changeFlag = () => {
      isShow.value = true;
    };
    return {
      num,
      isShow,
      changeFlag
    };
  },
  components: {
    Popover
  }
};
</script>

<style scoped></style>
