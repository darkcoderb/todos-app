import React from "react";
import S from "./TodosList.module.css";
import {useDispatch, useSelector} from "react-redux";
import TodosListItem from "./TodosListItem/TodosListItem";
import {switchFilter} from "../../Slices/TodosSlice";

const TodosList = () => {

	const dispatch = useDispatch();
	const todosList = useSelector(state => state.todo.todosList);
	const filters = useSelector(state => state.todo.filters);

	let renderTodos = () => {
		if(filters.isAll) {
			return todosList.map(item => {
				return <TodosListItem
					key={item.id}
					id={item.id}
					text={item.text}
					isDone={item.isDone}
					isHovered={item.isHovered}
				/>
			})
		} else if(filters.isDone) {
			return todosList.map(item => {
				if(item.isDone) {
					return <TodosListItem
						key={item.id}
						id={item.id}
						text={item.text}
						isDone={item.isDone}
						isHovered={item.isHovered}
					/>
				}
			})
		} else if(filters.isActive) {
			return todosList.map(item => {
				if(!item.isDone) {
					return <TodosListItem
						key={item.id}
						id={item.id}
						text={item.text}
						isDone={item.isDone}
						isHovered={item.isHovered}
					/>
				}
			})
		}
	};

	const onClickHandler = (e, filter) => {
		dispatch(switchFilter(filter))
	}

	return (
		<div className={S.todosList}>
			<div className={S.filters}>
				<div
					className={filters.isAll ? S.filterActive : S.filter}
					onClick={(e) => onClickHandler(e, "isAll")}
				>
					Все
				</div>
				<div
					className={filters.isActive ? S.filterActive : S.filter}
					onClick={(e) => onClickHandler(e, "isActive")}
				>
					Активные
				</div>
				<div
					className={filters.isDone ? S.filterActive : S.filter}
					onClick={(e) => onClickHandler(e, "isDone")}
				>
					Завершенные
				</div>
			</div>
			{renderTodos()}
		</div>
	)
}

export default TodosList;