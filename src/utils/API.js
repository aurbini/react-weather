import axios from 'axios'

// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = '8510c14918232716bc9743d7f1fc2f0c'
export default{
  getCurrentWeather: function(search){
    return axios({
      method: 'GET',
      url:`https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=` + apiKey+'&units=imperial'
      }).then(res => res.data)
  },
  getUV: function(lat, lon){
    return axios({
      url: `https://api.openweathermap.org/data/2.5/uvi/forecast?appid=${apiKey}&lat=${lat}&lon=${lon}`,
      method: "GET"
      }).then(res => res.data)
  },
  getFiveDay: function(lat, lon){
    return axios({
      url: `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&lat=${lat}&lon=${lon}&units=imperial`,
      method: "GET"
    }).then(res =>  res.data)
  }   
}         
        