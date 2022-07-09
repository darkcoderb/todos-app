import React from "react";
import S from "./TodosListItem.module.css";
import Menu from "./Menu/Menu";
import {useDispatch} from "react-redux";
import {switchIsDone, switchIsMenuOpen, deleteTodo, switchIsEditing, changeTodoValue} from "../../../Slices/TodosSlice";

const TodosListItem = (props) => {

	const dispatch = useDispatch();

	const onClick = () => {
		if(!props.isEditing) {
			dispatch(switchIsDone(props.id))
		}
	}

	const deleteHandler = () => {
		dispatch(deleteTodo(props.id))
	}

	const todoChangeHandler = (e) => {
		dispatch(changeTodoValue({id: props.id, value: e.target.value}))
	}

	const editHandler = () => {
		dispatch(switchIsEditing(props.id))
	}

	const renderTodo = () => {
		if(props.isEditing) {
			return (
				<form onSubmit={editHandler}>
					<input className={S.listItemInput} type="text" value={props.value} onChange={(e) => {todoChangeHandler(e)}}/>
				</form>
			)
		} else {
			return (
				<div>{props.value}</div>
			)
		}
	}

	return (
		<div
			className={S.listItem}
		>
			<div onClick={onClick} className={props.isDone ? S.listItemMain + " " + S.done : S.listItemMain}>
				<input
					className={S.checkbox}
					type="checkbox"
					checked={props.isDone}
					readOnly={true}
				/>
				{renderTodo()}
			</div>
			<div className={S.listItemButtons}>
				<div className={S.listItemButton} onClick={editHandler}>
					<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px"
						 fill="#94bbe9">
						<path d="M0 0h24v24H0V0z" fill="none"/>
						<path
							d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
					</svg>
				</div>
				<div className={S.listItemButton} onClick={deleteHandler}>
					<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px"
						 fill="#eeaeca">
						<path d="M0 0h24v24H0V0z" fill="none"/>
						<path
							d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default TodosListItem;