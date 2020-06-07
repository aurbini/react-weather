import React, {useEffect } from 'react';
import SearchForm from "../components/SearchForm/SearchForm";
import CityList from "../components/CityList/CityList";
import MainWeather from "../components/MainWeather/MainWeather.js";
import { useWeatherContext } from "../store/globalState";
import CardCountainer from "../components/CardContainer/CardContainer"; 
import API from '../utils/API'

function Home() {

  const [ state, dispatch ] = useWeatherContext();
  const currentWeather = {}; 

  useEffect(()=>{
    const currentSearch = state.currentSearch
    loadWeather(currentSearch)
   
  },[state.currentSearch])
    
  const loadWeather = (currentSearch) => {
    API.getCurrentWeather(currentSearch)
      .then(res => {
        console.log(res)
        currentWeather["city"] = res.name; 
        currentWeather["temp"] = res.main.temp;
        currentWeather["windSpeed"] = res.wind.speed;
        currentWeather["humidity"] = res.main.humidity;
        currentWeather["icon"] = res.weather[0].icon;
        currentWeather["location"] = {
          lat: res.coord.lat, 
          lon: res.coord.lon
        }
        const lat = res.coord.lat; 
        const lon = res.coord.lon;
        loadUV(lat, lon)
      })
  }

  const loadUV = (lat, lon) => {
    API.getUV(lat, lon)
      .then(res => {
        currentWeather["uvIndex"] = res[0].value;
        sessionStorage.setItem("lat", `${lat}`);
        sessionStorage.setItem("lon", `${lon}`);
        loadFiveDay(lat, lon)
      })
  }

  const loadFiveDay = (lat, lon) => {
    API.getFiveDay(lat, lon)
      .then(res => {
        var hours = res.list;
        const daysOfWeek = [];
        for(let i = 0; i < hours.length;i+=8){
          let day = hours[i];
          daysOfWeek.push(day);
        }
        currentWeather["daysOfWeek"] = daysOfWeek;
        console.log(currentWeather)
        dispatch({
        type: "CURRENT_WEATHER",
        payload: currentWeather
        })
      })
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <aside class="col-lg-3 col-md-4 column aside-section">
            <h2>Search City</h2>
            <SearchForm /> 
            <CityList />
          </aside>
          <div class="col-lg-9 col-md-7">
            <MainWeather />
            <h2>Five Day Forecast</h2> 
            <CardCountainer />
          </div>
        </div>
      </div>
    </div>
    );
}

export default Home;
