import { FETCH_COUNTRIES, ADD_COUNTRY } from "../types/countries";

export const fetchCountriesFromLocalStorage = () => {
  return dispatch => {
    const countries = JSON.parse(localStorage.getItem('dbCountries'));
    dispatch({
      type: FETCH_COUNTRIES,
      payload: countries,
    })
  }
}

export const addCountry = ({countryCode, countryName}) => {
  return dispatch => {
    const countries = JSON.parse(localStorage.getItem('dbCountries'));
    if (countries.find(p => p.code === countryCode) || countries.find(p => p.name === countryName))
      return;

    const newCountry = {
      id: String(countries.length + 1),
      code: countryCode,
      name: countryName,
    }
    countries.push(newCountry);
    localStorage.setItem("dbCountries", JSON.stringify(countries));
    dispatch({
      type: ADD_COUNTRY,
      payload: newCountry,
    })
  }
}