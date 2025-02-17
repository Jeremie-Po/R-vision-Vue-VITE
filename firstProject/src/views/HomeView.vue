<script setup lang="ts">
import {ref} from "vue";
import {useFlash} from '@/composables/useFlash.ts'

let message = ref('')
const { flash } = useFlash();

</script>

<template>
  <main>
    <input v-model="message">
    <p>
      <button @click="flash(message)"> Click Me</button>
    </p>
  </main>
</template>
