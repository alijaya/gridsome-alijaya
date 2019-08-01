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
        <p>
          Hi! My name is Ali Jaya Meilio Lie, but you can use "alijaya" because it's my internet name.
        </p>
        <p>
          I'm passionate about many stuff, here are the shortlist of the things that I like:
        </p>
        <ul>
          <li>Filmmaking</li>
          <li>VFX</li>
          <li>Programming</li>
          <li>Game Design</li>
          <li>Web Design</li>
          <li>Crafting</li>
          <li>Education</li>
        </ul>
        <p>
          I was born in capital of Indonesia, Jakarta, but soon I moved to and grown up in Bangka Island. So I identified myself more with Bangkanese culture.
        </p>
        <p>
          In my early education journey (elementary, junior high, and senior high school), I participate in several math and programming competition. In the meantime, I learn how to do game programming by myself with the help of the internet.
        </p>
        <p>
          Then after my senior high school, I swerved my path to a filmmaking journey. I took a filmmaking 1.5 years course in SSR Jakarta (School of Sound Recording Jakarta).
        </p>
        <p>
          After that, I do some freelancing, interning (Agate Studio), volunteering (TOKI, Tim Olimpiade Komputer Indonesia), and working as visual effects artist in 2 Indonesian features films (Garuda Superhero and Rudy Habibie).
        </p>
        <p>
          Bored with working life, I decided to continue my study in France. I take 7 months French course in IFI Thamrin, Jakarta Institut Français d'Indonésie.
        </p>
        <p>
          Then I studied for 3 years in Université Grenoble Alpes, majoring in Arts du Spectacle / Performing Arts in Grenoble, France. When I was studying, I was quite active in organisation, especially in PPI Grenoble (Perhimpunan Pelajar Indonesia Grenoble).
        </p>
        <p>
          In these days, I went back to Jakarta, Indonesia, and tries my fortune here. I have a plan to make my own production house. But the road is still long, and it would be great if you can give support and join me along the way 😀. I'll try to give back to the world with sharing some useful content with you guys.
        </p>
        <p>
          And feel free to contact me, I might be a stranger to you, but I'm still a human that will be excited if there's a genuine email that enter my box 😀.
        </p>
        <p>
          <CTA href="mailto:alijayameilio@gmail.com?subject=%5Balijaya.id%5D%20REPLACE_THIS_SUBJECT">
            <FAIcon icon="envelope" />
            Contact Me
          </CTA>
        </p>
      </div>
    </section>

  </Layout>
</template>

<script>
import CTA from '~/components/CTA'

export default {
  components: {
    CTA
  },
  metaInfo: {
    title: 'About'
  }
}
</script>

<style lang="scss">
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
