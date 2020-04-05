import React,{useEffect} from 'react';
import { useWeatherContext } from "../../utils/GlobalState";
import Moment from "react-moment";



const Card = (props) => {

  const [state] = useWeatherContext(); 
  const {temp, humidity, icon, date} = props; 

  var weatherLink = `http://openweathermap.org/img/wn/${icon}@2x.png`;


  return ( 
    <div class="card-body text-center">
      <Moment format='MMMM Do YYYY'>{date}</Moment>
        <p class="card-stat text-light">{temp}</p>
        <p class="card-stat">%{humidity}</p>
        <img src={weatherLink}/>
    </div>
   );
}
 
export default Card;