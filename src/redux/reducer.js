import { combineReducers } from "redux";
import { INCREMENT, DECREMENT, ADD_TODO } from "./actions";

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
  todos: [
    { text: "Buy milk" },
    { text: "Take out the trash" },
    { text: "Different from state" }
  ]
};

export const todoReducer = (state = initialTodoState, action) => {
  if (action.type === ADD_TODO) {
    return {
      ...state,
      todos: [...state.todos, { text: action.payload.text }]
    };
  }

  return state;
};

export const rootReducer = combineReducers({
  counter: countReducer,
  todos: todoReducer
});
