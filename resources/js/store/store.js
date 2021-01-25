import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import moduleBookmark from './bookmark/moduleBookmark.js'

export default new Vuex.Store({
  modules: {
    bookmark: moduleBookmark
  }
})
