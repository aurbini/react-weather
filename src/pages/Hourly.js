import React, {useEffect} from 'react';
import { useWeatherContext } from "../utils/GlobalState";
import axios from "axios"; 
import {Line} from 'react-chartjs-2';
import hourlyWeather from "../utils/hoursObj";
import Moment from "react-moment";
import { max } from 'moment';


const Hourly = ()=>{

  const [state, dispatch ] = useWeatherContext(); 

  var apiKey = '8510c14918232716bc9743d7f1fc2f0c'; 
  const someDate = new Date();

  useEffect(()=>{   
    const lat = sessionStorage.getItem('lat');
    const lon = sessionStorage.getItem('lon');
    axios({
      url: `https://api.openweathermap.org/data/2.5/forecast/?appid=${apiKey}&lat=${lat}&lon=${lon}&units=imperial`,
      method: "GET"
    }).then(function(response){
      console.log(response); 
      var hours = response.data.list;
      let addTime = 3;
      for(let i = 1; i < 11;i++){
        let currentWeather = hours[i].main;
        const hour = "hour" + i.toString();
        hourlyWeather[hour].temp = currentWeather.temp; 
        hourlyWeather[hour].humidity = currentWeather.humidity; 
        if(someDate.getHours() > 12){
          hourlyWeather[hour].hour = someDate.getHours() - 12 + addTime;
          if(hourlyWeather[hour].hour > 12){
            hourlyWeather[hour].hour -= 12;
          }
        }else{
          hourlyWeather[hour].hour = someDate.getHours() + addTime; 
        }
        addTime += 1
      }

      dispatch({
        type: "HOURLYWEATHER", 
        payload: hourlyWeather 
      })
    })
  }, [])

  useEffect(()=>{
    console.log(state); 
  }, [])



  const label = {
    labels: [ state.hourlyWeather.hour1.hour, 
              state.hourlyWeather.hour2.hour,
              state.hourlyWeather.hour3.hour,
              state.hourlyWeather.hour4.hour,
              state.hourlyWeather.hour5.hour,
              state.hourlyWeather.hour6.hour,
              state.hourlyWeather.hour7.hour,
              state.hourlyWeather.hour8.hour,
              state.hourlyWeather.hour9.hour,
              state.hourlyWeather.hour10.hour
    ],
    datasets: [
      {
        label: 'Temp',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [state.hourlyWeather.hour1.temp, 
          state.hourlyWeather.hour2.temp,
          state.hourlyWeather.hour3.temp,
          state.hourlyWeather.hour4.temp,
          state.hourlyWeather.hour5.temp,
          state.hourlyWeather.hour6.temp,
          state.hourlyWeather.hour7.temp,
          state.hourlyWeather.hour8.temp,
          state.hourlyWeather.hour9.temp,
          state.hourlyWeather.hour10.temp
        ]
      }
    ]
  }
  const labelTwo = {
    labels: [ state.hourlyWeather.hour1.hour, 
              state.hourlyWeather.hour2.hour,
              state.hourlyWeather.hour3.hour,
              state.hourlyWeather.hour4.hour,
              state.hourlyWeather.hour5.hour,
              state.hourlyWeather.hour6.hour,
              state.hourlyWeather.hour7.hour,
              state.hourlyWeather.hour8.hour,
              state.hourlyWeather.hour9.hour,
              state.hourlyWeather.hour10.hour
    ],
    datasets: [
      {
        label: 'Humidity',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [state.hourlyWeather.hour1.temp, 
          state.hourlyWeather.hour2.humidity,
          state.hourlyWeather.hour3.humidity,
          state.hourlyWeather.hour4.humidity,
          state.hourlyWeather.hour5.humidity,
          state.hourlyWeather.hour6.humidity,
          state.hourlyWeather.hour7.humidity,
          state.hourlyWeather.hour8.humidity,
          state.hourlyWeather.hour9.humidity,
          state.hourlyWeather.hour10.humidity
        ]
      }
    ]
  }
  return (
    <div>
      <Line
        data={label}
        options={{
          title:{
            display:true,
            text:'Average Temperature By Hour',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
      <Line
    data={labelTwo}
    options={{
      title:{
        display:true,
        text:'Average Humidity By Hour',
        fontSize:20
      },
      legend:{
        display:true,
        position:'right'
      }
    }}
  />
    </div>
  );
}

export default Hourly; 