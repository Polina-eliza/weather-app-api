
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


function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];

}


  function displayForecast(response) {
    let forecast = response.data.daily;
  
    let forecastElement = document.querySelector("#forecast");
  
    let forecastHTML = ``;
    forecast.forEach(function (forecastDay, index) {
      if (index < 7) {
          forecastHTML =
          forecastHTML +
          `
          <div class="day__wrapper">
          <div class="day">${formatDay(forecastDay.time)}</div>
          <img class="week__img" src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${
            forecastDay.condition.icon
          }.png" alt="">
          <div class="degrees">
              <span class="degrees__max"> ${Math.round(forecastDay.temperature.maximum)}°/</span>
              <span class="degrees__min">${Math.round(forecastDay.temperature.minimum)}°</span>
          </div>
          </div>
        `;
      }
    });
  
    forecastHTML = forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML;
  };


function getForecast(coordinates) {
  let lon = coordinates.longitude;
  let lat = coordinates.latitude;
  let apiKey = "6d48t90aao34607b488607a8df81d2bd";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayWeatherCondition(response) {
  celsiusTemperature = response.data.temperature.current;
  document.querySelector("#city").innerHTML = response.data.city;
  document.querySelector("#temperature").innerHTML = `${Math.round(response.data.temperature.current)}°C`;
  document.querySelector("#description").innerHTML = response.data.condition.description;
  document.querySelector("#Humidity").innerHTML = `${response.data.temperature.humidity}%`;
  document.querySelector("#Wind").innerHTML = `${Math.round(response.data.wind.speed)}km/h`;
  document.querySelector("#feels-like").innerHTML = `Feels like: ${Math.round(response.data.temperature.feels_like) > 0 ? "+" : ""}${Math.round(response.data.temperature.feels_like)}°C`;
  // document.querySelector("#Visibility").innerHTML = `${response.data.visibility/1000}km`;
  document.querySelector("#Pressure").innerHTML = `${Math.round(response.data.temperature.pressure)}`;
  document.querySelector("#icon").setAttribute("src", `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`);
  document.querySelector("#icon").setAttribute("alt", response.data.condition.icon);
  
  getForecast(response.data.coordinates);

}

function searchCity(city) {
  let apiKey = "6d48t90aao34607b488607a8df81d2bd";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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
    let apiKey = "6d48t90aao34607b488607a8df81d2bd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=${apiKey}&units=metric`;
  
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