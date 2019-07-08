import { FETCH_MEMBERS, ADD_MEMBER, REMOVE_MEMBER } from "../types/members";

export const fetchMembersFromLocalStorage = () => {
  return dispatch => {
    const members = JSON.parse(localStorage.getItem('dbMembers'));
    dispatch({
      type: FETCH_MEMBERS,
      payload: members,
    })
  }
}

export const addMember = ({lastName, firstName, address, cityId}) => {
  return dispatch => {
    const members = JSON.parse(localStorage.getItem('dbMembers'));
    if (members.find(p => p.lastName === lastName && p.firstName === firstName))
      return;
    const newMember = {
      lastName,
      firstName,
      address,
      city: Number(cityId)
    }
    members.push(newMember);
    localStorage.setItem("dbMembers", JSON.stringify(members));
    dispatch({
      type: ADD_MEMBER,
      payload: newMember,
    })
  }
}

export const removeMember = (index) => {
  return dispatch => {
    let members = JSON.parse(localStorage.getItem('dbMembers'));
    members.splice(Number(index), 1);
    localStorage.setItem("dbMembers", JSON.stringify(members));
    dispatch({
      type: REMOVE_MEMBER,
      payload: index,
    })
  }
}