import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	todos: [],
	isLoading: false,
	error: ""
}

export const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo(state, action) {
			const todoList = {
				id: state.todos[state.todos.length - 1].id + 1,
				title: action.payload,
				completed: false
			}
			state.todos = [...state.todos, todoList]
		},
		checkedSwitch(state, action) {
			state.todos.map(item =>
				item.id === action.payload.id ? (item.completed = !action.payload.completed) : item
			)
		},
		deleteTodoTask(state, action) {
			state.todos.filter(item => !item.id === action.payload)
		},
		editTodoTask(state, action) {
			state.todos.map(item => (item.id === action.payload.id ? (item.title = action.payload.title) : item))
		}
	}
})

export const { addTodo, checkedSwitch, deleteTodoTask, editTodoTask } = todoSlice.actions

export default todoSlice.reducer
