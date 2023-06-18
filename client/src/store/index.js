import { combineReducers, createStore } from "redux";
import { pageWidthReducer } from "./pageWidthReducer";

const rootReducer = combineReducers({
	width: pageWidthReducer,
});

export const store = createStore(rootReducer);
