import { combineReducers, bindActionCreators } from "redux";
import {
  INCREMENT,
  DECREMENT,
  ADD_TODO,
  MARK_DONE,
  SORT_ITEMS
} from "./actions";
import { v4 as uuidv4 } from "uuid";
const initialState = { count: 1 };

export const countReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === DECREMENT) {
    return { ...state, count: state.count - 1 };
  }
  return state;
};

const initialTodoState = {
  todos: []
};

export const todoReducer = (state = initialTodoState, action) => {
  if (action.type === ADD_TODO && action.payload.text !== "") {
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          text: action.payload.text,
          done: false,
          id: uuidv4()
        }
      ]
    };
  }

  if (action.type === MARK_DONE) {
    const new_state = state.todos.map(todo => {
      if (todo.id === action.payload.id) {
        return { ...todo, done: !todo.done };
      } else {
        return todo;
      }
    });
    return { ...state, todos: new_state };
  }

  if (action.type === SORT_ITEMS) {
    return {
      ...state,
      todos: sorted_todos
    };
  }

  return state;
};

export const rootReducer = combineReducers({
  counter: countReducer,
  todos: todoReducer
});
