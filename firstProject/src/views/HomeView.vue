<script setup lang="ts">
import {useLocalStorage} from "@/composables/useLocalStorage.ts";

let food = useLocalStorage('food', 'auto')

// let food = ref(localStorage.getItem('food'));
//
// watch(food, (val) => {
//   if (val) {
//     write('food', val)
//   }
// })
//
// function write(key: string, value: string) {
//   localStorage.setItem(key, value)
// }

</script>

<template>
  <main>

    <p>
      what is your favourite food : <input v-model="food">
    </p>
  </main>
</template>
