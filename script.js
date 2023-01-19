// Day of the week and time

let now = new Date();
let currentDay = document.querySelector(".current__day");
let currentTime = document.querySelector(".current__time");

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

let hours = now.getHours();
let minutes = (now.getMinutes().toString()).padStart(2,'0');

currentDay.innerHTML = `${day},`;
currentTime.innerHTML = `${hours}:${minutes}`;



function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  let temperature = document.querySelector("#temperature").innerHTML = `${Math.round(response.data.main.temp)}°C`;
  document.querySelector("#description").innerHTML = response.data.weather[0].description;
  document.querySelector("#Humidity").innerHTML = `${response.data.main.humidity}%`;
  document.querySelector("#Wind").innerHTML = `${Math.round(response.data.wind.speed)}km/h`;
  document.querySelector("#feels-like").innerHTML = `Feels like: ${Math.round(response.data.main.feels_like)}`;
  document.querySelector("#Visibility").innerHTML = `${response.data.visibility/1000}km`;
  document.querySelector("#Pressure").innerHTML = `${Math.round(response.data.main.pressure)}`;
}

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#searchQueryInput").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);









// function showWeather(response) {
//     document.querySelector("#city").innerHTML = response.data.name;
//     console.log(response);
//     document.querySelector("#description").innerHTML =
//       response.data.weather[0].description;
//     let roundTemp = Math.round(response.data.main.temp);
//     let temperature = document.querySelector("#temperature");
//     temperature.innerHTML = `${roundTemp}°C`;

//     document.querySelector("#Humidity").innerHTML = `${response.data.main.humidity}%`;
//     document.querySelector("#Wind").innerHTML = `${Math.round(response.data.wind.speed)}km/h`;
//     document.querySelector("#feels-like").innerHTML = `Feels like: ${Math.round(response.data.main.feels_like)}`;
//     document.querySelector("#Visibility").innerHTML = `${response.data.visibility/1000}km`;
//     document.querySelector("#Pressure").innerHTML = `${Math.round(response.data.main.pressure)}`;
// }


// function searchCity(event) {
//     event.preventDefault();
//     let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//     let units = "metric";
//     let city = document.querySelector("#searchQueryInput").value;
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
//     console.log(event);
//     axios.get(apiUrl).then(showWeather);
//     document.querySelector("#searchQueryInput").value = "";
//   }
//   let form = document.querySelector("#search-form");
//   form.addEventListener("submit", searchCity);
  














// function displayWeatherCondition(response) {
//     document.querySelector("#city").innerHTML = response.data.name;
//     document.querySelector("#temperature").innerHTML = Math.round(
//       response.data.main.temp
//     );

//     document.querySelector("#description").innerHTML =
//     response.data.weather[0].main;
// }


// function searchCity(city) {
//     let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//     axios.get(apiUrl).then(displayWeatherCondition);
//   }
  
//   function handleSubmit(event) {
//     event.preventDefault();
//     let city = document.querySelector("#searchQueryInput").value;
//     searchCity(city);
//   }
  
// // // Input city

// // function search(event) {
//     event.preventDefault();
//     let searchInput = document.querySelector("#searchQueryInput");
//     let capitalizedInput = searchInput.value.slice(0,1).toUpperCase() + searchInput.value.slice(1);

//     let mainCountry = document.querySelector(".main__country");
//     mainCountry.innerHTML = capitalizedInput;

//     searchInput.value = "";
// }

// let form = document.querySelector("#search-form");
// form.addEventListener('submit', search);


// // Current temperature of the city


// function updateWeather(response) {
//     let cityName = document.querySelector("#city");
//     let temperature = document.querySelector("#temperature");
  
//     cityName.innerHTML = response.data.name;
//     temperature.innerHTML = Math.round(response.data.main.temp);
//   }
  
//   function search(event) {
//     event.preventDefault();
//     let searchInput = document.querySelector("#searchQueryInput");
  
//     let key = "5f472b7acba333cd8a035ea85a0d4d4c";
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${key}&units=imperial`;
  
//     axios.get(url).then(updateWeather);
//   }














// // function displayWeather(response) {
// //     let weatherDiv = document.querySelector("#weather");
// //     let temperature = Math.round(response.data.main.temp);
// //     let description = response.data.weather[0].description;

// //     weatherDiv.innerHTML = `It is ${temperature} degrees, ${description}, in ${
// //       response.data.name
// //     }`;
// //   }

// //   let city = "Rome";
// //   let key = "5f472b7acba333cd8a035ea85a0d4d4c";
// //   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

// //   axios.get(url).then(displayWeather);






// // function findCity(city) {
// //     let apiKey = "ac7d9c52f156c67160e7faac051bf780";
// //     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    
// // }










// // function showTemperature(response) {
// //     let temperature = Math.round(response.data.main.temp);
// //     console.log(temperature);
// //     console.log(response.data);

// //     let updateButton = document.querySelector("#searchQuerySubmit");
// //     updateButton.addEventListener("click", function() {
// //         let city = document.querySelector("#city").value;
// //     })



// //     let temperatureElement = document.querySelector("#temperature");
// //     temperatureElement.innerHTML = temperature;
// // }

// // let apiKey = "ac7d9c52f156c67160e7faac051bf780";
// // let units = "metric";
// // let city = "Barcelona";
// // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid${apiKey}&units=metric`'

// // // &units=${units}&appid=${apiKey}`;


// // axios.get(apiUrl).then(showTemperature);














