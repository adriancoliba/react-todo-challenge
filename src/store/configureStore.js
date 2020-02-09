import { createStore } from "redux";
import rootReducer from "./reducers";

export default function configureStore(persistedState) {
  const store = createStore(
    rootReducer(history),
    persistedState,
  );
  return store;
}