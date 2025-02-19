<template>
  <div>Hello there</div>
  <div>{{ key }}</div>
  <div> {{ tab.q1 }} {{ tab.q2 }}</div>
  <input v-model="comment"/>
</template>

<script setup>

import {inject} from "vue";

let key = inject('key');
let comment = inject('comment');
let tab = inject('tab');

</script>
