// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

let weatherApi = {
    key: "95a6a3cf04f50096da7123bc5d6c3447",
baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}


//event listener when button click
const searchInputbox = document.querySelector(".search-bar");
const btn = document.querySelector("#btn");
btn.addEventListener('click', ()=>{
    
getWeatherReport(searchInputbox.value);

})



// get weather reports
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then( (weather)=>{
        return weather.json();
    } )
    .then(showWeatherReport);
}



// show weather reports
function showWeatherReport(weather)
{
    console.log(weather);
   
    let city = document.querySelector(".weather .city");
    city.innerText = `${weather.name}, ${weather.sys?.country}`;

    let temperature = document.querySelector(".weather .temp");
    temperature.innerText=`${Math.round(weather.main.temp)}° C`

    let minMaxtTemp = document.querySelector(".weather .min-max");
    minMaxtTemp.innerText=`${Math.floor(weather.main.temp_min)}° C (min) / ${Math.ceil(weather.main.temp_max)}° C (max)`;

    let weatherType = document.querySelector(".weather .weatherType ");
    weatherType.innerText = `${weather.weather[0].main}`;

    let wind = document.querySelector(".weather .wind");
    wind.innerText=`Wind Speed: ${weather.wind.speed} km/h`;

let date = document.querySelector(".weather .date");
let todayDate = new Date();
date.innerText=dateManage(todayDate);



}

// Date manage
function dateManage(dateArg)
{
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", 
"September", "October", "November", "December"];

  let year = dateArg.getFullYear();
  let month= months[dateArg.getMonth()];
  let date = dateArg.getDate(); 
  let day = days[dateArg.getDay()];

  return `${date} ${month} (${day}), ${year}`;

}
