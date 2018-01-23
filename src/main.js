import GeminiScrollbar from './geminiScrollbar.vue'

const install = function (Vue) {
  Vue.component(GeminiScrollbar.name, GeminiScrollbar)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

export default {
  install,
  GeminiScrollbar
}
