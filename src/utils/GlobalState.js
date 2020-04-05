import React, { createContext, useReducer, useContext } from "react";
import hourlyWeather from "./hoursObj"; 

const weatherContext = createContext();
const { Provider } = weatherContext;

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
  case "ADDCITY":
    return  {
      ...state, 
      city: [ action.payload, ...state.city],
      currentSearch: action.payload
    }
  case "CURRENTWEATHER": 
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
  case "HOURLYWEATHER":
  console.log(action.payload); 
  return {
    ...state, 
    hourlyWeather: action.payload
    }
  }
}

const WeatherProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    city: [],
    currentSearch: "Miami", 
    currentWeather: {
      location: {
        lat: "", 
        lon: ""
      },
      city: "", 
      temp: "", 
      humidity: "", 
      icon: "", 
      uvIndex: ""
    }, 
    daysOfWeek: [],
    hourlyWeather,
    lowAndHigh: {
      low: "", 
      high:""
    }
  })
  return <Provider value={[state, dispatch]} {...props} />;
}

const useWeatherContext = () => {
  return useContext(weatherContext);
}

export { WeatherProvider, useWeatherContext };