
import {FETCH_API, FETCH_API_SUCCESS, FETCH_API_ERROR} from '../types/overall';

export const status = {
  "LOADING":0,
  "READY": 1,
  "ERROR":2,
}

const initialState = {
  status : status.IS_LOADING,
  error:""
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_API:
      return {
        ...state,
        status: status.LOADING,
      }
    case FETCH_API_SUCCESS:
      return {
        ...state,
        status: status.READY,
      }
    case FETCH_API_ERROR:
      return {
        ...state,
        status: status.ERROR,
        error: action.payload
      }
    default:
      return state;
  }
}