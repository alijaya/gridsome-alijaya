<template>
  <header class="page__header page__header--full">
    <div class="page__container page__container--center">
      <div class="text-center">
        <h1>{{page}}</h1>
        <h2>On Construction</h2>
        <p>
          The page has not been ready... 
          <br />
          please come back in several days ._.
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    page: String
  }
}
</script>