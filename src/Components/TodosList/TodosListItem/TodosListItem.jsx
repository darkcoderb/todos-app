import React from "react";
import S from "./TodosListItem.module.css";
import {useDispatch} from "react-redux";
import {switchIsDone, switchIsHovered} from "../../../Slices/TodosSlice";

const TodosListItem = (props) => {

	const dispatch = useDispatch();

	const onClickHandler = () => {
		dispatch(switchIsDone(props.id))
	}

	const onChangeHandler = () => {
		dispatch(switchIsDone(props.id))
	}

	const renderButton = () => {
		if(props.isHovered) {
			return (
				<div>Aa</div>
			)
		}
	}

	return (
		<div
			className={props.isDone ? S.todosListItemDone : S.todosListItem}
			onClick={onClickHandler}
			// onMouseEnter={() => dispatch(switchIsHovered(props.id))}
			// onMouseLeave={() => dispatch(switchIsHovered(props.id))}
		>
			<input
				className={S.checkbox}
				onClick={onClickHandler}
				onChange={onChangeHandler}
				type="checkbox"
				checked={props.isDone}
			/>
			<div>
				{props.text}
			</div>
		</div>
	)
}

export default TodosListItem;