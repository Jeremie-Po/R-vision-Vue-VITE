<script setup lang="ts">
import {useLocalStorage} from "@/composables/useLocalStorage.ts";
import TablabbleTextArea from "@/components/TablabbleTextArea.vue";
import {ref} from "vue";

let food = useLocalStorage('food', 'auto');
let comment = ref('hi there');

</script>

<template>
  <main>
    <form>
      <TablabbleTextArea v-model="comment" style="width:100%; height:300px "
      />
    </form>
    <p>
      what is your favourite food : <input v-model="food">
    </p>
  </main>
</template>
