<template>
  <section class="todoapp">
    <input type="text" v-model="newTodo" @keyup.enter="addTodo" />

    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span :class="{ done: todo.done }" @click="doneTodo(todo)">{{ todo.content }}</span>
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </section>
</template>

<script>
import { ref } from "vue"

export default {
  name: "TodoList",
  setup() {
    const newTodo = ref("")
    const defaultData = [
      {
        done: true,
        content: "Fazer uma todo List em Vue 3",
      },
    ]
    const todosData = JSON.parse(localStorage.getItem("todos")) || defaultData
    const todos = ref(todosData)

    function addTodo() {
      if (newTodo.value) {
        todos.value.push({
          done: false,
          content: newTodo.value,
        })
        newTodo.value = ""
      }
      saveData()
    }

    function doneTodo(todo) {
      todo.done = !todo.done
      saveData()
    }

    function removeTodo(index) {
      todos.value.splice(index, 1)
      saveData()
    }

    function saveData() {
      const storageData = JSON.stringify(todos.value)
      localStorage.setItem("todos", storageData)
    }

    return {
      todos,
      newTodo,
      addTodo,
      doneTodo,
      removeTodo,
      saveData,
    }
  },
}
</script>

<style lang="scss" scoped>
$border: 2px solid
  rgba(
    $color: white,
    $alpha: 0.35,
  );

$primaryColor: #48cf70;

input {
  background-color: transparent;
  border: $border;
  color: inherit;
  margin-bottom: 1em;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style-type: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin: 1em;
  }

  button {
    background-color: $primaryColor;
    border: 1px solid $primaryColor;
    color: inherit;
    font-weight: bold;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    height: 2.5em;
  }

  .done {
    text-decoration: line-through;
  }
}
</style>
