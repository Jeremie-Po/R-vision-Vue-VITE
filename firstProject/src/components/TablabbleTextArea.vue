<template>
  <textarea @keydown.tab.prevent=onTabPress
            @keyup="emit('update:modelValue',$event.target?.value)"
            v-text="modelValue"
  ></textarea>
</template>

<script setup lang="ts">

defineProps({
  modelValue: String,
});

let emit = defineEmits(['update:modelValue']);

function onTabPress(e) {
  let textArea = e.target;

  let val = textArea.value,
    start = textArea.selectionStart,
    end = textArea.selectionEnd;

  textArea.value = val.substring(0, start) + "\t" + val.substring(end);

  textArea.selectionStart = textArea.selectionEnd = start + 1;

}

</script>
