import React from "react";
import S from './App.module.css';
import TodoInput from "./Components/TodoInput/TodoInput";
import TodosList from "./Components/TodosList/TodosList";

function App(props) {
	return (
		<div className={S.container}>
			<div className={S.todo}>
				<TodoInput />
				<TodosList />
			</div>
		</div>
	);
}

export default App;
