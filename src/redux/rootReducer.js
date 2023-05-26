import { combineReducers } from "redux";
import { operationReducer } from "./reducer/operation";

//Combine reducer
const rootReducer = combineReducers({
  operationReducer,
});

export default rootReducer;
