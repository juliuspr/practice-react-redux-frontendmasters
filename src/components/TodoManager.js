import React, { useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function(props) {
  const [state, setState] = useState({
    todoInput: "",
    todos: [{ text: "Buy milk" }, { text: "Take out the trash" }]
  });

  const submitForm = e => {
    setState({
      ...state,
      todoInput: "",
      todos: [...state.todos, { text: state.todoInput }]
    });
    e.preventDefault();
  };

  const handleFormChange = e => {
    setState({
      ...state,
      todoInput: e.target.value
    });
  };

  return (
    <div>
      <h1>ToDo</h1>
      <div>
        <h2>Todo Form</h2>
        <form>
          <input
            type="text"
            name="newTodo"
            value={state.todoInput}
            onChange={handleFormChange}
          />
          <button type="submit" onClick={submitForm} onSubmit={submitForm}>
            Add
          </button>
        </form>
      </div>
      <TodoList todos={state.todos} />
    </div>
  );
}
