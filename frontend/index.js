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
    const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${selectedCity}`;

    

    document.querySelector('#citySelect').setAttribute('disabled', 'disabled'); // Corrected attribute name
    document.querySelector('#weatherWidget').style.display = 'none'; // Corrected typo in selector
    document.querySelector('.info').textContent = 'Fetching weather data...'; // Corrected typo in textContent

     // Make a GET request using Axios
     const response = await axios.get(weatherApiUrl);

     // Handle the successful response here
     const weatherData = response.data;

      

    // Extract the emoji for the weather description
    const emoji = descriptions.find(([desc]) => desc === weatherData.current.condition.text);

      // For example, you can display the temperature
    document.querySelector('.info').textContent = `Temperature in ${selectedCity}: ${weatherData.current.temp_c}°C`;

    
  }catch(err){
    console.error('Error:', err);
  }finally{
    // Enable the button and display the weather widget
    document.querySelector('#citySelect').removeAttribute('disabled');
    document.querySelector('#weatherWidget').style.display = 'block';
  }
  
});







  // 👆 WORK WORK ABOVE THIS LINE 👆

}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
