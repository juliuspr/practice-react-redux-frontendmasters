import React from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function({ todos }) {
  // console.log(props);
  return (
    <div>
      <h1>ToDo Manager</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}
