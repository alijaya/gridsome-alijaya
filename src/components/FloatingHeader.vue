<template>
  <header class="header" :class="computedClass">
    <g-link to="/" class="header__logo-link">
      <!-- <g-image src="~/assets/images/logo-alijaya.png" class="header__logo-image" /> -->
      <LogoAlijaya class="header__logo" />
    </g-link>
    
    <div class="header__spacer"></div>

    <nav class="header__navs">
      <g-link to="/" class="header__nav-link">Home</g-link>
      <g-link to="/about" class="header__nav-link">About</g-link>
      <g-link to="/blog" class="header__nav-link">Blog</g-link>
      <g-link to="/project" class="header__nav-link">Project</g-link>
    </nav>
    <BurgerButton class="header__menu" v-model="open" />
  </header>
</template>

<script>
import LogoAlijaya from '~/components/LogoAlijaya.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'
import BurgerButton from '~/components/BurgerButton.vue'

export default {
  data() {
    return {
      open: false,
      hide: false,
      transparent: true,
      downTolerance: 0,
      upTolerance: 10,
    }
  },
  components: {
    LogoAlijaya,
    ToggleTheme,
    BurgerButton
  },
  mounted() {
    this._lastScroll = 0;
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    document.body.style.removeProperty('overflow')
    window.removeEventListener('scroll', this.onScroll)
  },
  computed: {
    computedClass() {
      return {
        'header--hide': this.hide,
        'header--open': this.open,
        'header--transparent': this.transparent,
      }
    }
  },
  watch: {
    open (value) {
      if (value) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.removeProperty('overflow')
      }
    },
    $mq (value) {
      this.open = false;
    }
  },
  methods: {
    onScroll() {
      const scroll = document.documentElement.scrollTop
      const delta = scroll - this._lastScroll

      if (scroll < this.$el.clientHeight) {
        this.transparent = true
        this.hide = false
      } else {
        this.transparent = false
        if (delta > this.downTolerance) {
          this.hide = true
        } else if (-delta > this.upTolerance) {
          this.hide = false;
        }
      }

      this._lastScroll = scroll;
    }
  }
}
</script>

<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  min-height: var(--header-height);
  padding: calc(var(--sm-space) / 2);
  line-height: 1;
  top:0;
  z-index: 10;

  color: var(--title-color);

  &::before {
    content: "";
    @include full;

    background-color: var(--bg-content-color);
    box-shadow: 0px 10px 30px 0 rgba(0,0,0,.2);
    z-index: -1;

    transition: height 0.5s ease, opacity 0.5s ease;
  }

  transition: transform 0.3s ease;

  &__spacer {
    flex: 1;
  }

  &__logo-link {
    @extend .a-reset;
    display: flex;
    align-items: center;

    &:hover {
      .header {
        &__logo-image {
          animation: var(--anim-bounce);
        }
      }
    }
  }

  // &__logo-image {
  //   height: 2em;
  //   width: auto;
  //   margin-right: calc(var(--sm-space) / 2);
  // }

  &__logo {
    font-size: 2em;
  }

  &__nav-link {
    @extend .a-reset;
    padding: 0.5em;
    font-weight: bold;

    &.active--exact {
      @extend .accent-text;
    }
  }

  &__navs {
    @extend .hide-to-phone;
  }

  &__menu {
    font-size: 2em;

    @extend .hide-from-portrait;
  }

  &--hide {
    transform: translateY(-100%);
  }

  &--transparent {
    &::before {
      opacity: 0;
    }
  }

  @include to-phone {
    &__navs {
      font-size: 2em;
      opacity: 0;
      transition: opacity 0.5s 0.25s ease;
    }

    &--open {
      &::before {
        opacity: 0.9;
        height: 100vh;
      }
      .header__navs {
        @include full;

        opacity: 1;

        width: 100%;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        z-index: -1;
      }
    }
  }
}
</style>
