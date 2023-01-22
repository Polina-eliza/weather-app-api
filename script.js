// Day of the week and time

// let now = new Date();
// let currentDay = document.querySelector(".current__day");
// let currentTime = document.querySelector(".current__time");

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let day = days[now.getDay()];

// let hours = now.getHours();
// let minutes = (now.getMinutes().toString()).padStart(2,'0');

// currentDay.innerHTML = `${day},`;
// currentTime.innerHTML = `${hours}:${minutes}`;


// Adding 5 days of forecast

// function displayForecast(response) {
//   console.log(response.data.daily);
//   let forecastElement = document.querySelector("#forecast");

//   let days = ["Thu", "Fri", "Sat", "Sun"];

//   let forecastHTML = `<div class="week__container">`;
//   days.forEach(function (day) {
//     forecastHTML =
//     forecastHTML +
//     `
//     <div class="day__wrapper" id="forecast">
//       <div class="day">${day}</div>
//         <img class="week__img" src="http://openweathermap.org/img/wn/50d@2x.png" alt="">
//       <div class="degrees">
//     <span class="degrees__max">12°/</span>
//     <span class="degrees__min">9°</span>
//        </div>
// </div>
//   `;
//   });

//   forecastHTML = forecastHTML + `</div>`;
//   forecastElement.innerHTML = forecastHTML;

//   displayForecast(response);
// };

// function displayForecast(response) {
//   console.log(response.data.daily);
//   let forecastElement = document.querySelector("#forecast");

//   let days = ["Thu", "Fri", "Sat", "Sun"];

//   let forecastHTML = `<div class="week__container">`;
//   days.forEach(function (day) {
//     forecastHTML =
//     forecastHTML +
//     `
//     <div class="day__wrapper" id="forecast">
//       <div class="day">${day}</div>
//         <img class="week__img" src="http://openweathermap.org/img/wn/50d@2x.png" alt="">
//       <div class="degrees">
//     <span class="degrees__max">12°/</span>
//     <span class="degrees__min">9°</span>
//        </div>
// </div>
//   `;
//   });

//   forecastHTML = forecastHTML + `</div>`;
//   forecastElement.innerHTML = forecastHTML;
// };


// function getForecast(coordinates) {
//   let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
//   axios.get(apiUrl).then(displayForecast);
// }






// function displayWeatherCondition(response) {
//   document.querySelector("#city").innerHTML = response.data.name;
//   let temperature = document.querySelector("#temperature").innerHTML = `${Math.round(response.data.main.temp)}°C`;
//   document.querySelector("#description").innerHTML = response.data.weather[0].description;
//   document.querySelector("#Humidity").innerHTML = `${response.data.main.humidity}%`;
//   document.querySelector("#Wind").innerHTML = `${Math.round(response.data.wind.speed)}km/h`;
//   document.querySelector("#feels-like").innerHTML = `Feels like: ${Math.round(response.data.main.feels_like) > 0 ? "+" : ""}${Math.round(response.data.main.feels_like)}°C`;
//   document.querySelector("#Visibility").innerHTML = `${response.data.visibility/1000}km`;
//   document.querySelector("#Pressure").innerHTML = `${Math.round(response.data.main.pressure)}`;
//   document.querySelector("#icon").setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@4x.png`);
//   document.querySelector("#icon").setAttribute("alt", response.data.weather[0].description);

//   celsiusTemperature = response.data.main.temp;
//   // document.querySelector("#celsius-link").classList.add("active");
// }

// function searchCity(city) {
//   let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//   axios.get(apiUrl).then(displayWeatherCondition);
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   let city = document.querySelector("#searchQueryInput").value;
//   searchCity(city);
//   let searchInput = document.querySelector("#searchQueryInput");
//   searchInput.value = "";
// }



// // Search location

// function searchLocation(position) {
//     let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
//       position.coords.latitude
//     }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  
//     axios.get(apiUrl).then(displayWeatherCondition);
//   }

//   function getCurrentLocation(event) {
//       event.preventDefault();
//       navigator.geolocation.getCurrentPosition(searchLocation);
//     }

// let currentLocationButton = document.querySelector("#button-location");
// currentLocationButton.addEventListener("click", getCurrentLocation);


// // Convert celsium to fahreinheit 

// function displayFahrenheitTemperature(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature");
//   celsiusLink.classList.remove("active");
//   fahrenheitLink.classList.add("active");
//   let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
//   temperatureElement.innerHTML = `${Math.round(fahrenheitTemperature)}°F`;
// }

