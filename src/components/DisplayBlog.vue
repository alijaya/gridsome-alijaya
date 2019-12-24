<template>
  <p class="display-blog">
    <HorizontalScroller>
      <PostSmallCard v-for="node in data" :key="node.id" 
        :post="node" 
        class="display-blog__card" />
    </HorizontalScroller>
  </p>
</template>

<script>
import HorizontalScroller from '~/components/HorizontalScroller'
import PostSmallCard from '~/components/PostSmallCard'

export default {
  components: {
    HorizontalScroller,
    PostSmallCard,
  },
  props: ['data']
}
</script>

<style lang="scss" scoped>
.display-blog {
  &__card {
    margin-left: var(--sm-space);
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>