import GeminiScrollbar from './geminiScrollbar.vue'
import GS from 'gemini-scrollbar'

const install = function (Vue) {
  Vue.component(GeminiScrollbar.name, GeminiScrollbar)
  Vue.prototype.$geminiScrollbar = Vue.$geminiScrollbar = GS
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
  window.Vue.prototype.$geminiScrollbar = window.Vue.$geminiScrollbar = GS
}

export default install
