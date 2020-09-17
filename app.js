// API Key: 6d44ffa2eea4d53b94bfce797e93ebb2


// Elements
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");


// Data
const KELVIN = 273;
const key = "6d44ffa2eea4d53b94bfce797e93ebb2";

const weather = {};

weather.temperature = {
    unit: "celcius"
}

if ('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}
else {
    notificationElement.innerHTML = '<p>No location</p>';
}


function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

function showError(error){
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}


function getWeather(latitude,longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        })
}

function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png" alt="">`;
    tempElement.innerHTML = `<p>${weather.temperature.value}° C</p>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}