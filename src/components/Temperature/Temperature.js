import React from 'react'
import './Temperature.css';
import humid from "../../assets/icon/humd.png";
import wind from "../../assets/icon/wind.png";
import rain from "../../assets/icon/rain.png";
import uv from "../../assets/icon/uv.png";

function Temperature(props) {
    return (
        <div className="temps">
            <h1>
               {props.temp}°C
                <span>
                Feels like {props.feels}°C
                </span>
            </h1>

            <h2>
                <span>
                   <img src={rain} alt="rain"/>  
                   Rain
                </span>
                   {props.precip *100} %
            </h2>

            <h2>
                <span>
                    <img src={wind} alt="wind"/>  
                    Wind
                </span>
                    {props.wind} km/h
            </h2>

            <h2>
                <span>
                    <img src={humid} alt="humid"/>  
                    Humidity
                </span>
                {props.humid} %
            </h2>

            <h2>
                <span>
                    <img src={uv} alt="uvindex"/>  
                    UV Index
                </span>
                 {props.uvindex} of 10
            </h2>
        
        </div>
    )
}

export default Temperature;