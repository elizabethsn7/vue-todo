<template>
	<div class="container">
		<div id="todo-list">
			<div class="row">
				<div class="md-display-1">
					<h1>{{ header }}</h1>
				</div>
			</div>

			<div class="row">
				<md-card md-with-hover>
					<md-field md-clearable>
						<label>Add a todo</label>
						<md-input
							v-model="currentTodo"
							@keydown.enter="addTodo()"
						></md-input>
					</md-field>
					<md-card-header>
						<div class="md-title">
							You can...
							<br />Complete It, Delete It, and Double Click To Edit
						</div>
					</md-card-header>
					<md-list class="todos">
						<md-list-item
							v-for="todo in todos"
							:key="todo.id"
							:class="{ editing: todo == editedTodo }"
						>
							<md-checkbox v-model="todo.completed"></md-checkbox>
							<span
								class="todo-item-label"
								:class="{ completed: todo.completed }"
								@dblclick="editTodo(todo)"
								v-if="!todo.edit"
								>{{ todo.label }}</span
							>
							<input
								v-else
								class="todo-item-edit"
								type="text"
								v-model="todo.label"
								@keyup.enter="completedEdit(todo)"
							/>
							<md-card-actions>
								<md-button class="md-fab md-mini" @click="removeTodo(todo)">
									<md-icon>delete</md-icon>
								</md-button>
							</md-card-actions>
						</md-list-item>
					</md-list>
				</md-card>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			header: 'Created with Vue.js & Material UI',
			todos: [],
			currentTodo: '',
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
			this.currentTodo = '';
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

<style scoped>
.container {
	margin: 0 auto;
	width: 70%;
	min-height: calc(100% - 20px);
}
.md-display-1 {
	line-height: 65px;
}
.btnClr {
	background-color: yellow;
}
label {
	margin-left: 15px;
}
.md-card-header {
	padding-top: 10px;
}
.md-title {
	text-align: center;
}
.md-field {
	margin: 4px 0 20px;
	padding-left: 15px;
}
</style>
