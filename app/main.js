import { fetchWeather } from './api.js';
import { updateUI, showError } from './dom.js';

const form = document.getElementById('weatherForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const city = document.getElementById('cityInput').value;

  try {
    const weatherData = await fetchWeather(city);
    updateUI(weatherData);
  } catch (error) {
    showError(error.message);
  }
});
