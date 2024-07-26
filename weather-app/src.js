document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.querySelector('.search-btn');
    const searchBar = document.querySelector('.search-bar');
    const tempElement = document.querySelector('.temp');
    const weatherElement = document.querySelector('.weather');
    const aiMessageElement = document.querySelector('.ai-message');
    const errorMessageElement = document.querySelector('.error-message');

    searchBtn.addEventListener('click', () => {
        const city = searchBar.value.trim();
        if (city) {
            fetchWeather(city);
            aiMessageElement.textContent = `Fetching weather data for ${city}...`;
        }
    });

    searchBar.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const city = searchBar.value.trim();
            if (city) {
                fetchWeather(city);
                aiMessageElement.textContent = `Fetching weather data for ${city}...`;
            }
        }
    });

    async function fetchWeather(city) {
        const apiKey = 'c811a4e9a01b25fd380ab7c2dea558f8'; // YOUR-API-KEY
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                const temperature = data.main.temp;
                const weather = data.weather[0].main;
                tempElement.textContent = `${temperature}°C`;
                weatherElement.textContent = weather;
                aiMessageElement.textContent = `The weather in ${city} is ${weather} with a temperature of ${temperature}°C.`;
                errorMessageElement.style.display = 'none';
            } else {
                tempElement.textContent = '--°C';
                weatherElement.textContent = '--';
                aiMessageElement.textContent = `City not found. Please try again.`;
                errorMessageElement.style.display = 'block';
                errorMessageElement.textContent = `Error: ${data.message}`;
                console.error(`Error: ${data.message}`);
            }
        } catch (error) {
            tempElement.textContent = '--°C';
            weatherElement.textContent = '--';
            aiMessageElement.textContent = `Error fetching weather data!`;
            errorMessageElement.style.display = 'block';
            errorMessageElement.textContent = `Fetch error: ${error.message}`;
            console.error(`Fetch error: ${error.message}`);
        }
    }
});