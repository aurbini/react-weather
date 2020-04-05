import React, { useEffect } from 'react';
import { useWeatherContext } from "../../utils/GlobalState";
import "./CityList.css";

const CityList = () => {
  const [state, dispatch] = useWeatherContext();

  useEffect(()=>{
    console.log(state.currentSearch)
  },[])



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