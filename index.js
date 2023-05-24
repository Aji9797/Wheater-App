const api_key = "3199a8ec230777a3afa827eb374af090";

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getweatherData(cityValue);
});

async function getweatherData(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${api_key}&units=metric`);
        if (!response.ok) {
            throw new error("Network response was not ok")
        }
        const data = await response.json();

        const temperature = math.round(data.main.temp) 
        const description = data.weather[0].description
        const icon = data.weather[0].icon
        const details = [
            `Feels like: ${math.round(data.main.feels_like) }`,
            `Humidity:${data.main.humidity}%`,
            `Wind speed:${data.wind.speed} m/s`,
        ];
        weatherDataEl.querySelector(".icon").innerHTML =`<img src="https://openweathermap.org/img/wn/${icon}.png"alt="Weather Icon">`;
        weatherDataEl.querySelector(".temperature").textContent=`${temperature}°C`;
        weatherDataEl.querySelector(".description").textContent=description;
        weatherDataEl.querySelector(".details").innerHTML = details.map((detail)=> `<div>${detail}</div>`).join("");


    } catch (error) { }
}