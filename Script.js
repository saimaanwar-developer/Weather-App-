function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const resultDiv = document.getElementById('weatherResult');

  if(city) {
    fetch(`https://wttr.in/${city}?format=j1`)
      .then(response => response.json())
      .then(data => {
        // get temp & icon
        const tempC = data.current_condition[0].temp_C;
        const weatherDesc = data.current_condition[0].weatherDesc[0].value;
        const iconUrl = data.current_condition[0].weatherIconUrl[0].value;

        resultDiv.innerHTML = `
          <div>${city.toUpperCase()}</div>
          <div>${weatherDesc} - ${tempC}°C</div>
        `;
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerText = 'Could not fetch weather data.';
      });
  } else {
    resultDiv.innerText = 'Please enter a city name.';
  }
}
