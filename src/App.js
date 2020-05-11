import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CounterContainer } from "./components/Counter";
import { TodoManagerContainer } from "./components/TodoManager";

export default function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterContainer />
        <hr />
        <TodoManagerContainer />
        <hr />
      </div>
    </Provider>
  );
}
