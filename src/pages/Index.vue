<template>
  <Layout class="page page--index">
    <!-- Author intro -->
    <header class="page__header page__header--full">
      <div class="page__container page__container--center">
        <Author />
      </div>
      <FAIcon icon="angle-down" class="page__header--full__down"/>
    </header>

    <section class="page__section">
      <div class="page__container page__container--padding">
        <Content :template="$page.static.content" :context="this" />
        <HorizontalScroller />
      </div>
    </section>

  </Layout>
</template>

<page-query>
query Index {
  static: static (path: "/home") {
    title
    description
    content
  }
  featuredBlog: blogTag (id: "featured") {
    title
    path
    belongsTo {
      edges {
        node {
          ...on BlogPost {
            id
            path
            title
            cover_image (width: 200, height: 100, blur: 5)
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author'
import HorizontalScroller from '~/components/HorizontalScroller'

export default {
  components: {
    Author,
    HorizontalScroller,
  },
  computed: {
    featuredBlog() {
      return (this.$page.featuredBlog)? this.$page.featuredBlog.belongsTo.edges.map(edge => edge.node) : []
    }
  },
  metaInfo () {
    return {
      title: this.$page.static.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.static.description
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
