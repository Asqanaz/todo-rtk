import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { todoAPI } from "../services/TodosService"

export const setupStore = () => {
	return configureStore({
		reducer: {
			[todoAPI.reducerPath]: todoAPI.reducer
		},
		middleware: getDefaultMiddleware => getDefaultMiddleware().concat(todoAPI.middleware)
	})
}
