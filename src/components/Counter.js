import React from "react";

export default function({ counter, increment, decrement }) {
  return (
    <div>
      <h1>{counter.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
