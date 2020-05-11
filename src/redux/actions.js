export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_TODO = "ADD_TODO";
export const MARK_DONE = "MARK_DONE";

export const addTodo = text => {
  return {
    type: INCREMENT,
    payload: { text }
  };
};

export const removeTodo = text => {
  return {
    type: DECREMENT,
    payload: { text }
  };
};
export const markDone = id => {
  return {
    type: MARK_DONE,
    payload: { id }
  };
};
