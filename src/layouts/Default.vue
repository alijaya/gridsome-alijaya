<template>
  <div id="app">

    <FloatingHeader />

    <main class="main">
      <slot/>
    </main>

    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}.</span>
      <span class="footer__author">Made by <g-link to="/about">Ali Jaya Meilio Lie</g-link>.</span>
    </footer>

  </div>
</template>

<script>
import FloatingHeader from '~/components/FloatingHeader.vue'

export default {
  components: {
    FloatingHeader
  },
}
</script>

<style lang="scss">
.main {
  flex: 1 1 auto;
}

.footer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;

  > span {
    margin: 0 .5em;
  }

  &::before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, var(--accent-gradient));
  }
}
</style>
