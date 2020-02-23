import { createStore } from "redux";
import { MakeStore } from "next-redux-wrapper";
import rootReducer from "../reducers";

const makeStore: MakeStore = initialState => {
  return createStore(rootReducer, initialState);
};

export default makeStore;
