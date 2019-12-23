<template>
  <Layout class="page page--blog">

    <!-- Blog Header -->
    <header class="page__header page__header--half page__header--overlap">
      <div class="page__container page__container--center">
        <h1>Blog</h1>
      </div>
    </header>

    <!-- List posts -->
    <section class="page__section">
      <div class="page__container">
        <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
      </div>
    </section>

  </Layout>
</template>

<page-query>
query Blog {
  posts: allBlogPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        path
        tags {
          id
          title
          path
        }
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: 'Blog'
  }
}
</script>

<style lang="scss">
</style>