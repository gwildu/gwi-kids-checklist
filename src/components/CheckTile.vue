<template>
  <article
    @click="
      () => {
        toggleItemAtIndex(index);
        isChecked = !isChecked;
      }
    "
  >
    <div class="outer">
      <div class="imageContainer" :class="{ rotate: isChecked }">
        <img src="/check.jpg" role="presentation" alt="" class="rotated" />
      </div>
      <div class="imageContainer hideBack" :class="{ rotate: isChecked }">
        <img :src="image" role="presentation" alt="" />
      </div>
    </div>
    <p>{{ text }}</p>
  </article>
</template>

<script setup lang="ts">
import { ICheckItem, useStore } from "../store";
interface ICheckTileProps extends ICheckItem {
  index: number;
}
const { text, image, isChecked, index } = defineProps<ICheckTileProps>();
const { toggleItemAtIndex } = useStore();
</script>

<style scoped>
.outer {
  width: 208px;
  height: 208px;
  position: relative;
}
.imageContainer {
  border: 4px solid darkgreen;
  border-radius: 104px;
  padding: 20px;
  box-sizing: border-box;
  width: 208px;
  height: 208px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate3d(0, 1, 0, 0deg);
  overflow: hidden;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
}
.hideBack {
  backface-visibility: hidden;
}
.rotated {
  transform: rotate3d(0, 1, 0, 180deg);
}
.rotate {
  transform: rotate3d(0, 1, 0, 180deg);
  animation: rotateAnimation 3s cubic-bezier(0.01, 0.91, 0.255, 0.999);
}
img {
  max-width: 200px;
  max-height: 200px;
}
p {
  margin-top: 10px;
  text-align: center;
}

@keyframes rotateAnimation {
  0% {
    transform: rotate3d(0, 1, 0, 0deg);
  }
  100% {
    transform: rotate3d(0, 1, 0, -3420deg);
  }
}
</style>
