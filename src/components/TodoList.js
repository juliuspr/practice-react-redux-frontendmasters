import React from "react";

export default function({ todos, dispatchMarkDone }) {
  return (
    <div>
      <hr />
      {todos.map(item => (
        <li
          className={item.done ? "done" : ""}
          key={item.id}
          id={item.id}
          onClick={e => dispatchMarkDone(e.target.id)}
        >
          {item.text}
        </li>
      ))}
    </div>
  );
}
