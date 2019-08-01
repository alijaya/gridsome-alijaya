<template>
  <div class="author">

    <g-image alt="Author image" class="author__image" src="~/assets/images/logo-alijaya.png" blur="5" />

    <h1 class="author__site-title">
      {{ $static.metaData.siteName }}
    </h1>

    <p class="author__intro">
      My personal website about 
      <br />
      filmmaking, programming and random stuff.
    </p>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
.author {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: calc(var(--space) / 2) 0;

  &__image {
    width: 90px;
    height: 90px;
    margin-bottom: 1em;
  }

  &__intro {
    opacity: .8;
  }

  &__site-title {
    font-size: 1.5em;
  }
}
</style>