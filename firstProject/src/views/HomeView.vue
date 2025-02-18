<script setup lang="ts">
import {useLocalStorage} from "@/composables/useLocalStorage.ts";
import TablabbleTextArea from "@/components/TablabbleTextArea.vue";

let food = useLocalStorage('food', 'auto')
</script>

<template>
  <main>
    <form>
      <TablabbleTextArea/>
    </form>
    <p>
      what is your favourite food : <input v-model="food">
    </p>
  </main>
</template>
