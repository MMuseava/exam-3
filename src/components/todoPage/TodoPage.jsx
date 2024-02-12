import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import { Button, TextField } from "@mui/material";

const TodoPage = () => {
	const [todo, setTodo] = useState("");
	const [todoList, setTodoList] = useState([]);

	const { setIsAuthenticated } = useContext(UserContext);

	const onChangeHandler = (e) => {
		setTodo(e.target.value);
	};

	const addTodo = () => {
		if (todo.trim() !== "") {
			setTodoList([...todoList, { text: todo, completed: false }]);
			setTodo("");
		}
	};

	const toggleTodo = (index) => {
		const newTodoList = [...todoList];
		newTodoList[index].completed = !newTodoList[index].completed;
		setTodoList(newTodoList);
	};

	const deleteTodo = (index) => {
		const newTodoList = [...todoList];
		newTodoList.splice(index, 1);
		setTodoList(newTodoList);
	};

	return (
		<div className="todo-list-container">
			<div className="todo-list-box">
				<h3 className="todo-list-heading">Todo List</h3>
				<div className="input-box">
					<TextField
						variant="outlined"
						type="text"
						id="inputBx"
						placeholder="What is the task today"
						value={todo}
						onChange={onChangeHandler}
					/>
					<Button onClick={addTodo}>Add</Button>
				</div>
				<ul>
					{todoList.map((item, index) => (
						<li key={index} className={item.completed ? "completed" : ""}>
							<TextField
								variant="outlined"
								type="checkbox"
								checked={item.completed}
								onChange={() => toggleTodo(index)}
							/>
							<span>{item.text}</span>
							<button onClick={() => deleteTodo(index)}>Delete</button>
						</li>
					))}
				</ul>
				<Button onClick={() => setIsAuthenticated(false)}>Logout</Button>
			</div>
		</div>
	);
};

export default TodoPage;
