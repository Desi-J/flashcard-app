<template>
  <div class="container px-4">
    <h1 class="is-size-1 is-size-4-mobile mb-2">Welcome, Guest</h1>
    <SearchBar/>
    <ul class="columns is-multiline mt-4">
      <li v-for="stack in stacks" :key="stack.id" class="column is-4-tablet is-3-widescreen">
        <CardGroup/>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CardGroup from '@/components/CardGroup.vue';
import SearchBar from '@/components/SearchBar.vue'


let stacks = ref([
  { id: '1', title: 'My first set...' },
  { id: '2', title: 'My second set...' },
  { id: '3', title: 'My third set...' },
  { id: '4', title: 'My forth set...' },
  { id: '4', title: 'My forth set...' },
  { id: '4', title: 'My forth set...' },
  { id: '4', title: 'My forth set...' },
  { id: '4', title: 'My forth set...' },
  { id: '4', title: 'My forth set...' },
]);
</script>

<style scoped>
.container {
  /* border: 1px solid blue; */
  margin-top: 50px;
}
  ul {
    /* border: 2px solid black; */
  }
</style>
