<template>
  <!-- <div v-html="template" /> -->
  <v-runtime-template :template="wrappedTemplate" />
</template>

<script>
import VRuntimeTemplate from "v-runtime-template"

export default {
  components: {
    VRuntimeTemplate
  },
  props: {
    template: String
  },
  computed: {
    wrappedTemplate() {
      return `<div>${this.template}</div>`
    }
  }
}
</script>