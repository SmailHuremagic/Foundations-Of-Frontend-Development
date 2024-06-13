const container = document.querySelector('.weather-container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const iconElement = document.getElementById('weather-icon'); // Ensure this is in your HTML

const APIKey = '941e6484a62654d8cf8199d902cdf9ef';

search.addEventListener('click', () => {
    const city = document.querySelector('.search-box input').value.trim();

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                container.classList.add('small-container');
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            updateWeatherUI(json);
        })
        .catch(error => console.error('Error fetching weather data:', error));
});

function updateWeatherUI(json) {
    error404.style.display = 'none';
    error404.classList.remove('fadeIn');

    const temperature = document.querySelector('.weather-box .temperature');
    const description = document.querySelector('.weather-box .description');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span');

    temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
    description.textContent = json.weather[0].description;
    humidity.textContent = `${json.main.humidity}%`;
    wind.textContent = `${parseInt(json.wind.speed)} Km/h`;

    // Update the icon based on the weather condition code
    iconElement.className = 'fa ' + getWeatherIconClass(json.weather[0].id);

    weatherBox.style.display = 'block';
    weatherDetails.style.display = 'block';
    container.classList.remove('small-container');
    container.classList.add('large-container');
    weatherBox.classList.add('fadeIn');
    weatherDetails.classList.add('fadeIn');
}

function getWeatherIconClass(conditionId) {
    if (conditionId >= 200 && conditionId <= 232) {
        return 'fa-bolt'; // Thunderstorm
    } else if (conditionId >= 300 && conditionId <= 321) {
        return 'fa-cloud-rain'; // Drizzle
    } else if (conditionId >= 500 && conditionId <= 531) {
        return 'fa-cloud-showers-heavy'; // Rain
    } else if (conditionId >= 600 && conditionId <= 622) {
        return 'fa-snowflake'; // Snow
    } else if (conditionId >= 701 && conditionId <= 781) {
        return 'fa-smog'; // Atmosphere
    } else if (conditionId === 800) {
        return 'fa-sun'; // Clear
    } else if (conditionId >= 801 && conditionId <= 804) {
        return 'fa-cloud'; // Clouds
    } else {
        return 'fa-smog'; // Default fallback
    }
}
