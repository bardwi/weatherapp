import React from "react";
import {Link} from "react-router-dom";
import  "./Navigation.css";

const Navigation = (props)=>{
    const Logout =() => {
        sessionStorage.removeItem('username');
    }
    return (
      <div>
        <header id="myHeader" className="header">
            <div className="navleft">
                <div className="homelink">
                    <Link to="/home" className={props.home? "nav-active": "nav-text"}>
                       Home
                    </Link>
                </div>

                <div className="weatherlink">
                    <Link to="/weather" className={props.weather? "nav-active": "nav-text"}>
                        Weather
                    </Link>
                </div>
            </div>
           
            <div className="navright">
                <div className="logout">
                    <Link to="/"  onClick={Logout}>
                        Logout
                    </Link>
                </div>
            </div>

        </header>
      </div>
    );
  }
  
  export default Navigation;