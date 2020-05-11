export const logger = store => {
  return next => action => {
    const value = next(action);
    console.log(store.getState());
    return value;
  };
};
