import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const path = require("path");
const files = require.context("./modules", false, /\.js$/);
const modules = {};
files.keys().forEach(file => {
  const name = path.basename(file, ".js");
  modules[name] = files(file).default;
});

export default createStore({
  modules: modules,
  /*此处用插件缓存vuex*/
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
});
