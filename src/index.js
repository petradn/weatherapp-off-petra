 
function formatTime(time) {
   let hours = time.getHours();
    if (hours < 10){
        hours = `0${hours}`;
    }

    let minutes = time.getMinutes();
    if (minutes < 10) {
    minutes = `0${minutes}`
    }

    let daysIndex = time.getDay();
    let days =
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[daysIndex];

    let monthsIndex = time.getMonth();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let month = months[monthsIndex]; 

    return `${month} 
    <br/>
    ${day} - ${hours}:${minutes} `;

}

function displayCityWeather(response) {
console.log(response);
document.querySelector(`#current-city`).innerHTML = response.data.name;
document.querySelector(`#current-degree`).innerHTML = Math.round(response.data.main.temp);
}


function searchCity (city) {
    let apiKey = `20225766fd17d102ee08932566e9303c`;
    let unit = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayCityWeather);
}

function submitCity(event) {
    event.preventDefault();
    let city = document.querySelector(`#search-city-input`).value;
    city = city.trim();
    searchCity(city);
}

let elementTime = document.querySelector("#current-time");
let currentTime = new Date();
elementTime.innerHTML = formatTime(currentTime);

let formCity = document.querySelector("#form-city");
formCity.addEventListener("submit", submitCity);


searchCity(`Amsterdam`);



//function searchLocation(position){}

//function getCurrentLocation(event) {
    //event.preventDefault();
    //navigator.geolocation.getCurrentLocation(searchLocation);}



//function stopClikCelcius (event) {
//event.preventDefault();
//document.querySelector(`#current-temp`);}

//function stopClickFahrenheit (event) {
//event.preventDefault();
//let degreeElementFahrenheit= document.querySelector("#current-degree");
//temp = document.querySelector(`#current-`);
//degreeElementFahrenheit.innerHTML = Math.round(temp * 9 /5) + 32;}

//let celcius = document.querySelector("#celcius");
//celcius.addEventListener("click", stopClikCelcius);

//let fahrenheit = document.querySelector("#fahrenheit");
//fahrenheit.addEventListener("click", stopClickFahrenheit);



