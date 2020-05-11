import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { CounterContainer } from "./components/Counter";
import { TodoManagerContainer } from "./components/TodoManager";
import { PersistGate } from "redux-persist/integration/react";

export default function App(props) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <CounterContainer />
          <hr />
          <TodoManagerContainer />
          <hr />
        </div>
      </PersistGate>
    </Provider>
  );
}
