import React from "react";
import "./styles.css";
import { connect, Provider } from "react-redux";
import { store } from "./redux/store";
import { addTodo, removeTodo } from "./redux/actions";
import Counter from "./components/Counter";
import TodoManager from "./components/TodoManager";

export default function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterContainer />
        <hr />
        <TodoManagerContainer />
      </div>
    </Provider>
  );
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  increment: addTodo,
  decrement: removeTodo
};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

const mapTodoDispatchToProps = {
  addTodo: addTodo
};

const mapTodoStateToProps = state => state.todos;

const TodoManagerContainer = connect(
  mapTodoStateToProps,
  mapTodoDispatchToProps
)(TodoManager);
