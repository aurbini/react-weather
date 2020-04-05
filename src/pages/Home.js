import React, {useEffect } from 'react';
import SearchForm from "../components/SearchForm/SearchForm";
import CityList from "../components/CityList/CityList";
import MainWeather from "../components/MainWeather/MainWeather.js";
import { useWeatherContext } from "../utils/GlobalState";
import axios from "axios"; 
import CardCountainer from "../components/CardContainer/CardContainer"; 

function Home() {

  var apiKey = '8510c14918232716bc9743d7f1fc2f0c'; 
  const [ state, dispatch ] = useWeatherContext();
  const currentWeather = {}; 



  useEffect(()=>{
    console.log('rerenderap')
    const search = state.currentSearch;
    console.log(search); 
    axios({
      method: 'GET',
      url:`https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=` + apiKey+'&units=imperial'
      }).then(response =>{
        console.log(response.data.weather[0].icon); 
        currentWeather["city"] = response.data.name; 
        currentWeather["temp"] = response.data.main.temp;
        currentWeather["windSpeed"] = response.data.wind.speed;
        currentWeather["humidity"] = response.data.main.humidity;
        currentWeather["icon"] = response.data.weather[0].icon;
        currentWeather["location"] = {
          lat: response.data.coord.lat, 
          lon: response.data.coord.lon
        }
        const lat = response.data.coord.lat; 
        const lon = response.data.coord.lon; 
        console.log(lat, lon);
        axios({
          url: `https://api.openweathermap.org/data/2.5/uvi/forecast?appid=${apiKey}&lat=${lat}&lon=${lon}`,
          method: "GET"
        }).then(function(response){
          currentWeather["uvIndex"] = response.data[0].value;
          sessionStorage.setItem("lat", `${lat}`);
          sessionStorage.setItem("lon", `${lon}`);

          fiveDayWeather(currentWeather.location.lon, currentWeather.location.lat); 
        })
      })
      // uvIndex(response.coord.lon,response.coord.lat); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[state.currentSearch])
    

  const fiveDayWeather = (lon, lat, icon) => {
    axios({
      url: `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&lat=${lat}&lon=${lon}&units=imperial`,
      method: "GET"
    }).then(function(response){
      var hours = response.data.list;
      const daysOfWeek = [];
      for(let i = 0; i < hours.length;i+=8){
        let day = hours[i];
        daysOfWeek.push(day);
      }
      currentWeather["daysOfWeek"] = daysOfWeek;
      dispatch({
      type: "CURRENTWEATHER",
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
