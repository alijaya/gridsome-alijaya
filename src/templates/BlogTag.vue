<template>
  <Layout>

    <!-- BlogTag Header -->
    <header class="page__header page__header--half page__header--overlap">
      <div class="page__container page__container--center">
        <div class="post-title">
          <g-link to="/blog" class="post-title__back">
            <FAIcon icon="angle-left" /> Blog
          </g-link>
          <h1 class="post-title__text">
            #{{ $page.tag.title }}
          </h1>
        </div>
      </div>
    </header>

    <!-- List posts -->
    <section class="page__section">
      <div class="page__container">
        <PostCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
      </div>
    </section>
    
  </Layout>
</template>

<page-query>
query BlogTag ($path: String!) {
  tag: blogTag (path: $path) {
    title
    belongsTo {
      edges {
        node {
          ...on BlogPost {
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
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo () {
    return {
      title: `#${this.$page.tag.title}`,
      meta: [
        {
          name: 'description',
          content: `#${this.$page.tag.title}`
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.post-title {
  position: relative;
  text-align: center;

  &__back {
    @extend .a-reset;

    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);

    font-weight: bold;
    opacity: 0.5;
  }
}

</style>

