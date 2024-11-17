<script lang="ts">
import {defineComponent} from 'vue'
import CodeSnippet from "@/components/CodeSnippet.vue";

export default defineComponent({
  name: "StrictMode",
  components: {
    CodeSnippet,
  },
  setup() {
    /*function add(a, b) {
      return a + b;
    }*/


    /*let username; // Implicitly 'any'
    console.log(username.toUpperCase()); // Runtime Error: Cannot read properties of undefined*/

    /*let username: string | undefined;
    if (username) {
      console.log(username.toUpperCase());
    } else {
      console.log("Username is not set.");
    }*/


  }
})
</script>

<template>
  <div>
    <h3>Why Enable Strict Mode?</h3>
    <p>When the strict configuration is set to true in tsconfig.json, TypeScript enforces stricter rules, which are essential for maintaining high-quality code.</p>
    <br/>
    <v-expansion-panels style="width: 650px">
      <v-expansion-panel
        title="Common Issues Caught by Strict Mode"
      >
        <v-expansion-panel-text>
          <ul class="pl-4">
            <li>
              <h4><b>No Implicit Any:</b> Prevents the use of any as a type implicitly</h4>
              <code-snippet>
                function add(a, b) {
                <br>
                &nbsp; return a + b;
                <br>}
                <br>
                // Error: Parameter 'a' implicitly has an 'any' type
              </code-snippet>
            </li>
            <li>
              <h4><b>Strict Null Checks:</b> Ensures variables cannot have null or undefined unless explicitly allowed.</h4>
              <code-snippet>
                let name: string;
                <br>
                name = null; // Error: Type 'null' is not assignable to type 'string'
              </code-snippet>
            </li>
          </ul>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
        title="Encourages Explicit Code"
      >
        <v-expansion-panel-text>
          <p>Strict mode forces developers to handle unexpected situations or problems like undefined variables, making the code more predictable and reliable.</p>
          <br>
          <h4>Example without strict mode</h4>
          <code-snippet>
            let username; // Implicitly 'any'
            <br>
            console.log(username.toUpperCase()); // Runtime Error: Cannot read properties of undefined
          </code-snippet>
          <br>
          <h4>Example without strict mode</h4>
          <code-snippet>let username: string | undefined;
            if (username) {
            <br>
            console.log(username.toUpperCase());
            <br>
            } else {
            <br>
            console.log("Username is not set.");
            <br>
            }

          </code-snippet>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
        title="Improves Debugging"
      >
        <v-expansion-panel-text>
          With stricter rules, most bugs are caught at compile time, reducing the time spent debugging runtime errors.
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped>

</style>
