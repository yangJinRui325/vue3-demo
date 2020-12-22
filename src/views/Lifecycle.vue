<template>
  <div class="life-box">
    <p>生命周期函数</p>
    <div>Version {{ version }}</div>
    <button @click="updateVersion">click me</button>
  </div>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured
} from "vue";

export default {
  setup() {
    console.log("setup");
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    onErrorCaptured(() => {
      console.log("onErrorCaptured");
    });

    const version = ref(0);
    const updateVersion = () => {
      version.value++;
    };
    return {
      version,
      updateVersion
    };
  }
};
</script>

<style scoped></style>
