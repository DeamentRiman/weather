import React, { useState } from "react";
import axios from "axios";
import { weatherTemplateObj } from "../../types/getTypes";
import '../Weather/index.scss';

const Weather: React.FC = () => {
    const APP_ID = '66e4877522d19f245c37444d6357831a';
    const [weatherData, SetWeatherData] = useState(weatherTemplateObj);
    const [inputData, setInputData] = useState('');
    const [city, setCity] = useState('');

    const cityHendler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputData(e.target.value);
    }

    function submitHandler(city:string) {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`;

        axios.get(URL).then((resp) => {
            const weather = resp.data;
            SetWeatherData(weather);
        }).catch((error) => {
            throw new Error(error);
        })
    }
    
    console.log(weatherData, 'script');

    return (
        <section className="appMainWeather">
            <form className="appMainWeatherForm" onSubmit={(evt) => {
                evt.preventDefault();
                setCity(city);
                submitHandler(inputData);
            }}>
                <input className="appMainWeatherInput"
                    type="text"
                    placeholder="Enter city name"
                    name="city"
                    onChange={cityHendler}
                    value={inputData}
                />
                <input
                    className="appMainWeatherButton"
                    type="submit"
                    value="Get it!"
                />
            </form>
            {weatherData.base === weatherTemplateObj.base ? <p className="appMainWeatherNoData"></p> : (
                <section className="appMainWeatherData">
                    <div className="appMainWeatherPictire">
                        <img className="appMainWeatherImg" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Изображение погоды" />
                    </div>
                    <div className="appMainWeatherWrapper">
                        <p className="appMainWeatherPlace">Location: {weatherData.name}, {weatherData.sys.country}</p>
                        <p className="appMainWeatherClouds">Clouds: {weatherData.clouds.all} %</p>
                        <p className="appMainWeatherVisibility">Visibility: {weatherData.visibility} m</p>
                        <p className="appMainWeatherHumidity">Humidity: {weatherData.main.humidity} %</p>
                    </div>
                    <div className="appMainWeatherWrapper">
                        <p className="appMainWeatherTemp">Temperature: {Math.round(weatherData.main.temp) - 273}<sup>o</sup></p>
                        <p className="appMainWeatherTempRange">Min / Max: {Math.round(weatherData.main.temp_min) - 273}<sup>o</sup> / {Math.round(weatherData.main.temp_max) - 273}<sup>o</sup></p>
                        <p className="appMainWeatherTempFeels">Feels Like: {Math.round(weatherData.main.feels_like) - 273}<sup>o</sup></p>
                        <p className="appMainWeatherPressure">Pressure: {Math.round(weatherData.main.pressure * 100 / 133)} mmhg</p>
                    </div>
                    <div className="appMainWeatherWrapper">
                        <p className="appMainWeatherWind">Wind: {weatherData.wind.speed} m/s</p>
                        <p className="appMainWeatherWindGust">Wind gust: {weatherData.wind.gust} m/s</p>
                    </div>
                    {/* <p>Восход солнца: {weatherData.sys.sunrise}</p>
                    <p>Заход солнца: {weatherData.sys.sunset}</p> */}
                </section>)
            }
        </section>
    )
}

export default Weather;