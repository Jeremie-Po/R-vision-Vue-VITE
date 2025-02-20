<script setup>
import {useCounterStore} from "@/stores/counterStore.ts";

let counter = useCounterStore();
</script>

<template>
  <div>
    <h1>{{ counter.count }}</h1>

    <button
      @click="counter.increment()"
      :disabled="! counter.remaining"
    >Increment ({{ counter.remaining }} Remaining)
    </button>
  </div>
</template>
