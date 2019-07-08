
import { FETCH_MEMBERS, ADD_MEMBER, REMOVE_MEMBER } from "../types/members";

const initialState = {
  members:[]
}

export default  (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MEMBERS:
      return {
        ...state,
        members: action.payload
      }
    case ADD_MEMBER:
        return {
          ...state,
          members: [...state.members, action.payload]
        }
    case REMOVE_MEMBER:
        return {
          ...state,
          members: state.members.filter(member => member != state.members[Number(action.payload)]  )
        }
    default:
      return state;
  }
}