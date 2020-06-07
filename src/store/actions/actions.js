import * as ACTION_TYPES from './types'
import axios from 'axios'

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
