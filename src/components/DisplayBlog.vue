<template>
  <p class="display-blog">
    <ClientOnly>
      <HorizontalScroller>
        <PostSmallCard v-for="node in data" :key="node.id" 
          :post="node" 
          class="display-blog__card" />
      </HorizontalScroller>
    </ClientOnly>
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
  // data() {
  //   return {
  //     mockData: [
  //       { id: 0, path: '/', title: 'Ali Jaya Meilio Lie' },
  //       { id: 1, path: '/about', title: 'Anthony Julianto Lie' },
  //       { id: 2, path: '/blog', title: 'Lisa Agustina Lie' },
  //       { id: 3, path: '/project', title: 'Arianto Suteja Lie' },
  //       { id: 4, path: '/', title: 'Rina Lie' },
  //       { id: 5, path: '/', title: 'Ali Jaya Meilio Lie' },
  //       { id: 6, path: '/', title: 'Ali Jaya Meilio Lie' },
  //     ]
  //   }
  // },
  props: ['data']
}
</script>

<style lang="scss" scoped>
.display-blog {
  &__card {
    margin: 0;
    margin-left: var(--sm-space);
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>