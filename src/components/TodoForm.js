import React, { useState } from "react";
import { ADD_TODO } from "../redux/actions";
import { store } from "../redux/store";

export default function() {
  const [state, setState] = useState({ todoInput: "" });

  const submitForm = e => {
    store.dispatch({ type: ADD_TODO, payload: { text: state.todoInput } });
    setState({ todoInput: "" });
    e.preventDefault();
  };

  const handleFormChange = e => setState({ todoInput: e.target.value });

  return (
    <div>
      <form>
        <input
          type="text"
          name="newTodo"
          value={state.todoInput}
          onChange={handleFormChange}
          placeholder="Add todo..."
        />
        <button type="submit" onClick={submitForm} onSubmit={submitForm}>
          Add
        </button>
      </form>
    </div>
  );
}
