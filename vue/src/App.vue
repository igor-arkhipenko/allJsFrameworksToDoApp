<script>
  export default {
    name: 'Hello world',
    data: function () {
      return {
        todos: [],
        todoText: ''
      }
    },
    methods: {
      addTodo: function () {
        this.todos = [...this.todos, this.todoText]
        localStorage.setItem('vue_todos', JSON.stringify(this.todos))
        this.todoText = ''
      }
    },
    mounted: function () {
      const existingTodos = localStorage.getItem('vue_todos')
      this.todos = JSON.parse(existingTodos) || []
    }
  }
</script>

<template>
  <div>

    <ul>
      <li v-for="todo in todos" v-bind:key="todo">{{ todo }}</li>
    </ul>

    <form v-on:submit.prevent="addTodo">
      <input v-model="todoText" placeholder="What needs to be done?" />
      <button type="submit">Add todo</button>
    </form>

  </div>
</template>

<style scoped>

</style>
