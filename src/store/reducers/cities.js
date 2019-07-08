
import { FETCH_CITIES , ADD_CITY} from "../types/cities";

const initialState = {
  cities:[]
}

export default  (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CITIES:
      return {
        ...state,
        cities: action.payload
      }
    case ADD_CITY:
      return {
        ...state,
        cities: [...state.cities, action.payload]
      }
    default:
      return state;
  }
}