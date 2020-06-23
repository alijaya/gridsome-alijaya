<template>
  <Layout class="page page--blog-post">

    <!-- BlogPost Header -->
    <header class="page__header page__header--half page__header--overlap">
      <div class="page__container page__container--center">
        <div class="post-title">
          <g-link to="/blog" class="post-title__back">
            <FAIcon icon="angle-left" /> Blog
          </g-link>
          <h1 class="post-title__text">
            {{ $page.post.title }}
          </h1>
          
          <PostMeta :post="$page.post" />
        </div>
      </div>
    </header>
    
    <section class="page__section">
      <div class="post content-box">
        <div class="post__header">
          <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
        </div>

        <div class="post__content" v-html="$page.post.content" />

        <div class="post__footer">
          <PostTags :post="$page.post" />
        </div>
      </div>
    </section>

    <div class="post-comments">
      <!-- Add comment widgets here -->
    </div>

    <Author class="post-author" />
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author'

export default {
  components: {
    Author,
    PostMeta,
    PostTags
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query BlogPost ($path: String!) {
  post: blogPost (path: $path) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 800, height: 400, blur: 10)
  }
}
</page-query>

<style lang="scss" scoped>
.post-title {
  position: relative;
  text-align: center;

  &__back {
    @extend .a-reset;

    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
    white-space: nowrap;

    font-weight: bold;
    opacity: 0.5;

    &:hover {
      opacity: 0.7;
    }
  }
}

.post {
  width: 100%;

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    
    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);
  
  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>