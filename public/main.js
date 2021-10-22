//getting all the required references.
const weatherDisplay = document.querySelector('.weather');
const weatherForm = document.querySelector('#weather-form');
const cityInput = document.querySelector('#city-input');


weatherForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    if(cityInput.value === ""){

    }else{
        fetchWeather(cityInput.value);
    }

})

fetchWeather('Hyderabad');