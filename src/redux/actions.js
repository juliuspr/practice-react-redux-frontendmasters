export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const MARK_DONE = "MARK_DONE";

export const increment = text => {
  return {
    type: INCREMENT,
    payload: { text }
  };
};

export const decrement = text => {
  return {
    type: DECREMENT,
    payload: { text }
  };
};

export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: { text }
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: { id }
  };
};
export const markDone = id => {
  return {
    type: MARK_DONE,
    payload: { id }
  };
};
