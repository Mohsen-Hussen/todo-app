import React, { useState } from "react";
import "./TodoStyle.css";
import shortid from "shortid";

const TodoForm = ({ onSubmit }) => {
	const [text, setText] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({
			id: shortid.generate(),
			text: text,
			complete: false,
		});
		setText("");
	};
	const handleChange = (e) => {
		setText(e.target.value);
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				className="input-field"
				type="text"
				value={text}
				onChange={handleChange}
			/>
			<button className="btn" onClick={handleSubmit}>
				Add Todo
			</button>
		</form>
	);
};

export default TodoForm;
