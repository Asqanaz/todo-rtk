import React, { useState } from "react"
import { todoAPI } from "../services/TodosService"

export const TodoItem = ({ title, item }) => {
	const [updateTodo, {}] = todoAPI.useUpdateTodoMutation()
	const [deleteTodo, {}] = todoAPI.useDeleteTodoMutation()
	const [singleValue, setSingleValue] = useState(title)
	const [checkboxSwitch, {}] = todoAPI.useCheckboxSwitchMutation()

	console.log(singleValue)
	return (
		<div className="flex flex-row items-center gap-6">
			<input
				type="text"
				value={singleValue}
				className={`outline-none border-none ${item.completed ? "text-green-600" : "text-black"}`}
				onBlur={() => updateTodo({ ...item, title: singleValue.trim() || title })}
				onChange={e => setSingleValue(e.target.value)}
			/>
			<input
				type="checkbox"
				checked={item.completed}
				onChange={() => checkboxSwitch({ ...item, completed: !item.completed })}
			/>
			<button onClick={() => deleteTodo(item)}>Delete</button>
		</div>
	)
}
