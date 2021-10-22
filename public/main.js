//getting all the required references.
const weatherDisplay = document.querySelector('.weather');
const weatherForm = document.querySelector('#weather-form');
const cityInput = document.querySelector('#city-input');

const fetchWeather = async (city) => {
    //my api key is : 9d00db2028f7962a749fb09027239dcb

    // const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9d00db2028f7962a749fb09027239dcb`
    console.log(url);
    res = await fetch(url);
    data = await res.json();

    if(data.cod === '404'){
        alert('City not found');
        return;
    }

    const dataToDisplay = {
        city: data.name,
        temp: kelvinToFahrentheit(data.main.temp)
    }

    addWeatherToDom(dataToDisplay);


}


//to add display elemetns to dom
const addWeatherToDom = (data) => {
    weatherDisplay.innerHTML = `
    <h1>Weather in ${data.city}</h1>
    <h2>${data.temp} &deg;F</h2>
    `
    cityInput.value = '';
}



//convert kelvin to fahrenheit
const kelvinToFahrentheit = (temp) =>{
    return Math.ceil(((temp - 273.15) * 9) / 5 + 32);
}


weatherForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    if(cityInput.value === ""){

    }else{
        fetchWeather(cityInput.value);
    }

})


//default fetch
fetchWeather('Hyderabad');