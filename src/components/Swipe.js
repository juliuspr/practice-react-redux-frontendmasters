import React, { useEffect } from "react";
import {
  SwipeableList,
  SwipeableListItem
} from "@sandstreamdev/react-swipeable-list";
import { addTodo, markDone, sortItems } from "../redux/actions";

import "@sandstreamdev/react-swipeable-list/dist/styles.css";

import { connect } from "react-redux";

function Swipe({ todos, dispatchMarkDone, dispatchSortItems }) {
  return (
    <SwipeableList>
      {todos
        .sort((itemA, itemB) => {
          if (itemA.done) {
            return 1;
          }
          if (!itemA.done) {
            return -1;
          }
          return 0;
        })
        .map(todo => (
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
            <div
              id={todo.id}
              key={todo.id}
              title="Double click to toggle"
              style={{ userSelect: "none", cursor: "pointer" }}
              onDoubleClick={e => {
                dispatchMarkDone(e.target.id);
              }}
              className={todo.done ? "done list" : "list"}
            >
              {todo.text}
            </div>
          </SwipeableListItem>
        ))}
    </SwipeableList>
  );
}

const mapTodoDispatchToProps = {
  dispatchAddTodo: addTodo,
  dispatchMarkDone: markDone,
  dispatchSortItems: sortItems
};

const mapTodoStateToProps = state => state.todos;

export const SwipeContainer = connect(
  mapTodoStateToProps,
  mapTodoDispatchToProps
)(Swipe);
