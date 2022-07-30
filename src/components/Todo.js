import React from "react";

const Todo = ({ todo, toggleComplete, onDelete }) => {
	const { id, text, complete } = todo;
	return (
		<div className="d-f">
			<div
				style={{ textDecoration: complete ? "line-through" : "" }}
				onClick={toggleComplete}
			>
				{text}
			</div>
			<button className="delete-btn" onClick={onDelete}>
				X
			</button>
		</div>
	);
};

export default Todo;
