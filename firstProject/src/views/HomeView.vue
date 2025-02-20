<template>
  <form>
    <TablabbleTextArea v-model="comment" style="width:100%; height:300px "/>
  </form>
  <p>
    what is your favourite food : <input v-model="food">
  </p>
  <Footer/>
  <p>
    <h2>{{ state.name }}</h2>
    <button @click="state.name= 'Change title with this message'">Change title with this message
    </button>
  </p>
  <p>
    the counter is at Number : {{ counter.count }}
  </p>
</template>

<script setup lang="ts">
import {useLocalStorage} from "@/composables/useLocalStorage.ts";
import TablabbleTextArea from "@/components/TablabbleTextArea.vue";
import {provide, ref} from "vue";
import Footer from "@/components/footer.vue";
import {state} from "@/stores/quizzStore.ts";
import {useCounterStore} from "@/stores/counterStore.ts"

let counter = useCounterStore();
let food = useLocalStorage('food', 'auto');
let comment = ref('hi there !!');
let tab = {
  'q1': 'hello',
  'q2': 'there',
}
provide('key', 'hakounamatata');
provide('comment', comment);
provide('tab', tab);
</script>
