
<template>
  <header>This is a temporary header</header>
  <RouterView></RouterView>
</template>

<script setup>

</script>

<style scoped>
.i {
  background-color: blue;
  font-size: 20px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
