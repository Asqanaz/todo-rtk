import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { todoAPI } from "../services/TodosService"
import todoReducer from "./slices/todoSlice"

export const rootReducer = combineReducers({
	todoReducer,
	[todoAPI.reducerPath]: todoAPI.reducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware => getDefaultMiddleware().concat(todoAPI.middleware)
	})
}
