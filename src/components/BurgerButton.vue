<template>
  <button class="hamburger hamburger--elastic" type="button" :class="calculateClass" @click="onClick">
    <div class="hamburger__box">
      <div class="hamburger__inner"></div>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    calculateClass() {
      const cls = []
      if (this.value) cls.push('hamburger__is-active')
      return cls
    }
  },
  methods: {
    onClick() {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="scss">
.hamburger {
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;

  font-size: inherit;
  color: inherit;
  text-transform: none;
  background: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  overflow: visible;
  outline: none;
  transition: transform 0.2s ease;

  &:hover, &:focus {
    transform: scale(1.1);
  }

  &__box {
    display: block;
    position: relative;
    width: 1em;
    height: 1em;
  }

  &__inner {
    display: block;
    top: 50%;
    margin-top: -0.05em;

    &, &::before, &::after {
      position: absolute;
      width: 1em;
      height: 0.1em;
      background: currentColor;
      border-radius: 0.05em;
      transition: transform 0.15s ease;
    }

    &::before, &::after {
      content: "";
      display: block;
    }

    &::before {
      top: -0.25em;
    }

    &::after {
      bottom: -0.25em;
    }
  }
}

.hamburger--elastic {
  .hamburger__inner {
    top: 0.25em;
    transition-duration: 0.275s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

    &::before {
      top: 0.25em;
      transition: opacity 0.125s 0.275s ease;
    }

    &::after {
      top: 0.5em;
      transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }

  &.hamburger__is-active {
    .hamburger__inner {
      transform: translate3d(0, 0.25em, 0) rotate(135deg);
      transition-delay: 0.075s;

      &::before {
        opacity: 0;
        transition-delay: 0s;
      }

      &::after {
        transform: translate3d(0, -0.5em, 0) rotate(-270deg);
        transition-delay: 0.075s;
      }
    }
  }
}
</style>
