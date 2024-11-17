<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CustomComponent",
  methods: {
    open(title: string) {
      console.log('open', title)
      alert(title)
    }
  }
})
</script>

<template>

</template>

<style scoped>

</style>
