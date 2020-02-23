import { combineReducers } from "redux";
import { TestAction } from "./action-interfaces";
import { RootReducerInterface } from "./interfaces";

function test(state = "nothing", action: TestAction): string {
  switch (action.type) {
    case "_test":
      return "_test";

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  test
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
