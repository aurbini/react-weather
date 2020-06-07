import React from 'react';
import { useWeatherContext } from "../../store/globalState";
import Card from "../Card/Card";


const CardContainer = () => {

  const [ state ] = useWeatherContext();
  const someDate = new Date();
  var numberOfDaysToAdd = 1;


  const renderCards = () =>{
    return state.daysOfWeek.map((day)=>{
      return (
        <div className="col-md-12 col-lg-2">
          <div className="card bg-primary mb-2 card-content">
            <Card temp={day.main.temp} date={someDate.setDate(someDate.getDate() + numberOfDaysToAdd)} humidity={day.main.humidity} icon={day.weather[0].icon}/>
          </div>
        </div>
    )})
  }

  return ( 
    <div className="weather-cards row">
      {state.daysOfWeek.length !== 0 ? renderCards() : ""}
    </div>
   );
}
 
export default CardContainer;