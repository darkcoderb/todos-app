import {createSlice, current} from "@reduxjs/toolkit";

const todosSlice = createSlice({
	name: 'todo',
	initialState: {
		todosList: [
			{id: 1, text: "Найти вакансию", isDone: true, isHovered: false},
			{id: 2, text: "Создать приложение", isDone: false, isHovered: false},
			{id: 3, text: "Попасть на стажировку", isDone: false, isHovered: false},
		],
		todoInput: '',
		filters: {
			isAll: true,
			isActive: false,
			isDone: false
		}
	},
	reducers: {
		addTodo(state, action) {
			state.todosList.push(
				{
					id: state.todosList.length + 1,
					text: action.payload,
					isDone: false,
					isHovered: false
				}
			);
			state.todoInput = "";
		},
		switchIsDone(state, action) {
			state.todosList.map(item => {
				if (item.id === action.payload) {
					item.isDone = !item.isDone
				}
			});
		},
		changeTodoInput(state, action) {
			state.todoInput = action.payload;
		},
		switchIsHovered(state, action) {
			state.todosList.map(item => {
				if (item.id === action.payload) {
					item.isHovered = !item.isHovered
				}
			});
		},
		switchFilter(state, action) {
			if(action.payload === "isAll") {
				state.filters = {
					isAll: true,
					isActive: false,
					isDone: false
				}
			} else if(action.payload === "isActive") {
				state.filters = {
					isAll: false,
					isActive: true,
					isDone: false
				}
			} else if(action.payload === "isDone") {
				state.filters = {
					isAll: false,
					isActive: false,
					isDone: true
				}
			}
		}
	}
});

export const {
	addTodo,
	switchIsDone,
	changeTodoInput,
	switchIsHovered,
	switchFilter,
} = todosSlice.actions;

export default todosSlice.reducer;