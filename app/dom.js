export function updateUI({ city, temperature, condition }) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
      <h2>${city}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Condition: ${condition}</p>
    `;
  }
  
  export function showError(message) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `<p style="color: red;">${message}</p>`;
  }
  