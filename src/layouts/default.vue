<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from "@/layouts/side-bar.vue";
import NavBar from "@/layouts/nav-bar.vue";
import { RouterView } from "vue-router";

export default defineComponent({
  name: "default",
  components: {
    RouterView,
    SideBar,
    NavBar
  }
})
</script>

<template>
  <main style="min-height: 100%; width: 100%; position: relative;">
    <side-bar style="position: fixed"></side-bar>
    <nav-bar  style="position: fixed;  left: 280px;"></nav-bar>
    <RouterView style="position:fixed; left: 280px; top: 70px" />
  </main>

</template>

<style scoped>

</style>
