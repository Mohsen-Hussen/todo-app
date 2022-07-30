import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

const App = () => {
	let [todos, setTodos] = useState([]);
	const [todoToShow, setTodoToShow] = useState("all");
	const [toggleAllComplete, setToggleAllComplete] = useState(true);

	const addTodo = (todo) => {
		setTodos([...todos, todo]);
	};

	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					// suppose to update
					return {
						...todo,
						complete: !todo.complete,
					};
				} else {
					return todo;
				}
			})
		);
	};

	const handleDelete = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const removeAllTodosThatAreComplete = () => {
		setTodos(todos.filter((todo) => !todo.complete));
	};

	const updateTodoToShow = (s) => {
		setTodoToShow(s);
	};

	//update todoToShow in state
	if (todoToShow === "active") {
		todos = todos.filter((todo) => !todo.complete);
	} else if (todoToShow === "complete") {
		todos = todos.filter((todo) => todo.complete);
	}
	return (
		<div className="container">
			<TodoForm onSubmit={addTodo} />
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					onDelete={() => handleDelete(todo.id)}
					toggleComplete={() => toggleComplete(todo.id)}
				/>
			))}
			<div>
				<button
					className="update-btn btn "
					onClick={() => updateTodoToShow("all")}
				>
					All
				</button>
				<button
					className="update-btn btn"
					onClick={() => updateTodoToShow("active")}
				>
					Active
				</button>
				<button
					className="update-btn btn"
					onClick={() => updateTodoToShow("complete")}
				>
					Complete
				</button>
			</div>
			{todos.some((todo) => todo.complete) ? (
				<button className="all-btn btn" onClick={removeAllTodosThatAreComplete}>
					Remove all complete todos
				</button>
			) : null}
			<button
				className="all-btn btn"
				onClick={() => {
					setTodos(
						todos.map((todo) => ({
							...todo,
							complete: toggleAllComplete,
						}))
					);
					setToggleAllComplete(!toggleAllComplete);
				}}
			>
				Toggle all complete : {`${toggleAllComplete}`}
			</button>
		</div>
	);
};

export default App;
