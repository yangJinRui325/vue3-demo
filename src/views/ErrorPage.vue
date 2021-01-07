<template>
  <div>
    <p>--------------------------分割线-------------------------</p>
    <p style="color: red">
      getCurrentInstance的用法开发环境没问题，生产环境无效（谨慎）
    </p>
    <h3>路由用法</h3>
    <p>当前路由路径 {{ curRoutePath }}</p>
    <h3>vuex用法</h3>
    <p>点击次数 {{ hitNum }}</p>
    <button @click="handleClick">点击 +1</button>
  </div>
</template>

<script>
import { getCurrentInstance, computed } from "vue";

export default {
  setup() {
    const { ctx } = getCurrentInstance();
    /*路由*/
    const curRoutePath = ctx.$router.currentRoute.value.path;
    /*vuex*/
    const hitNum = computed(() => ctx.$store.state.test.hit);
    console.log(hitNum);

    const handleClick = () => {
      let num = hitNum.value;
      ctx.$store.dispatch("test/setHit", ++num);
    };
    return {
      curRoutePath,
      hitNum,
      handleClick
    };
  }
};
</script>

<style scoped></style>
