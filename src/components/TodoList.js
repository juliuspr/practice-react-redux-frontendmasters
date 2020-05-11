import React from "react";

export default function({ todos }) {
  return (
    <div>
      <hr />
      {todos.map(item => (
        <li key={item.text}>{item.text}</li>
      ))}
    </div>
  );
}
