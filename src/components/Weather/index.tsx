import React, { useState, useEffect } from "react";
import '../Main/index.scss';
import axios from "axios";

export const Weather = () => {
    const APP_ID = '66e4877522d19f245c37444d6357831a';
    const [weatherData, SetWeatherData] = useState(0);
    const [city, setCity] = useState('Томск');
    const [LAT, setLAT] = useState('56.488712');
    const [LON, setLON] = useState('84.952324');

    useEffect(() => {
        const FIND_CITY_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APP_ID}`;

        axios.get(FIND_CITY_URL).then((resp) => {
            const getLat = resp.data[0].lat;
            if (LAT != getLat) {
                setLAT(getLat);
            }
            const getLon = resp.data[0].lon;
            if (LON != getLon) {
                setLON(getLon);
            }
        }).catch((error) => {
            throw new Error(error);
        });
    }, [city, LAT, LON]);

    useEffect(() => {
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APP_ID}`;

        axios.get(URL).then((resp) => {
            const weatherData = resp.data;
            SetWeatherData(weatherData);
        }).catch((error) => {
            throw new Error(error);
        })
    }, [LAT, LON]);
    // console.log(weatherData);

    return (
        <section>
            <input type="text" onChange={(evt) => { setCity(evt.target.value) }} placeholder="Томск" />
            <p>
                {city}
                <span>Дата и время</span>
            </p>
            <div>
                <div>
                    <p>Влажность</p>
                    <p>Дата</p>
                </div>
                <div>
                    1254
                    {/* <img src=`http://openweathermap.org/img/wn/#{}@2x.png` alt='Иконка погоды'/> */}
                </div>

            </div>
        </section>

    )
}