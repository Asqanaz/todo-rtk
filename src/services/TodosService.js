import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const todoAPI = createApi({
	reducerPath: "todoAPI",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
	tagTypes: ["TODOS"],
	endpoints: build => ({
		fetchTodos: build.query({
			query: () => ({
				url: "/todos"
			}),
			providesTags: ["TODOS"]
		}),
		createTodo: build.mutation({
			query: todo => ({
				url: `/todos`,
				method: "POST",
				body: todo
			}),
			invalidatesTags: ["TODOS"]
		}),
		updateTodo: build.mutation({
			query: todo => ({
				url: `/todos/${todo.id}`,
				method: "PUT",
				body: todo
			}),
			invalidatesTags: ["TODOS"]
		}),
		deleteTodo: build.mutation({
			query: todo => ({
				url: `/todos/${todo.id}`,
				method: "DELETE",
				body: todo
			}),
			invalidatesTags: ["TODOS"]
		}),
		checkboxSwitch: build.mutation({
			query: todo => ({
				url: `/todos/${todo.id}`,
				method: "PUT",
				body: todo
			}),
			invalidatesTags: ["TODOS"]
		})
	})
})
