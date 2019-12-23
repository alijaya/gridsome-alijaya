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
        <Content :template="$page.static.content" />
        <!-- <h2>Hi! 👋</h2>
        <p>
          Thank you for visiting this website! This is my personal website. So it's better if you <g-link to="/about">know more about myself</g-link> before proceed further 😄.
        </p>
        <p>
          Because the personal nature, <g-link to="/blog">I will post anything that I want</g-link>, it will a broad subject, but in general I will post about filmmaking or programming stuff.
        </p>
        <p>
          If you are new here, you can start from my personal recommendation here.
        </p>
        <h2><g-link to="/blog/tag/featured">Featured Blog</g-link></h2>
        <p>
          ... [some featured blog here] ...
        </p>
        <p>
          Or if you are interested in <g-link to="/project">what I have done in the past</g-link>, you can check out my featured project here.  It's a compilation of my personal project and my professional project.
        </p>
        <h2><g-link to="/project/tag/featured">Featured Project</g-link></h2>
        <p>
          ... [some featured project here] ...
        </p>
        <p>
          If you are intrigued by some of my works, well... just contact me 😀. I'll be happy to reply to any of discussion, professional project or even just a debate of a certain thing 😀. I'll try my best to reply each email that come to my email box :3.
        </p>
        <p>
          <CTA href="mailto:alijayameilio@gmail.com?subject=%5Balijaya.id%5D%20REPLACE_THIS_SUBJECT">
            <FAIcon icon="envelope" />
            Contact Me
          </CTA>
        </p> -->
      </div>
    </section>

  </Layout>
</template>

<page-query>
query About {
  static: static (path: "/home") {
    title
    description
    content
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import CTA from '~/components/CTA.vue'

export default {
  components: {
    Author,
    CTA,
  },
}
</script>

<style lang="scss">
</style>
