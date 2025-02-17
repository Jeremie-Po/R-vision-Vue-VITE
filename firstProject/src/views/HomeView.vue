<script setup lang="ts">
import swal from 'sweetalert';
import {ref} from "vue";

let message = ref('')
let flash =(message:string)=>{
  return swal ('Success !',message,'success');
}
</script>

<template>
  <main>
    <input v-model="message">
    <p>
      <button @click="flash(message)"> Click Me</button>
    </p>
  </main>
</template>
