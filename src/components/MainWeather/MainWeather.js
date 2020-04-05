import React, {useEffect} from 'react';
import { useWeatherContext } from "../../utils/GlobalState";
import Moment from "react-moment";



const MainWeather = () => {

  const [state, dispatch ] = useWeatherContext(); 
  const date = new Date();


  var weatherLink = `http://openweathermap.org/img/wn/${state.currentWeather.icon}@2x.png`;
  console.log(weatherLink); 
  return ( 
    <div class="jumbotron jumbotron-fluid main-content mt-10">
      <div class="row justify-content-center">
        <div class="col main-display">
          <h1 class="display-4">{state.currentWeather.city},
          <Moment format='MMMM Do YYYY'>{date}</Moment>
          </h1>
          <img src={weatherLink} />
          <p>{state.currentWeather.temp}</p>
          <p>{state.currentWeather.windSpeed}</p>
          <p>{state.currentWeather.uvIndex}</p> 
        </div>
      </div>
    </div>
   );
}
 
export default MainWeather;