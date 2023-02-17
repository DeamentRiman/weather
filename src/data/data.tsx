// import React from "react";
import axios from "axios";

const APP_ID = '66e4877522d19f245c37444d6357831a';
const LAT = '56.484645';
const LON = '84.947649';
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APP_ID}`;

function ones(value: object) {
    console.log(value);
}
console.log(1);
export const UseWeatherData = axios({
    method: 'get',
    url: URL,
})
    .then((response) => {
        ones(response);
    })
    .catch((error) => {
        console.log(error.name);
    }
    );