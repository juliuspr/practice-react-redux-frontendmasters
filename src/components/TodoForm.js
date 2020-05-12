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
      <form noValidate autoComplete="off">
        <input
          type="text"
          name="newTodo"
          value={state.todoInput}
          onChange={handleFormChange}
          placeholder="Add item..."
          id="standard-basic"
          label="Add Item..."
        />

        <button
          type="submit"
          onClick={submitForm}
          onSubmit={submitForm}
          variant="contained"
          color="primary"
          disableElevation
        >
          +
        </button>
      </form>
    </div>
  );
}
