import { combineReducers } from "redux";
import { cakeReducer } from "./cake_reducer.js";
import { iceCreamReducer } from "./icecream_reducer.js";

export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})