<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "nav-bar"
})
</script>

<template>
  <v-card
    class="mx-auto"
    max-width="448"
  >
    <v-layout>
      <v-app-bar
        style="left: 255px!important;"
        color="primary"
        density="compact"
      >

        <v-app-bar-title>TypeScript in Vue 3 Development</v-app-bar-title>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>

<style scoped>

</style>
