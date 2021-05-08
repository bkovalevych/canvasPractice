import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import user from "./user";
import topics from "./topics"
import steps from "./steps"
import goods from "./goods"

const reducers = combineReducers({
  router: routerReducer,
  user,
  topics,
  steps,
  goods
});

export default reducers;
