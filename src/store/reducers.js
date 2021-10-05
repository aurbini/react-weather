import * as ACTION_TYPES from './actions/types'


export default function (state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
  case ACTION_TYPES.ADD_CITY:
    return  {
      ...state, 
      city: [ action.payload, ...state.city],
      currentSearch: action.payload
    }
  case ACTION_TYPES.CURRENT_WEATHER: 
    const curWeath = action.payload
    return {
      ...state, 
      currentWeather: {
        city: curWeath.city, 
        temp: curWeath.temp, 
        humidity: curWeath.humidity, 
        icon: curWeath.icon, 
        uvIndex: curWeath.uvIndex,
        location: {
          lat: curWeath.location.lat, 
          lon: curWeath.location.lon
        }
      },
      daysOfWeek: action.payload.daysOfWeek
    }
  case ACTION_TYPES.HOURLY_WEATHER:
  return {
    ...state, 
    hourlyWeather: action.payload
    }
  }
}
