<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "JavascriptExample",
  data() {
    return {
      x: null
    }
  },
  methods: {
    test() {
      this.x.forEach(it => {
        console.log(it)
      })
      this.x.find(it => it == null);
      this.x = "";
      this.x = {
        name: "Javascript",
      }
      this.x = ["a", "b", "c", "d"];
    }
  }
})
</script>

<template>

</template>

<style scoped>

</style>
