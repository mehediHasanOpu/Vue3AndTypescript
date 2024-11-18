<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CodeSnippet"
})
</script>

<template>
  <div id="code-snippet" class="mx-auto">
    <slot></slot>
  </div>
</template>

<style scoped>
  #code-snippet {
    margin: 0;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: #ffffff;
    display: flex;
    justify-content: start;
    align-items: center;
  }
</style>
