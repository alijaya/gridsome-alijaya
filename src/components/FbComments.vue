<template>
  <div class="fb-comments" :data-colorscheme="colorsheme" :data-mobile="mobile" :data-width="width" :data-href="href" :data-numposts="numposts" :data-order-by="orderBy">
  </div>
</template>

<script>
// https://developers.facebook.com/docs/plugins/comments/#settings
export default {
  props: {
    href: {
      type: String
    },
    mobile: {
      type: Boolean,
      default: false
    },
    numposts: {
      type: Number,
      default: 10, // min 1
    },
    orderBy: {
      type: String,
      default: "social", // 'social', 'time', 'reverse_time'
    },
    width: {
      type: String,
      default: "100%"
    },
    colorsheme: {
      type: String,
      default: 'light', // 'light', 'dark'
    }
  },
  mounted() {
    if (window.FB && this.$el.parentElement) {
      window.FB.XFBML.parse(this.$el.parentElement);
    }
  }
}
</script>

<style>

</style>