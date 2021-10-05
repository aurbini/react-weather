import React from 'react';
import { useWeatherContext } from "../../store/globalState";
import Moment from "react-moment";
import Jumbotron from '../UI/Jumbotron';



const MainWeather = (props) => {
  const [ state ] = useWeatherContext(); 
  const date = new Date();


  var weatherLink = `http://openweathermap.org/img/wn/${state.currentWeather.icon}@2x.png`;
  // let content = (<div className="spinner-border" role="status">
  //                 <span className="sr-only">Loading...</span>
  //                 </div>
  //               )
  // if(props.loading) content = 
   let content = <Jumbotron>
    <div className="row justify-content-center">
      <div className="col main-display">
        <h1 className="display-4">{state.currentWeather.city},
        <Moment format='MMMM Do YYYY'>{date}</Moment>
        </h1>
        <img src={weatherLink} alt="" />
        <h3>{state.currentWeather.temp} <span>&#8457;</span></h3>
        <p>{state.currentWeather.windSpeed}</p>
        <p>{state.currentWeather.uvIndex}</p> 
      </div>
    </div>
  </Jumbotron>
  return content;
}
 
export default MainWeather;