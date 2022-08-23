<template>
  <!-- card -->
  <div class="card">
    <header
      class="card-header py-3 pr-3 is-flex is-justify-content-flex-end is-align-content-center"
    >
      <div class="is-right">
        <!-- edit -->
        <!-- <button class="button is-success is-outlined">
          <span>Delete</span> -->
          <span class="icon is-small">
            <font-awesome-icon icon="fa-solid fa-pencil" class="icon" />
          </span>
        <!-- </button> -->
        <!-- delete -->
        <!-- <button class="button is-danger is-outlined">
          <span>Delete</span> -->
          <span class="icon is-small">
            <font-awesome-icon icon="fa-solid fa-trash-can" class="icon" />
          </span>
        <!-- </button> -->
        <!-- <font-awesome-icon
        icon="fa-solid fa-trash-can"
        class="icon-delete is-size-4"
      /> -->
      </div>
    </header>
    <div class="card-content">
      <div class="content" @click="sendToDetails">
        {{ props.stack.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  stack: Object
});
</script>

<style>
.card {
  height: 200px;
}
.card:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.icon {
  text-align: right;
}

/* .button:hover + .icon {
  transform: scale(1.1);
} */

/* header {
    display: flex;
    justify-content: flex-end;
  } */
</style>
