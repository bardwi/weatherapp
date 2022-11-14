import React from "react";
import { BrowserRouter, Switch, Route ,Redirect} from "react-router-dom";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import Home from "../../pages/Home/Home";
import Weather from "../../pages/Weather/Weather";

const Routes =({children, ...rest})=> {
    const isAuthenticated = sessionStorage.getItem('username');

    return(
        <BrowserRouter>
           <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/weather" component={Weather}/>
              
             
           </Switch>
        </BrowserRouter>
    )
}

export default Routes;