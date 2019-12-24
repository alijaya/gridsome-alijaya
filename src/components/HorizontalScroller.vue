<template>
  <div class="horizontal-scroller" :class="computedClass">
    <div class="horizontal-scroller__content" ref="content" v-dragscroll.x @scroll="updateState">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isStart: false,
      isEnd: false,
    }
  },
  mounted() {
    this.updateState()
  },
  methods: {
    updateState() {
      const target = this.$refs.content
      this.isStart = target.scrollLeft == 0
      this.isEnd = target.scrollWidth - target.scrollLeft == target.clientWidth
    }
  },
  computed: {
    computedClass() {
      return {
        'horizontal-scroller--is-start': this.isStart,
        'horizontal-scroller--is-end': this.isEnd
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.horizontal-scroller {
  position: relative;
  padding: var(--sm-space) 0;

  &::before, &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 25%;
    top: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, var(--bg-t-gradient));
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, var(--bg-t-gradient));
  }

  &--is-start {
    &::before {
      opacity: 0;
    }
  }

  &--is-end {
    &::after {
      opacity: 0;
    }
  }
}

.horizontal-scroller__content {
  display: flex;
  overflow: hidden;

  > * {
    flex: 0 0 auto;
  }
}
</style>