import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./styles.css";
import { Provider } from "react-redux";

import { store, persistor } from "./redux/store";
import { TodoManagerContainer } from "./components/TodoManager";
import { PersistGate } from "redux-persist/integration/react";
import { SwipeContainer } from "./components/Swipe";

export default function App(props) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CssBaseline />
        <div className="App">
          <TodoManagerContainer />
          <hr />
          <SwipeContainer />
        </div>
      </PersistGate>
    </Provider>
  );
}
