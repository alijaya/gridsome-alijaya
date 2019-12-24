<template>
  <a :href="href" target="_blank" rel="nofollow noopener noreferrer" class="cta">
    <slot />
    <FAIcon icon="angle-right" />
  </a>
</template>

<script>
export default {
  props: {
    href: String,
  }
}
</script>

<style lang="scss" scoped>
.cta {
  @extend .a-reset;

  display: inline-block;

  font-size: 1rem;
  font-weight: bold;
  padding: 0.5em;
  background: linear-gradient(135deg, var(--primary-gradient));
  border-radius: var(--radius);

  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
}
</style>