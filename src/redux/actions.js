export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const MARK_DONE = "MARK_DONE";

export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: { text }
  };
};

export const removeTodo = text => {
  return {
    type: REMOVE_TODO,
    payload: { text }
  };
};
export const markDone = id => {
  return {
    type: MARK_DONE,
    payload: { id }
  };
};
