import React from "react";
import "./styles.css";
import { connect, Provider } from "react-redux";
import { store } from "./redux/store";
import { addTodo, removeTodo } from "./redux/actions";
import { bindActionCreators } from "redux";

export default function App(props) {
  return (
    <Provider store={store}>
      <AppMiddle />
    </Provider>
  );
}

function AppChild({ count, increment, decrement }) {
  return (
    <div className="App">
      <h1>Hi s {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = state => state.counter;
// const mapDispatchToProps = function(dispatch) {
//   return {
//     increment: function() {
//       dispatch(addTodo(1));
//     },
//     decrement: function() {
//       dispatch(removeTodo(1));
//     }
//   };
// };

const mapDispatchToProps = {
  increment: addTodo,
  decrement: removeTodo
};

const AppMiddle = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppChild);
