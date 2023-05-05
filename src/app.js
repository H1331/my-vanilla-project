
function SearchCity(city) {
    let apiKey = "2599293e788572a39ecb82779ed7aa54";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
}
 


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


    celciusTemperature = Math.round(response.data.main.temp);

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

let searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    let cityInputElement = document.querySelector("#cityInputElement");
    SearchCity(cityInputElement.value);
}
SearchCity("Sydney");


let celcius = document.querySelector("#celciusLink");
celcius.addEventListener("click",displayCelcius);
 
function displayCelcius(event) {
    event.preventDefault();
    let temperatureNumber = document.querySelector("#temperatureNumber");
    temperatureNumber.innerHTML = Math.round(celciusTemperature);
    

}


let fahrenheit= document.querySelector("#fahrenheitLink");
fahrenheit.addEventListener("click",displayFahrenheit);
 
function displayFahrenheit(event) {
    event.preventDefault();
    let temperatureNumber = document.querySelector("#temperatureNumber");
    let fahrenheitTemperature = (celciusTemperature * 9) / 5 + 32;
    temperatureNumber.innerHTML = Math.round(fahrenheitTemperature);
    // celcius.classList.remove("active");
    // fahrenheit.classList.remove("active");
    

}





