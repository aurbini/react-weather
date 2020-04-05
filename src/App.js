import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Hourly from "./pages/Hourly"; 
import { WeatherProvider } from "./utils/GlobalState";
import Nav from "./components/Navbar/Nav"; 
import './App.css';


function App(){
  return (
    <BrowserRouter>
      <div>
        <WeatherProvider> 
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/hourly">
              <Hourly />
            </Route>
          </Switch>
        </WeatherProvider>
      </div>
    </BrowserRouter>
  )


}

export default App; 