<script setup lang="ts">
import {ref} from "vue";
import {useFlash} from '@/composables/useFlash.ts'

let message = ref('')
const {flash} = useFlash();

</script>

<template>
  <h1>This is a contact page</h1>
  <input v-model="message">
  <p>
    <button @click="flash(message)"> Click Me</button>
  </p>
</template>

