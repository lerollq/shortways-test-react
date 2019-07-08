import { FETCH_CITIES, ADD_CITY } from "../types/cities";

export const fetchCitiesFromLocalStorage = () => {
  return dispatch => {
    const cities = JSON.parse(localStorage.getItem('dbCities'));
    dispatch({
      type: FETCH_CITIES,
      payload: cities,
    })
  }
}

export const addCity = ({countryId, cityName}) => {
  return dispatch => {
    const cities = JSON.parse(localStorage.getItem('dbCities'));
    if (cities.find(p => p.name === cityName))
      return;
    const newCity = {
      id: String(cities.length + 1),
      country_id: Number(countryId),
      name: cityName,
    }
    cities.push(newCity);
    localStorage.setItem("dbCities", JSON.stringify(cities));
    dispatch({
      type: ADD_CITY,
      payload: newCity,
    })
  }
}