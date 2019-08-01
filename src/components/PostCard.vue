<template>
  <div class="post-card content-box" :class="{'post-card--has-poster' : post.poster}">
    <div class="post-card__header">
      <g-link :to="post.path" v-if="post.cover_image">
        <g-image alt="Cover image" class="post-card__image" :src="post.cover_image" />
      </g-link>
    </div>
    <div class="post-card__content">
      <h2 class="post-card__title">
        <g-link :to="post.path" class="post-card__title-link">{{post.title}}</g-link>
      </h2>
      <p class="post-card__description" v-html="post.description" />
      
      <PostMeta class="post-card__meta" :post="post" />
      <PostTags class="post-card__tags" :post="post" />

      <g-link :to="post.path"></g-link>
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style lang="scss">
.post-card {
  margin-bottom: var(--space);
  position: relative;

  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    &:empty {
      display: none;
    }
  }

  &__image {
    min-width: 100%;
  }

  &__title {
    margin-top: 0;
  }

  &__title-link {
    @extend .accent-text;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);
  }

  &__tags {
    z-index: 1;
    position: relative;
  }
}
</style>