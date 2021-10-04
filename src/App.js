import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Hourly from "./pages/Hourly"; 
import { WeatherProvider } from "./store/globalState";
import Nav from "./components/Navbar/Nav"; 
import { useContext } from "react";
import { AuthContext } from "./store/authContext"
import Auth from './components/Auth/Auth'
import HttpProvider from './store/httpState'

function App(){
  const { isAuth, login } = useContext(AuthContext);
  let content = <Auth />
  if(isAuth) content = <BrowserRouter>
      <div>
        {/* <HttpProvider> */}
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
        {/* </HttpProvider> */}
      </div>
    </BrowserRouter>
  return content
}

export default App; 