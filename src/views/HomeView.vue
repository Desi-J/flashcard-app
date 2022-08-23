<template>
  <div class="container px-4">
    <h1 class="is-size-1 is-size-4-mobile mb-2">
      Welcome, Guest
      <font-awesome-icon icon="fa-solid fa-user-secret" />
    </h1>
    <SearchBar />
    <ul class="columns is-multiline mt-4">
      <li v-for="stack in stacks" :key="stack.id" class="column is-4-tablet is-3-widescreen">
        <CardGroup :stack="stack" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CardGroup from '@/components/CardGroup.vue';
import SearchBar from '@/components/SearchBar.vue';

let stacks = ref([
  {
    id: '1',
    title: 'My first set...',
    question: 'What is...',
    answer: 'lorem ipsum text that is supposed to be totally random'
  },
  {
    id: '2',
    title: 'My second set...',
    question: 'What is...',
    answer: 'lorem ipsum text that is supposed to be totally random'
  },
  {
    id: '3',
    title: 'My third set...',
    question: 'What is...',
    answer: 'lorem ipsum text that is supposed to be totally random'
  },
  {
    id: '4',
    title: 'My forth set...',
    question: 'What is...',
    answer: 'lorem ipsum text that is supposed to be totally random'
  },
  {
    id: '5',
    title: 'My fifth set...',
    question: 'What is...',
    answer: 'lorem ipsum text that is supposed to be totally random'
  },
  {
    id: '6',
    title: 'My sixth set...',
    question: 'What is...',
    answer: 'lorem ipsum text that is supposed to be totally random'
  },
  {
    id: '7',
    title: 'My seventh set...',
    question: 'What is...',
    answer: 'lorem ipsum text that is supposed to be totally random'
  },
  {
    id: '8',
    title: 'My eighth set...',
    question: 'What is...',
    answer: 'lorem ipsum text that is supposed to be totally random'
  },
  {
    id: '9',
    title: 'My ninth set...',
    question: 'What is...',
    answer: 'lorem ipsum text that is supposed to be totally random'
  }
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
