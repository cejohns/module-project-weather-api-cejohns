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
//const cityDropdown = document.getElementById('citySelect');

// Adding an event listener for the 'change' event
document.querySelector('#citySelect').addEventListener('change',async evt => {
  // Get the selected option

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
     evt.target.removeAttribute('disabled');
     // Handle the successful response here
     let { Data }  = response;
    document.querySelector('#apparentTemp div:nth-child(2)').textContent = `${Data.current.apparent_temperature}°`
    
   

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

    /Data.forcast.daily.forEach((day, idx) => {
      let card = document.querySelector('.next-day')[idx]

      let weekDay = card.children[0]
      let apparent = card.children[1]
      let minMax = card.children[2]
      let precipit = card.children[3]

      weekDay.textContent = getDayOfWeek(day.date)
      apparent.textContent = descriptions.find(d => d[0] === day.weather_description[1])     
    
    minMax.textContent = `${day.temperature_mib }°/${day.temperature_max}°`

      document.querySelector('#Location').firstElementChild.textContent= Data.location.citySelected
precipit.textContent = `Precipitation: ${day.precipitation_probability*100}%`
    })
  }catch(err){
    console.error('Error:', err.message);
  }
  
});


function getDayOfWeek(date) {
    return date;
}




  // 👆 WORK WORK ABOVE THIS LINE 👆

}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
