<template>
  <div v-if="items">
    <CheckTile
      key="text"
      v-for="(item, index) in items"
      :text="item.text"
      :image="item.image"
      :isChecked="item.isChecked"
      :index="index"
    />
  </div>
</template>

<script setup lang="ts">
import { ICheckItem, useStore } from "../store";
import CheckTile from "./CheckTile.vue";
interface ICheckLayoutProps {
  items: ICheckItem[];
}

const { items } = useStore();
console.log({ items });
</script>

<style scoped>
div {
  display: grid;
  margin: 0 auto;
  width: 476px;
  gap: 20px;
  grid-template-columns: repeat(2, 200px);
}
</style>
