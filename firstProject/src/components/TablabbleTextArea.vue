<template>
      <textarea @keydown.tab.prevent=onTabPress
                style="width:100%; height:300px "
      >hi there
      </textarea>
</template>

<script setup lang="ts">
function onTabPress(e) {
  let textArea = e.target;

  let val = textArea.value,
    start = textArea.selectionStart,
    end = textArea.selectionEnd;

  textArea.value = val.substring(0, start) + "\t" + val.substring(end);

  textArea.selectionStart = textArea.selectionEnd = start + 1;

}

</script>
