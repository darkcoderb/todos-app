import {createSlice, current} from "@reduxjs/toolkit";

const defaultTodos = [
	{id: 1, value: "Найти вакансию", isDone: true, isMenuOpen: false, isEditing: false},
	{id: 2, value: "Создать приложение", isDone: false, isMenuOpen: false, isEditing: false},
	{id: 3, value: "Попасть на стажировку", isDone: false, isMenuOpen: false, isEditing: false},
];

let todos;

if(!localStorage.todosApp) {
	localStorage.setItem("todosApp", JSON.stringify(defaultTodos))
	todos = JSON.parse(localStorage.todosApp)
} else {
	todos = JSON.parse(localStorage.todosApp);
	todos.map(item => {
		if(item.isEditing) {
			item.isEditing = false
		}
	})
}

const todosSlice = createSlice({
	name: 'todo',
	initialState: {
		todosList: todos,
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
					value: action.payload,
					isDone: false,
					isMenuOpen: false,
					isEditing: false
				}
			);
			state.todoInput = "";
			localStorage.todosApp = JSON.stringify(state.todosList);
		},
		deleteTodo(state, action) {
			state.todosList.map((item, index) => {
				if (item.id === action.payload) {
					state.todosList.splice(index, 1)
				}
			});
			localStorage.todosApp = JSON.stringify(state.todosList);
		},
		switchIsDone(state, action) {
			state.todosList.map(item => {
				if (item.id === action.payload) {
					item.isDone = !item.isDone
				}
			});
			localStorage.todosApp = JSON.stringify(state.todosList);
		},
		changeTodoInput(state, action) {
			state.todoInput = action.payload;
		},
		changeTodoValue(state, action) {
			state.todosList.map(item => {
				if (item.id === action.payload.id) {
					item.value = action.payload.value
				}
			});
			localStorage.todosApp = JSON.stringify(state.todosList);
		},
		switchIsMenuOpen(state, action) {
			state.todosList.map(item => {
				if (item.id === action.payload) {
					item.isMenuOpen = !item.isMenuOpen
				}
			});
		},
		switchIsEditing(state, action) {
			state.todosList.map(item => {
				if (item.id === action.payload) {
					item.isEditing = !item.isEditing
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
	switchFilter,
	switchIsMenuOpen,
	deleteTodo,
	switchIsEditing,
	changeTodoValue
} = todosSlice.actions;

export default todosSlice.reducer;