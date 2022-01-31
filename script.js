let cityName = document.querySelector(".city-name");
let temp = document.querySelector(".temp");
let precipitation = document.querySelector(".precipitation");
let features = document.querySelector(".features");
let tempFeels = document.querySelector('.temp-feels');
const cities = {
  524894: "Moscow",
  498817: "Saint Petersburg",
  2013348: "Vladivostok",
};
let citiesSelect = document.createElement("select");
citiesSelect.classList.add("cities-list");
for (let key in cities) {
  const city = document.createElement("option");
  city.value = key;
  city.innerHTML = cities[key];
  citiesSelect.appendChild(city);
}
document.querySelector(".wrapper").prepend(citiesSelect);

function getWeather() {
  const cityValue = citiesSelect.value;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?id=${cityValue}&units=metric&lang=ru&appid=1d5fea9a0d8030f9105c99db7cc80280`
  )
    .then((resp) => {
      return resp.json();
    })
    .then(function (data) {
      cityName.innerHTML = data.name ;
      temp.innerHTML = ` Температура воздуха: ${data.main.temp}`;
      tempFeels.innerHTML = ` ощушается как: ${data.main.feels_like}`;
      precipitation.innerHTML = `погодные условия: ${data.weather[0]["description"]}`;
      features.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@4x.png">`;
      console.log(data.main.feels_like);
    });
}
getWeather();
citiesSelect.addEventListener("change", getWeather);
