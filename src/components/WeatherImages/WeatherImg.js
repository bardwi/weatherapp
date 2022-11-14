import React, { useEffect, useState } from "react";
import {
  Cloudy,
  Moon,
  NightlyCloud,
  PartlySunny,
  StormRain,
  Sun,
  Shower,
  DayMist,
  NightMist,
  Foggy,
  Snow,
  OverCast,
  Windy,
  Storm,
  LightRain,
  Drizzle, HeavyRain, Hail,
  Clouds

} from "../../assets/images/index";
import "./WeatherImg.css";

const WeatherImg =(props) =>{
  const [descriptionState, setDescriptionState] = useState("");
  const [citylist, setCityList] = useState([]);
  let descriptonWeather = {
    day: { "Sunny": Sun, "few clouds": PartlySunny, "Partly cloudy": PartlySunny,"Clear": Sun, "Mist":DayMist},
    night: { "Sunny": Moon, "few clouds": NightlyCloud , "Clear": Moon, "Mist":NightMist, "Partly cloudy": NightlyCloud},
    collective: {
      "scattered clouds": Cloudy,
      "Light rain": LightRain,
      "Overcast": OverCast,
      "broken clouds": Cloudy,
      "shower rain": Shower,
      "very heavy rain":Shower,
      "thunderstorm": StormRain,
      "Moderate or heavy rain with thunder": StormRain,
      "Light rain shower": Shower, 
      "Light drizzle":Shower,
      "Patchy rain possible": Shower,
      "Patchy light rain":LightRain,
      "Moderate or heavy sleet":LightRain,
      "Moderate rain":Shower,
      "Moderate rain at times":LightRain,
      "Moderate or heavy rain shower":Shower,
      "Moderate or heavy snow with thunder": StormRain,
      "Fog":Foggy,
      "Windy": Windy,
      "Snow":Snow,
      "Storm": Storm,
      "Drizzle": Drizzle,
      "Heavy rain": HeavyRain,
      "Hail": Hail,
      "Torrential rain shower": HeavyRain,
      "Cloudy": Clouds

    },
  };

    const getWeatherState = () => {
        let clock = new Date().getHours();
        var unix_timestamp= 1603475446;
        var date = new Date(unix_timestamp*1000)
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        


        if (clock > 6 && clock < 19) {
           if (
            descriptonWeather.day[props.weatherState] &&
            descriptonWeather.night[props.weatherState]
           ) {
            setDescriptionState(descriptonWeather.day[props.weatherState]);
           } else {
            setDescriptionState(descriptonWeather.collective[props.weatherState]);
           }
        } else {
           if (
            descriptonWeather.day[props.weatherState] &&
            descriptonWeather.night[props.weatherState]
        ) {
            setDescriptionState(descriptonWeather.night[props.weatherState]);
        } else {
            setDescriptionState(descriptonWeather.collective[props.weatherState]);
        }
       }
      };

        useEffect(() => {
           getWeatherState();
        }, [props.weatherState]);

        return (
            <div>
               <img width="180" src={descriptionState} alt=""  />
            </div>
    );
}

export default WeatherImg;