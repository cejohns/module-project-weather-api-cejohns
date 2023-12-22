async function moduleProject4() {

  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  let descriptions = [
    ["Sunny", "☀️"],
    ["Cloudy", "☁️"],
    ["Rainy", "🌧️"],
    ["Thunderstorm", "⛈️"],
    ["Snowy", "❄️"],
    ["Partly Cloudy", "⛅️"]
  ]

  // 👉 Tasks 1 - 5 go here


  // Set the initial display to "none" using inline style
document.getElementById('weatherWidget').style.display = 'none';

// Assuming your dropdown has an id of 'cityDropdown', you should replace it with the actual id
const cityDropdown = document.getElementById('citySelect');

// Adding an event listener for the 'change' event
cityDropdown.addEventListener('change',async evt => {
  // Get the selected option
  const selectedOption = cityDropdown.options[cityDropdown.selectedIndex];
  const selectedCity = selectedOption.value;
  // Log the selected city name to the console
  console.log('Selected city:', selectedOption.value);
  try {
   

    

    document.querySelector('#citySelect').setAttribute('disabled', 'disabled'); // Corrected attribute name
    document.querySelector('#weatherWidget').style.display = 'none'; // Corrected typo in selector
    document.querySelector('.info').textContent = 'Fetching weather data...'; // Corrected typo in textContent


//test
console.log(evt.target.value);

 let citySelected = evt.target.value;     
 const weatherApiUrl = `http://localhost:3003/api/weather?city=${citySelected}`;
console.log(weatherApiUrl);
 // Make a GET request using Axios
     const response = await axios.get(weatherApiUrl);
    console.log(response)
     // Enable the button and display the weather widget
   
    document.querySelector('#weatherWidget').style.display = 'block';
    document.querySelector('.info').textContent = ''
     document.querySelector('#citySelect').removeAttribute('disabled');
     // Handle the successful response here
     let { Data }  = response;
    
    document.getElementById('#apparentTemp div:nth-child(2)').textContent = `${Data.current.apparent_temperature}°`
    
   

    document.querySelector('#todayDescription').textContent = 
     descriptions.find(d => d[0] === Data.current.weather_description[1])
     document.querySelector('#todayStatsp.div:nth-child(1)').textContent = `${Data.current.temperature_mib
     }°/${Data.current.temperature_max
     }°`
     document.querySelector('#todayStatsp.div:nth-child(2)').textContent = `Precipitation: ${Data.current.precipitation_probability
      *100}%`
     document.querySelector('#todayStatsp.div:nth-child(3)').textContent = `Humidity: ${Data.current.humidity}%`
     document.querySelector('#todayStatsp.div:nth-child(4)').textContent = `Wind: ${Data.current.wind_speed}m/s`
      console.log(Data.current.apparent_temperature)

    // Extract the emoji for the weather description
    //const emoji = descriptions.find(([desc]) => desc === weatherData.current.condition.text);

      // For example, you can display the temperature
    document.querySelector('.info').textContent = `Temperature in ${selectedCity}: ${Data.current.temp_c}°C`;

    
  }catch(err){
    console.error('Error:', err.message);
  }
  
});







  // 👆 WORK WORK ABOVE THIS LINE 👆

}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
