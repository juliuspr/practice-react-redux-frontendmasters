export const logger = store => {
  return next => action => {
    const value = next(action);
    store.getState();
    return value;
  };
};
