<template>
  <ul>
    <li v-for="node in data" :key="node.id">
      <g-link :to="node.path">{{node.title}}</g-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['data']
}
</script>