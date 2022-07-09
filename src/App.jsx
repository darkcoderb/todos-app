import React from "react";
import S from './App.module.css';
import Input from "./Components/Input/Input";
import TodosList from "./Components/TodosList/TodosList";

function App(props) {
	return (
		<div className={S.container}>
			<div className={S.todo}>
				<div className={S.todoHeader}>
					todos
				</div>
				<Input />
				<TodosList />
			</div>
		</div>
	);
}

export default App;
