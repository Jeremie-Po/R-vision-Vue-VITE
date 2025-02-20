<template>
  <div>
    {{ counter.count }}
    <button @click="counter.increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
import {counter} from '@/stores/counterStore.ts'
</script>
