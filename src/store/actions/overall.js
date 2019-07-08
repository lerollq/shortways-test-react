import {
  FETCH_API, FETCH_API_SUCCESS, FETCH_API_ERROR
} from "../types/overall";
import {fetchCitiesFromLocalStorage} from "../actions/cities";
import {fetchCountriesFromLocalStorage} from "../actions/countries";
import {fetchMembersFromLocalStorage} from "../actions/members";

export const fetchDataFromFakeDB = () => {
  return dispatch => {
    dispatch(fetchStarted());

    // TIMEOUT FOR SIMULATE FETCHING DATA FROM ONLINE DATABASE
    setTimeout(() => {
      fetch('/fakeDB.json')
        .then(response => response.json())
        .then(json => {
          if (!localStorage.getItem("dbCities")) {
            localStorage.setItem('dbCities', JSON.stringify(json.datastore.cities));
          }
          if (!localStorage.getItem("dbCountries")) {
            localStorage.setItem('dbCountries', JSON.stringify(json.datastore.countries));
          }
          if (!localStorage.getItem("dbMembers")) {
            localStorage.setItem('dbMembers', JSON.stringify(json.datastore.members));
          }
          dispatch(fetchCitiesFromLocalStorage());
          dispatch(fetchCountriesFromLocalStorage());
          dispatch(fetchMembersFromLocalStorage());
          dispatch(fetchSuccess());
        })
        .catch(err => dispatch(fetchError(err)));
    }, 1000);
  }

}

const fetchStarted = () => ({
  type:FETCH_API,
})

const fetchSuccess = () => ({
  type: FETCH_API_SUCCESS
});

const fetchError = (err) => ({
  type: FETCH_API_ERROR,
  payload: err
});