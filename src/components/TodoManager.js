import React from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { addTodo, markDone } from "../redux/actions";

function TodoManager({ todos, dispatchAddTodo, dispatchMarkDone }) {
  return (
    <div>
      <h1>ToDo Manager</h1>
      <TodoForm addTodo={dispatchAddTodo} />
      <TodoList todos={todos} dispatchMarkDone={dispatchMarkDone} />
    </div>
  );
}

const mapTodoDispatchToProps = {
  dispatchAddTodo: addTodo,
  dispatchMarkDone: markDone
};

const mapTodoStateToProps = state => state.todos;

export const TodoManagerContainer = connect(
  mapTodoStateToProps,
  mapTodoDispatchToProps
)(TodoManager);
