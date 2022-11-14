import React,{useEffect, useState} from "react";
import axios from "axios";
import Papa from "papaparse";
import { Location, City, WeatherImg, Temp } from "../../components/index";
import Header from "../../components/Navigation/Navigation";
import  "./Weather.css";
import icon from "../../assets/icon/icon.svg";


const Weather = () => {
    const [location, setLocation] = useState("Bangalore");
    const [weather, setweather] = useState({});
  //  const [citylist, setCityList] = useState([]);
   // const [countryReg, setCountryReg] = useState('')
    useEffect(() => {
       axios(
        `https://weatherapi-com.p.rapidapi.com/current.json?&q=${location}`, {
            headers: {
              'x-rapidapi-key': '359e2bb4b0msh9ef6a7abd6d8c96p17a855jsn7129b3a6480e',
              'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
              }
          })
            .then((res) => {
              //console.log(res.data)
              setweather(res.data);
            
            });
        }, [location]);

   /*useEffect(()=> {
        Papa.parse("/worldcities.csv" ,{
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: data => {
                setCityList(data.data);
                }
              });
            }, []);
    

    const handleCountryChange = (e) => {
        setCountryReg(e.target.value)
    }*/

    return(
        <div className="weather-container">
            <Header weather/>
           {weather.current ?
               (<div className="search">
                   <div className="filter-wrapper">
                        <div className="logoname">
                            <img src={icon} alt="iconlog"/>
                            weather</div>
                        <div className="city-filter">
                           <input
                            type="text"
                            placeholder="Search..."
                            onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>

                        {/*<select onChange={handleCountryChange}> 
                          <option value=""> Select a City</option>
                            {countryReg}
                               {citylist.map((countryReg) => <option value={countryReg.value}>
                            {countryReg.city}</option>)}
                        </select>*/}
                    </div>

                    <div className="weather-details">
                    
                        <Location location={[weather.location.name, weather.location.country]} />
                        <City weatherState={[weather.current.condition.text]}   />
                        <WeatherImg weatherState={weather.current.condition.text} />
                        <Temp temp={Math.round(weather.current.temp_c)} feels={Math.round(weather.current.feelslike_c)} 
                          humid={Math.round(weather.current.humidity)} wind={Math.round(weather.current.wind_kph)}
                          uvindex={Math.round(weather.current.uv)}
                          precip={(weather.current.precip_in)}
                          />
                    </div>
                </div>)
                :
                (
                <div className="search">
                    <div className="filter-wrapper">
                        <div className="logoname">
                        <img src={icon} alt="iconlog"/>
                            weather
                        </div>
                        <div className="city-filter">
                            <input
                            type="text"
                            placeholder="Search the city you want"
                            onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                    </div>
                        <div className="weather-details">
                            <Location location={["Bangalore","IN"]} />
                            <City/>
                            <WeatherImg />
                            <Temp temp={0} />
                        </div>
                </div>
            )}
           
        </div>
    )
}

export default Weather;