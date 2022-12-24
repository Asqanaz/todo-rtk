import React, { useState } from "react"
import { todoAPI } from "../services/TodosService"

export const TodoItem = ({ title, item, value }) => {
	const [updateTodo, {}] = todoAPI.useUpdateTodoMutation()
	const [deleteTodo, {}] = todoAPI.useDeleteTodoMutation()
	const [checkboxSwitch, {}] = todoAPI.useCheckboxSwitchMutation()

	const handleEditTask = e => {
		updateTodo({ ...item, title: e.target.value || title })
	}

	const handleDelete = () => {
		deleteTodo(item)
	}

	const handleCheckbox = () => {
		checkboxSwitch({ ...item, completed: !item.completed })
	}

	return (
		<div className="flex flex-row items-center gap-6">
			<input
				type="text"
				defaultValue={title}
				className={`outline-none border-none ${item.completed ? "text-green-600" : "text-black"}`}
				onBlur={handleEditTask}
			/>
			<input type="checkbox" checked={item.completed} onChange={handleCheckbox} />
			<button onClick={handleDelete}>Delete</button>
		</div>
	)
}
