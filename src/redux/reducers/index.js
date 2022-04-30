import { combineReducers } from "redux";
import ReceiptReducer from "./receipt";

export const rootReducer = combineReducers({
  Receipt: ReceiptReducer,
});
