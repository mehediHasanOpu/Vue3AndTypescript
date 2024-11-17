<script lang="ts">
import {defineComponent, ref, reactive} from 'vue'
import type { PropType } from "vue";
import CodeSnippet from "@/components/CodeSnippet.vue";
import CustomComponent from "@/components/CustomComponent.vue";

export default defineComponent({
  name: "KeyConcepts",
  props: {
    count: {
      type: Number,
      required: false,
    },
    name: {
      type: String as PropType<string>,
      required: false,
    },
  },
  components: {
    CodeSnippet,
    CustomComponent
  },
  emits: {
    update: (value: number) => true,
    submit: (value: string) => true,
  },
  setup(props, { emit }) {
    // Typing Props
    //console.log(props.count + 1); // TypeScript knows props.count is a number

    // ref and reactive
    const count = ref<number>(0); // count is a Ref<number>
    const state = reactive<{ name: string; age: number }>({
      name: 'John',
      age: 30,
    });
    count.value = 5; // Works
    //count.value = "string"; // Error: Type 'string' is not assignable to type 'number'

    //Emits and Events
    emit('update', 123); // Works
    //emit('update', 'string'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'


    // DefineComponent with Typescript
    //emit('submit', props.id); // not valid
    //emit('submit', props.name); // valid
    //emit('update', props.count); // valid


    const customComponent = ref<InstanceType<typeof CustomComponent> | null>(null);

    const open = () => {
      if (customComponent.value) {
        //customComponent.value.open(54646);
      }
    }
    return {
      customComponent,
      open
    }
  },
})
</script>

<template>
  <div>
    <v-expansion-panels style="width: 650px">
      <v-expansion-panel
        title="Typing Props"
      >
        <v-expansion-panel-text>
          <h3>Define the type of props to ensure they are used correctly</h3>
          <code-snippet>
            props: {
            <br>
            count: {
            type: Number,
            required: true,
            },
            <br>
            },
            <br>
            setup(props) {
            <br>
            console.log(props.count + 1); // TypeScript knows props.count is a number
            },
            <br>
            });
          </code-snippet>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
        title="Using ref and reactive"
      >
        <v-expansion-panel-text>
          <h3>TypeScript understands the reactive data structure, providing proper type inference.</h3>
          See the example in code
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
        title="Using ref for Element Access"
      >
        <v-expansion-panel-text>
          <h3>
            In Vue 3, the ref function from the Composition API is the preferred way to access elements. It is more reactive, type-safe, and works seamlessly with Vue's reactivity system.
          </h3>
          <v-btn @click="open">Open</v-btn>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
        title="Emits and Events"
      >
        <v-expansion-panel-text>
          <h3>Strict typing ensures events emitted by a component are valid</h3>
          See the example in code
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
        title="DefineComponent with TypeScript"
      >
        <v-expansion-panel-text>
          <img src="../assets/Screenshot 2024-11-17 at 5.57.25 PM.png"/>
        </v-expansion-panel-text>
      </v-expansion-panel>

    </v-expansion-panels>
    <custom-component ref="customComponent"></custom-component>

  </div>

</template>

<style scoped>

</style>
