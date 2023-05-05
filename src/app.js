
let apiKey = "2599293e788572a39ecb82779ed7aa54";
let city = "Sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 
axios.get(apiUrl).then(displayTemperature);

function displayTemperature(response) {
    console.log(response.data);
    let cityElement = document.querySelector("h1");
    let date = document.querySelector("#date");
    let description = document.querySelector("#description");
    let temperatureNumber = document.querySelector("#temperatureNumber");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");

    let icon = document.querySelector("#icon");
    icon.setAttribute("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
    icon.setAttribute("alt", response.data.weather[0].description);

    cityElement.innerHTML = response.data.name;
    description.innerHTML = response.data.weather[0].description;
    temperatureNumber.innerHTML = Math.round(response.data.main.temp);
    humidity.innerHTML = response.data.main.humidity;
    wind.innerHTML = Math.round(response.data.wind.speed);
    date.innerHTML = formatDate(response.data.dt * 1000);


}
function formatDate(){
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes=`o${minutes};`
    }

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
     
    return `${day} ${hours}:${minutes}`;
}

