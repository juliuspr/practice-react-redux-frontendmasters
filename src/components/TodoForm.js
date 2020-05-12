import React, { useState } from "react";

export default function({ addTodo }) {
  const [state, setState] = useState({ todoInput: "" });

  const submitForm = e => {
    addTodo(state.todoInput);
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
          placeholder="Add item..."
        />
        <button type="submit" onClick={submitForm} onSubmit={submitForm}>
          Add
        </button>
      </form>
    </div>
  );
}
