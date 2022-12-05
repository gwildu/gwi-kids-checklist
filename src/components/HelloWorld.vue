<script setup lang="ts">
import { useStore } from "../store";
import CheckLayout from "./CheckLayout.vue";
const { items, pushItem, deleteItemAtIndex, resetAll, toggleItemAtIndex } =
  useStore();
console.log({ items });
const text = "text";
const image = "image";
const isChecked = false;
const index = 0;
</script>

<template>
  <input type="text" v-model="text" />
  <input type="text" v-model="image" />
  <input type="checkbox" v-model="isChecked" />
  <input type="number" v-model="index" />
  <button
    @click="() => pushItem({ image: image, text: text, isChecked: false })"
  >
    pushItem
  </button>
  <button @click="() => deleteItemAtIndex(+index)">delete at index</button>
  <CheckLayout :items="items" />
  <p>{{ JSON.stringify(items) }}</p>
  <div v-for="item in items">
    {{ JSON.stringify(item) }}
  </div>
  <button @click="() => resetAll()">reset</button>
  <button @click="() => toggleItemAtIndex(0)">toggle 1</button>
</template>

<style scoped></style>
