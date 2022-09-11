let timeEl = document.querySelector("#time");
let dateEl = document.querySelector("#date");
let currentWeather = document.querySelector("#currentWeather");
let cuntryCityEl = document.querySelector("#cuntryCity");
let weatherForecastEl = document.querySelector("#weatherForecast");
let currentTempEl = document.querySelector("#currentTemp");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Sriday",
  "Saturday",
];
let months = [
  "Jan",
  " Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Oct",
  "Nov",
  "Dec",
];
let API_KEY = "d47df3c22c4ef496ed4ba3e0a22f2237";

setInterval(() => {
  let time = new Date();
  let month = time.getMonth();
  let date = time.getDate();
  let day = time.getDay();
  let hour = time.getHours();
  let hourIn12HrFormat = hour >= 13 ? hour % 12 : hour;
  let minutes = time.getMinutes();
  let ampm = hour >= 12 ? "PM" : "AM";

  timeEl.innerHTML =
    hourIn12HrFormat + ":" + minutes + "" + `<span>${ampm}</span>`;
  dateEl.innerHTML = days[day] + " , " + date + " , " + months[month];
}, 1000);

function getWeatherDate() {
  navigator.geolocation.getCurrentPosition((success) => {
    console.log("success");
    let { latitude, longitude } = success.coords;

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}
      &lon=${longitude}&exclude=hourly,minutely&appid
      =${API_KEY}`).then(res => res.json()).then(data => {
        console.log(data);
      });
  });
}
getWeatherDate();
