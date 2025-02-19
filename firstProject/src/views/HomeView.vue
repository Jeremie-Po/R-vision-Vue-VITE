<template>
  <main>
    <form>
      <TablabbleTextArea v-model="comment" style="width:100%; height:300px "/>
    </form>
    <p>
      what is your favourite food : <input v-model="food">
    </p>
    <Footer/>
  </main>
</template>

<script setup lang="ts">
import {useLocalStorage} from "@/composables/useLocalStorage.ts";
import TablabbleTextArea from "@/components/TablabbleTextArea.vue";
import {provide, ref} from "vue";
import Footer from "@/components/footer.vue";


let food = useLocalStorage('food', 'auto');
let comment = ref('hi there');
let tab = {
  'q1': 'hello',
  'q2': 'there',
}
provide('key', 'hakounamatata');
provide('comment', {
  comment,
  changeComment: () => comment.value = 'hello',
});
provide('tab', tab);
</script>
