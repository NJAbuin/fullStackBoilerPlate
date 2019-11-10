import { combineReducers } from "redux";
import { productsReducer } from "./productReducer";

const reducers = { products: productsReducer };

export default combineReducers(reducers);
