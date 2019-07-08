
import { FETCH_COUNTRIES, ADD_COUNTRY } from "../types/countries";

const initialState = {
  countries:[]
}

export default  (state = initialState, action) => {
  switch(action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      }
    case ADD_COUNTRY:
        return {
          ...state,
          countries: [...state.countries, action.payload]
        }
    default:
      return state;
  }
}