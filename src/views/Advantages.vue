<template>
  <div>
    <h3>Advantages of Using TypeScript in Vue 3</h3>
    <v-expansion-panels style="width: 650px">
      <v-expansion-panel
        title="Static Typing"
      >
        <v-expansion-panel-text>
          <ul>
            <li>
              TypeScript helps catch errors at compile time rather than runtime. This is particularly useful in complex Vue 3 applications with numerous components and interactions.
            </li>
            <li>
              Example
              <code-snippet>
                let count: number = 0;
                <br>
                count = "5"; // TypeScript error: Type 'string' is not assignable to type 'number'
              </code-snippet>
            </li>
          </ul>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
        title="Enhanced Editor Support"
      >
        <v-expansion-panel-text>
          <ul>
            <li>
              TypeScript provides better autocompletion, inline documentation, and refactoring tools in editors like VS Code.
            </li>
            <li>
              It improves the development experience with hints and warnings while coding.
            </li>
          </ul>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
        title="Improved Readability and Maintainability"
      >
        <v-expansion-panel-text>
          <ul>
            <li>
              Type annotations act as documentation for developers, making it easier to understand the data structures and flow of the application.
            </li>
          </ul>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
        title="Refactoring Confidence"
      >
        <v-expansion-panel-text>
          <ul>
            <li>
              Strong typing allows developers to refactor code confidently without breaking functionality.
            </li>
          </ul>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
        title="Vue 3-Specific Benefits"
      >
        <v-expansion-panel-text>
          <ul>
            <li>
              With Vue 3's Composition API, TypeScript's type inference works seamlessly with features like ref, reactive, and computed.
            </li>
            <li>TypeScript ensures that component props, emits, and return types are consistent.</li>
          </ul>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped>


</style>
<script lang="ts">
import {defineComponent} from "vue";
import CodeSnippet from "@/components/CodeSnippet.vue";

export default defineComponent({
  components: {
    CodeSnippet
  },
  setup() {
    // let count: number = 0;
    // count = "5";




  }
});
</script>
