import { combineReducers } from "redux";
import { countriesReducer } from "./countryReducer";

const reducers = { countries: countriesReducer };

export default combineReducers(reducers);
