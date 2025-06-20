<script setup lang="ts">
  import { useCounter } from '../composables/useCounter';
  import { useToggle } from '../composables/useToggle';
  
  const {count,increment,decrement} = useCounter();
  const { state,toggle } = useToggle();

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    {{state}}
    <button @click="toggle()">Toggle</button>
  </div>
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
