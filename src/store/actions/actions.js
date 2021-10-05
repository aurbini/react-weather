import * as ACTION_TYPES from './types'

export const addCity = (city) => {
  return {
    type: ACTION_TYPES.ADD_CITY, 
    payload: city
  }
}

export const currentWeather = (weather) => {
  return {
    type: ACTION_TYPES.CURRENT_WEATHER, 
    payload: weather
  }
}

export const HourlyWeather = (hourlyWeather) => {
  return {
    type: ACTION_TYPES.ADD_CITY, 
    payload: hourlyWeather
  }
}

export const sendingRequest = () => {
  return {
    type: ACTION_TYPES.SENDING
  }
}

export const successRequest = () => {
  return {
    type: ACTION_TYPES.RESPONSE
  }
}

export const errorRequest = (error) => {
  return {
    type: ACTION_TYPES.ERROR, 
    errorMessage: error.message
  }
}