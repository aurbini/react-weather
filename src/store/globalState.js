import React, { createContext, useReducer, useContext } from "react";
import reducer from './reducers'
import hourlyWeather from "../utils/hoursObj"; 

const weatherContext = createContext();
const { Provider } = weatherContext;


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