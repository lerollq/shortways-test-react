import {combineReducers} from 'redux';
import overallReducer from "./overall";
import citiesReducer from "./cities";
import countriesReducer from "./countries";
import membersReducer from "./members";

export default combineReducers({
  overall:overallReducer,
  cities: citiesReducer,
  countries: countriesReducer,
  members: membersReducer,
})