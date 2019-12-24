<template>
  <span class="logo-alijaya">
    <span 
      v-for="(char, i) in 'alijaya'.split('')" 
      :key="i"
      class="logo-alijaya__comp"
      :style="{'animation-delay': `${0.05 * i}s`}">{{char}}</span>
  </span>
</template>

<style lang="scss" scoped>
.logo-alijaya {
  display: inline-flex;
  font-family: 'Fredoka One', 'Quicksand', sans-serif;
}
.logo-alijaya__comp {
  animation: var(--anim-pulse);
}
</style>