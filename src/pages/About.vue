<template>
  <Layout class="page page--about">
    <header class="page__header page__header--full">
      <div class="page__container page__container--center">
        <div class="short-bio">
          <g-image alt="Author image" width="256" height="256" src="~/assets/images/alijaya.jpg" class="short-bio__avatar" />
          <div class="short-bio__description">
            <h1>Ali Jaya Meilio Lie</h1>
            <p>🇮🇩 Indonesia</p>
            <a href="mailto:alijayameilio@gmail.com?subject=%5Balijaya.id%5D%20REPLACE_THIS_SUBJECT" target="_blank" rel="nofollow noopener noreferrer"
              class="short-bio__email">
              alijayameilio@gmail.com
            </a>
            <div class="short-bio__socials">
              <a href="//linkedin.com/in/alijayameilio" target="_blank" rel="nofollow noopener noreferrer">
                <FAIcon :icon="['fab', 'linkedin']" />
              </a>
              <a href="//youtube.com/alijayameilio" target="_blank" rel="nofollow noopener noreferrer">
                <FAIcon :icon="['fab', 'youtube']" />
              </a>
              <a href="//github.com/alijaya" target="_blank" rel="nofollow noopener noreferrer">
              <FAIcon :icon="['fab', 'github']" />
              </a>
              <a href="//facebook.com/alijayameilio" target="_blank" rel="nofollow noopener noreferrer">
                <FAIcon :icon="['fab', 'facebook']" />
              </a>
              <a href="//instagram.com/alijayameilio" target="_blank" rel="nofollow noopener noreferrer">
                <FAIcon :icon="['fab', 'instagram']" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <FAIcon icon="angle-down" class="page__header--full__down"/>
    </header>

    <section class="page__section">
      <div class="page__container page__container--padding">
        <Content :template="$page.static.content" />
      </div>
    </section>

  </Layout>
</template>

<page-query>
query About {
  static: static (path: "/about") {
    title
    description
    content
  }
}
</page-query>

<script>
// import CTA from '~/components/CTA'

export default {
  components: {
    // CTA
  },
  metaInfo () {
    return {
      title: this.$page.static.title,
      meta: [
        {
          name: 'description',
          content: this.$page.static.description
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.short-bio {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__avatar {
    @extend .circle;

    width: 100%;

    margin-bottom: var(--sm-space);
  }

  &__description {
    text-align: center;
  }

  &__email {
    @extend .accent-text;

    font-weight: bold;
  }

  &__socials {
    font-size: 2em;
    padding: 0.25em;

    > a {
      @extend .a-reset;
      padding: 0.25em;
    }
  }
}
</style>
