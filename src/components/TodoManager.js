import React, { useState } from "react";
import { store } from "../redux/store";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { ADD_TODO } from "../redux/actions";

export default function(props) {
  const [state, setState] = useState({ todoInput: "" });

  const submitForm = e => {
    store.dispatch({ type: ADD_TODO, payload: { text: state.todoInput } });
    setState({ todoInput: "" });
    e.preventDefault();
  };

  const handleFormChange = e => setState({ todoInput: e.target.value });

  const list = store.getState("todos");
  // console.log(list.todos.todos);

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
      <TodoList todos={list.todos.todos} />
    </div>
  );
}