// function displayCelsiusTemperature(event) {
//   event.preventDefault();
//   celsiusLink.classList.add("active");
//   fahrenheitLink.classList.remove("active");
//   let temperatureElement = document.querySelector("#temperature");
//   temperatureElement.innerHTML = `${Math.round(celsiusTemperature)}°C`;
// }

// let celsiusTemperature = null;

// let searchForm = document.querySelector("#search-form");
// searchForm.addEventListener("submit", handleSubmit);

// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

// let celsiusLink = document.querySelector("#celsius-link");
// celsiusLink.addEventListener("click", displayCelsiusTemperature);


// // change the button color

// const celsiusButton = document.getElementById("celsius-button");
// const fahrenheitButton = document.getElementById("fahrenheit-button");

// celsiusButton.classList.add("active");

// celsiusButton.addEventListener('click', function() {
//   if (!celsiusButton.classList.contains("active")) {
//     fahrenheitButton.classList.remove("active");
//     celsiusButton.classList.add("active");
//   }
// });

// fahrenheitButton.addEventListener('click', function() {
//   if (!fahrenheitButton.classList.contains("active")) {
//     celsiusButton.classList.remove("active");
//     fahrenheitButton.classList.add("active");
//   }
// });


// searchCity("Rome");




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




function displayForecast(response) {
  console.log(response.data.daily);
  let forecastElement = document.querySelector("#forecast");

  let days = ["Thu", "Fri", "Sat", "Sun"];

  let forecastHTML = `<div class="weather__forecast" id="forecast">`;
  days.forEach(function (day) {
    forecastHTML =
    forecastHTML +
    `
    <div class="day__wrapper">
    <div class="day">Mon</div>
    <img class="week__img" src="http://openweathermap.org/img/wn/10d@2x.png" alt="sunny">
    <div class="degrees">
        <span class="degrees__max">12°/</span>
        <span class="degrees__min">9°</span>
    </div>
    </div>
  `;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  console.log(forecastHTML);
};


function getForecast(coordinates) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}










function displayWeatherCondition(response) {
  celsiusTemperature = response.data.main.temp;
  document.querySelector("#city").innerHTML = response.data.name;
  let temperature = document.querySelector("#temperature").innerHTML = `${Math.round(response.data.main.temp)}°C`;
  document.querySelector("#description").innerHTML = response.data.weather[0].description;
  document.querySelector("#Humidity").innerHTML = `${response.data.main.humidity}%`;
  document.querySelector("#Wind").innerHTML = `${Math.round(response.data.wind.speed)}km/h`;
  document.querySelector("#feels-like").innerHTML = `Feels like: ${Math.round(response.data.main.feels_like) > 0 ? "+" : ""}${Math.round(response.data.main.feels_like)}°C`;
  document.querySelector("#Visibility").innerHTML = `${response.data.visibility/1000}km`;
  document.querySelector("#Pressure").innerHTML = `${Math.round(response.data.main.pressure)}`;
  document.querySelector("#icon").setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@4x.png`);
  document.querySelector("#icon").setAttribute("alt", response.data.weather[0].description);
  getForecast(response.data.coord)
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
  let searchInput = document.querySelector("#searchQueryInput");
  searchInput.value = "";
}



// Search location

function searchLocation(position) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
      position.coords.latitude
    }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayWeatherCondition);
  }

  function getCurrentLocation(event) {
      event.preventDefault();
      navigator.geolocation.getCurrentPosition(searchLocation);
    }

let currentLocationButton = document.querySelector("#button-location");
currentLocationButton.addEventListener("click", getCurrentLocation);


// Convert celsium to fahreinheit 

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = `${Math.round(fahrenheitTemperature)}°F`;
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${Math.round(celsiusTemperature)}°C`;
}

let celsiusTemperature = null;

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);


// change the button color

const celsiusButton = document.getElementById("celsius-button");
const fahrenheitButton = document.getElementById("fahrenheit-button");

celsiusButton.classList.add("active");

celsiusButton.addEventListener('click', function() {
  if (!celsiusButton.classList.contains("active")) {
    fahrenheitButton.classList.remove("active");
    celsiusButton.classList.add("active");
  }
});

fahrenheitButton.addEventListener('click', function() {
  if (!fahrenheitButton.classList.contains("active")) {
    celsiusButton.classList.remove("active");
    fahrenheitButton.classList.add("active");
  }
});


searchCity("Rome");