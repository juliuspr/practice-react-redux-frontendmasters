import React from "react";

export default function({ todos }) {
  const r = todos.map(item => <li key={item.text}>{item.text}</li>);
  return (
    <div>
      <h2>Todo List</h2>
      {r}
    </div>
  );
}
