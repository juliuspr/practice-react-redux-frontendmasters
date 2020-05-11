import React from "react";
import { increment, decrement } from "../redux/actions";
import { connect } from "react-redux";

function Counter({ count, increment, decrement }) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = state => state.counter;

const mapDispatchToProps = {
  increment: increment,
  decrement: decrement
};

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
