const API_KEY = 'your_api_key_here'; // Replace with your actual API key

export async function fetchWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('City not found');
  }
  const data = await response.json();
  return {
    city: data.name,
    temperature: data.main.temp,
    condition: data.weather[0].description,
  };
}
