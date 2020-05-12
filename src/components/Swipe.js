import React from "react";
import {
  SwipeableList,
  SwipeableListItem
} from "@sandstreamdev/react-swipeable-list";
import { addTodo, markDone } from "../redux/actions";

import "@sandstreamdev/react-swipeable-list/dist/styles.css";
import { connect } from "react-redux";

function Swipe({ todos, dispatchMarkDone }) {
  return (
    <SwipeableList>
      {todos.map(todo => (
        <SwipeableListItem
          swipeLeft={{
            content: (
              <div className="mark-done">
                {todo.done ? "Reactivate" : "Mark as done"}
              </div>
            ),
            action: () => {
              console.info("swipe done action triggered");
              dispatchMarkDone(todo.id);
            }
          }}
          swipeRight={{
            content: <div className="snooze">Snooze</div>,
            action: () => console.info("swipe action triggered")
          }}
          onSwipeProgress={progress =>
            console.info(`Swipe progress: ${progress}%`)
          }
        >
          <div className={todo.done ? "done list" : "list"}>{todo.text}</div>
        </SwipeableListItem>
      ))}
    </SwipeableList>
  );
}

const mapTodoDispatchToProps = {
  dispatchAddTodo: addTodo,
  dispatchMarkDone: markDone
};

const mapTodoStateToProps = state => state.todos;

export const SwipeContainer = connect(
  mapTodoStateToProps,
  mapTodoDispatchToProps
)(Swipe);
