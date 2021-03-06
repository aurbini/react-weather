import React, { useEffect } from 'react';
import { useWeatherContext } from "../../store/globalState";
import "./CityList.css";

const CityList = () => {
  const [ state ] = useWeatherContext();

  useEffect(()=>{
    console.log(state.currentSearch)
  },[state.currentSearch])

  return ( 
    <ul>
      {
        state.city.map(city =>{
          return (
            <li>{ city }</li>
          )
        })
      }
    </ul>
   );
}
 
export default CityList;