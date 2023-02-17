import React from "react";
import axios from "axios";

export const UseWeatherData = () => {
    const APP_ID = '66e4877522d19f245c37444d6357831a';
    const LAT = '56.484645';
    const LON = '84.947649';
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APP_ID}`;

    axios.get(URL).then((resp: any) => {
        console.log(resp.data);
    });
}