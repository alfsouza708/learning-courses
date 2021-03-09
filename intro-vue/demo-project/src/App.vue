<template>
  <div id="app">
    <h1>VueJS Todo List</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue"

export default {
  name: "App",
  components: {
    TodoList,
  },
}
</script>

<style lang="scss">
$primary-color: white;
$background-color: #2d333d;

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-color;
  background: $background-color;
}

#app {
  margin-top: 60px;
}
</style>
