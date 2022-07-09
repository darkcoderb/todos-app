import React from "react";
import S from "./Input.module.css";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, changeTodoInput} from "../../Slices/TodosSlice";

const Input = () => {

	const dispatch = useDispatch();
	const todoInput = useSelector(state => state.todo.todoInput);

	let onClick = (e) => {
		e.preventDefault();
		if (todoInput.length > 0) {
			dispatch(addTodo(todoInput))
		}
	}

	let onChange = (e) => {
		dispatch(changeTodoInput(e.target.value));
	}

	let onSubmit = (e) => {
		e.preventDefault();
		onClick();
	}

	return (
		<form onSubmit={(e) => onSubmit(e)}>
			<div className={S.todoInput}>
				<input value={todoInput} onChange={(e) => onChange(e)} type="text"
					   placeholder="Что вам нужно сделать?"/>
				<button type="submit" className={S.todoInputAddButton} onClick={(e) => onClick(e)}>
					<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
						<path d="M0 0h24v24H0V0z" fill="none"/>
						<path
							d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
						/>
					</svg>
				</button>
			</div>
		</form>
	)
}

export default Input;