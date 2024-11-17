<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: "side-bar",
  setup(props, ctx) {
      const menus = [
        {name: 'home', title: 'Introduction'},
        {name: 'advantages', title: 'Advantages'},
        {name: 'strict-mode', title: 'Strict Mode'},
        {name: 'key-concepts', title: 'TypeScript in Vue 3: Key Concepts'},
      ];
      const selectedItem = ref<string[]>(['home'])
      return {
        menus,
        selectedItem
      }
  },
})
</script>

<template>
  <v-card >
    <v-layout>
      <v-navigation-drawer
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        theme="dark"
        permanent
      >
        <v-list nav :activated="selectedItem" :activatable="true">
          <router-link v-for="(menu, index) in menus" :key="index" :to="{name: menu.name}" style="color:white; line-height: 16px; padding: 0">
            <v-list-item  link :title="menu.title" :id="menu.title" :value="menu.title"></v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
.v-list-item--density-default.v-list-item--one-line {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
