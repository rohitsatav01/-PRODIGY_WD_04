function getFakeWeather() {
    const locationInput = document.getElementById('location');
    const location = locationInput.value;

    if (location.trim() === '') {
        alert('Please enter a location.');
        return;
    }

    const fakeData = generateFakeData();
    displayWeatherData(fakeData);
}

function generateFakeData() {
    return {
        name: 'Pune,Maharashtra,India',
        weather: [{ description: 'Partly Cloudy', icon: '03d' }],
        main: { temp: 25, humidity: 60 },
        wind: { speed: 5 },
    };
}

function displayWeatherData(data) {
    const weatherInfoDiv = document.getElementById('weather-info');
    const locationName = document.getElementById('location-name');
    const weatherIcon = document.getElementById('weather-icon');
    const weatherDescription = document.getElementById('weather-description');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');

    locationName.textContent = `${data.name}`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.alt = `Weather Icon: ${data.weather[0].description}`;
    weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    weatherInfoDiv.classList.remove('hidden');
}
