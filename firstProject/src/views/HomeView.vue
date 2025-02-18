<script setup lang="ts">
import {useLocalStorage} from "@/composables/useLocalStorage.ts";

let food = useLocalStorage('food', 'auto')

function onTabPress(e) {
  let textArea = e.target;

  let val = textArea.value,
    start = textArea.selectionStart,
    end = textArea.selectionEnd;

  textArea.value = val.substring(0, start) + "\t" + val.substring(end);

  textArea.selectionStart = textArea.selectionEnd = start + 1;

}

</script>

<template>
  <main>
    <form>
      <textarea @keydown.tab.prevent=onTabPress
                style="width:100%; height:300px ">hi there</textarea>
    </form>
    <p>
      what is your favourite food : <input v-model="food">
    </p>
  </main>
</template>
