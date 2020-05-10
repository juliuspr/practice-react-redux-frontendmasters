import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducer";
import { logger } from "./middleware";

export const store = createStore(rootReducer, applyMiddleware(logger));
