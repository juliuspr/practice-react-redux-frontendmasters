import React from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

function TodoManager({ todos, dispatchAddTodo }) {
  return (
    <div>
      <h1>ToDo Manager</h1>
      <TodoForm addTodo={dispatchAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

const mapTodoDispatchToProps = {
  dispatchAddTodo: addTodo
};

const mapTodoStateToProps = state => state.todos;

export const TodoManagerContainer = connect(
  mapTodoStateToProps,
  mapTodoDispatchToProps
)(TodoManager);
