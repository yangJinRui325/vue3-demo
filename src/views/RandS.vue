<template>
  <div>
    <h3>路由用法</h3>
    <p>
      当前路由路径 <span style="color: red">{{ curRouterPath }}</span>
    </p>
    <p>
      前置路由
      <span style="color: red">{{ backRouterPath }}</span>
    </p>
    <h3>vuex用法</h3>
    <p>点击次数 {{ hitNum }}</p>
    <button @click="handleClick">点击 +1</button>
    <ErrorPage></ErrorPage>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import ErrorPage from "./ErrorPage";

export default {
  setup() {
    /*路由*/
    const route = useRoute();
    const router = useRouter();
    const curRouterPath = router.currentRoute.value.path;
    const backRouterPath = router.options.history.state.back;
    console.log(route, router);

    /*vuex*/
    const store = useStore();
    console.log(store);
    // const hitNum = computed(() => store.state.test.hit);
    const hitNum = computed(() => store.getters["test/getHit"]);
    const handleClick = () => {
      let num = store.state.test.hit;
      store.dispatch("test/setHit", ++num);
    };
    return {
      curRouterPath,
      backRouterPath,
      hitNum,
      handleClick
    };
  },
  components: {
    ErrorPage
  }
};
</script>

<style scoped></style>
