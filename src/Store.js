import {configureStore} from "@reduxjs/toolkit";
import todosSlice from "./Slices/TodosSlice";

export default configureStore({
	reducer: {
		todo: todosSlice,
	}
});