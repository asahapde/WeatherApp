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

if ('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}
else {
    notificationElement.innerHTML = "<p>No location</p>";
}





function getWeather(latitude,longitue){
    let api = 'api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitue}&appid=${key}';

    console.log(api);
}