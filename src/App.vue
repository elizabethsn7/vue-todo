<template>
  <div class="container">
    <div id="todo-list">
      <div class="row">
        <div class="header">
          <h1>{{ header }}</h1>
        </div>
      </div>
      <div class="row">
        <md-field class="add-todo-form">
          <md-input
            v-model="currentTodo"
            @keydown.enter="addTodo()"
            placeholder="Add a todo!"
          ></md-input>
        </md-field>
        <!-- <div class="add-todo-form"></div> -->

        <ul class="todos">
          <li
            v-for="todo in todos"
            :key="todo.id"
            :class="{ editing: todo == editedTodo }"
          >
            <input
              class="completedButton"
              type="checkbox"
              v-model="todo.completed"
            />
            <span
              class="todo-item-label"
              :class="{ completed: todo.completed }"
              @dblclick="editTodo(todo)"
              v-if="!todo.edit"
            >
              {{ todo.label }}
            </span>
            <input
              v-else
              class="todo-item-edit"
              type="text"
              v-model="todo.label"
              @keyup.enter="completedEdit(todo)"
            />

            <button @click="removeTodo(todo)" class="btn btn-accent">
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "Todo List App Created with Vue.js",
      todos: [],
      currentTodo: "",
      completed: false,
      editedTodo: null
    };
  },
  methods: {
    // addTodo method reads from the currentTodo to add a new Todo to the todos array
    addTodo() {
      this.todos.push({
        id: this.todos.length,
        label: this.currentTodo,
        edit: false
      });
      this.currentTodo = "";
    },
    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    editTodo(todo) {
      todo.edit = true;
    },
    completedEdit(todo) {
      todo.edit = false;
    }
  }
};
</script>

<style>
.row {
  margin: 35px;
}
</style>
