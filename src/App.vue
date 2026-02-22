<script setup lang="ts">

import { onMounted } from 'vue'

onMounted(() => {
  document.documentElement.dataset.theme = 'green';
})
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>
