import { combineReducers } from "redux";
import { ADD_TODO, REMOVE_TODO } from "./actions";

const initialState = { count: 1 };

export const countReducer = (state = initialState, action) => {
  if (action.type === ADD_TODO) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === REMOVE_TODO) {
    return { ...state, count: state.count - 1 };
  }
  return state;
};

export const rootReducer = combineReducers({
  counter: countReducer
});
