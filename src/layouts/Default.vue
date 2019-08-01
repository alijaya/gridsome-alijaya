<template>
  <div id="app">

    <header class="header">
      <div class="header__left">
        <g-link to="/" class="header__logo-link">
          <g-image src="~/assets/images/logo-alijaya.png" class="header__logo-image" />
          <LogoAlijaya class="header__logo" />
        </g-link>
      </div>
      
      <div class="header__right">
        <nav class="header__navs">
          <g-link to="/about" class="header__nav-link">About</g-link>
          <g-link to="/blog" class="header__nav-link">Blog</g-link>
          <g-link to="/project" class="header__nav-link">Project</g-link>
          <g-link to="/contact" class="header__nav-link">Contact</g-link>
        </nav>
        <BurgerButton class="header__menu" v-model="menuOpened" />
      </div>
    </header>

    <main class="main">
      <slot/>
    </main>

    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}.</span>
      <span class="footer__author">Made by <g-link to="/about">Ali Jaya Meilio Lie</g-link>.</span>
      <span class="footer__links">Powered by <a href="//gridsome.org">Gridsome </a>.</span>
    </footer>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LogoAlijaya from '~/components/LogoAlijaya.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'
import BurgerButton from '~/components/BurgerButton.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  data() {
    return {
      menuOpened: false,
    }
  },
  components: {
    Logo,
    LogoAlijaya,
    ToggleTheme,
    BurgerButton
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: calc(var(--sm-space) / 2);
  line-height: 1;
  top:0;
  z-index: 10;

  background-color: var(--bg-content-color);
  box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);

  &__left,
  &__right {
    display: flex;
    align-items: center;
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

  &__logo-image {
    height: 2em;
    width: auto;
  }

  &__logo {
    font-size: 2em;
  }

  &__nav-link {
    @extend .a-reset;
    padding: 0.5em;
    font-weight: bold;
  }

  &__navs {
    @extend .hide-to-phone;
  }

  &__menu {
    font-size: 2em;

    @extend .hide-from-portrait;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;

  > span {
    margin: 0 .35em;
  }

  a {
    color: inherit;
  }
}
</style>
