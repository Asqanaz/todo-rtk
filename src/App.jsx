import { useEffect, useState } from "react"
import { TodoItem } from "./components/TodoItem"
import { todoAPI } from "./services/TodosService"
import { addTodo } from "./store/slices/todoSlice"

function App() {
	const [inpValue, setInpValue] = useState("")
	const { data: todos, isLoading, error, refetch } = todoAPI.useFetchTodosQuery()
	const [createPost, {}] = todoAPI.useCreateTodoMutation()

	const handleCreateTodo = async () => {
		await createPost({ title: inpValue, completed: false })
	}

	useEffect(() => {
		error && setTimeout(() => refetch(), 2000)
	}, [error])

  console.log(todos)

  console.log(error)

	return (
		<div className="flex flex-col justify-center items-center max-w-[768px] mx-auto">
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>{error.status}</h1>}
			<div className="flex flex-row gap-5">
				<input type="text" onChange={e => setInpValue(e.target.value)} value={inpValue} />
				<button onClick={handleCreateTodo}>Add Tasks</button>
			</div>

			<div className="flex flex-col gap-y-5 mt-10">
				{todos?.map(item => (
					<TodoItem key = {item.id} title={item.title} item={item} value={inpValue} />
				))}
			</div>
		</div>
	)
}

export default App
