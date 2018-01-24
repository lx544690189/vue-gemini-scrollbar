<template>
  <div ref="geminiScrollbar">
    <div class="gm-scrollbar -vertical">
      <div class="thumb"></div>
    </div>
    <div class="gm-scrollbar -horizontal">
      <div class="thumb"></div>
    </div>
    <div class="gm-scroll-view">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import GeminiScrollbar from 'gemini-scrollbar'
import 'gemini-scrollbar/gemini-scrollbar.css'
let geminiScrollbar
export default {
  name:'GeminiScrollbar',
  props: {
    autoCreate: {
      type: Boolean,
      default: true
    },
    autoshow: {
      type: Boolean,
      default: false
    },
    forceGemini: {
      type: Boolean,
      default: false
    },
    minThumbSize: {
      type: Number,
      default: 20
    }
  },
  mounted () {
    geminiScrollbar = new GeminiScrollbar({
      element: this.$refs.geminiScrollbar,
      createElements: false,
      onResize: () => {
        this.$emit('resize')
      },
      ...this.$props
    })
    if (this.autoCreate) {
      geminiScrollbar.create()
    }
    this.$emit('ready', geminiScrollbar)
  },
  updated () {
    geminiScrollbar.update()
  },
  beforeDestroy () {
    if (geminiScrollbar) {
      geminiScrollbar.destroy()
    }
    geminiScrollbar = null
  }
}
</script>
