<template>
  <div class="content-box post-small-card">
    <div class="post-small-card__header">
      <g-image alt="Cover image" class="post-small-card__image" :src="post.cover_image" v-if="post.cover_image"/>
    </div>
    <div class="post-small-card__content">
      <g-link :to="post.path" class="post-small-card__title-link">{{post.title}}</g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style lang="scss" scoped>
.post-small-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: var(--sm-space);
  width: 200px;
  height: 100px;

  &__header {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    border-radius: var(--radius);
    opacity: 0.1;

    &:empty {
      display: none;
    }
  }

  &__content {
    z-index: 1;
  }

  &__image {
    min-width: 100%;
  }

  &__title-link {
    @extend .accent-text;
  }

}
</style>