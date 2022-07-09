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
					value={item.value}
					isDone={item.isDone}
					isHovered={item.isHovered}
					isMenuOpen={item.isMenuOpen}
					isEditing={item.isEditing}
				/>
			})
		} else if(filters.isDone) {
			return todosList.map(item => {
				if(item.isDone) {
					return <TodosListItem
						key={item.id}
						id={item.id}
						value={item.value}
						isDone={item.isDone}
						isHovered={item.isHovered}
						isMenuOpen={item.isMenuOpen}
						isEditing={item.isEditing}
					/>
				}
			})
		} else if(filters.isActive) {
			return todosList.map(item => {
				if(!item.isDone) {
					return <TodosListItem
						key={item.id}
						id={item.id}
						value={item.value}
						isDone={item.isDone}
						isHovered={item.isHovered}
						isMenuOpen={item.isMenuOpen}
						isEditing={item.isEditing}
					/>
				}
			})
		}
	};

	const onClick = (e, filter) => {
		dispatch(switchFilter(filter))
	}

	return (
		<div className={S.todosList}>
			<div className={S.filters}>
				<div
					className={filters.isAll ? S.filterActive : S.filter}
					onClick={(e) => onClick(e, "isAll")}
				>
					Все
				</div>
				<div
					className={filters.isActive ? S.filterActive : S.filter}
					onClick={(e) => onClick(e, "isActive")}
				>
					Активные
				</div>
				<div
					className={filters.isDone ? S.filterActive : S.filter}
					onClick={(e) => onClick(e, "isDone")}
				>
					Завершенные
				</div>
			</div>
			<div className={S.todos}>
				{renderTodos()}
			</div>
		</div>
	)
}

export default TodosList;