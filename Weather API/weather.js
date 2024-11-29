// DOM elements for weather details
const DOMElements = ["searchIcon",,"searchInput","time", "cityName", "lowTemp",
                      "highTemp", "windSpeed","humidity", "pressure", "weatherIcon",
                      "Background","mainImage","weatherMain","weatherDescription","mainTemp",
                      "invalidCityName","detailsDiv","imageDiv","cityNameTime"];
for (let element of DOMElements) {
  window[element] = document.getElementById(element);
}







// Generate a random integer in a given range
function randomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get today's date in a specific format(e.g., "Friday, 29 Nov")
function getTodayDate() { 
  const today = new Date();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = dayNames[today.getDay()];
  const date = today.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthName = monthNames[today.getMonth()];
  return `${dayName}, ${date} ${monthName}`;
}

let timeIn24hr = 0;

// Get city-specific time based on timezone offset
function getCityTimeZoneTime(timeZoneTime) {
  const now = new Date();
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60000; // Convert local time to UTC
  timeInZone = new Date(utcTime + timeZoneTime * 1000);  // Adjust for offset

  //format(e.g., "16")
  timeIn24hr = timeInZone.toLocaleString('en-US', {
      hour: '2-digit',
      hour12: false,
  });

  //format(e.g., "02:44 PM")
  return timeInZone.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
  });
}
// Check if it's daytime based on hour value
function isDaytime(hours) {
  return hours >= 6 && hours < 18; // Return true if between 6 AM and 6 PM
}

// Function to get the weather icon based on weather code and time of day (daytime or nighttime)
function getWeatherIcon(weatherCode, isDaytime) {
  // Icons for daytime weather
  const dayIcons = {
      "200": "day_rain_thunder.png",
      "201": "day_rain_thunder.png",
      "202": "day_rain_thunder.png",
      "210": "thunder.png",
      "211": "thunder.png",
      "212": "thunder.png",
      "221": "thunder.png",
      "230": "day_rain_thunder.png",
      "231": "day_rain_thunder.png",
      "232": "day_rain_thunder.png",
      "300": "day_rain.png",
      "301": "day_rain.png",
      "302": "day_rain.png",
      "310": "day_rain.png",
      "311": "day_rain.png",
      "312": "day_rain.png",
      "313": "day_rain.png",
      "314": "day_rain.png",
      "321": "day_rain.png",
      "500": "day_rain.png",
      "501": "day_rain.png",
      "502": "rain.png",
      "503": "rain.png",
      "504": "rain.png",
      "511": "sleet.png",
      "520": "rain.png",
      "521": "rain.png",
      "522": "rain.png",
      "531": "rain.png",
      "600": "day_snow.png",
      "601": "day_snow.png",
      "602": "day_snow.png",
      "611": "day_sleet.png",
      "612": "day_sleet.png",
      "613": "day_sleet.png",
      "615": "day_sleet.png",
      "616": "day_sleet.png",
      "620": "day_snow.png",
      "621": "day_snow.png",
      "622": "day_snow.png",
      "701": "mist.png",
      "711": "mist.png",
      "721": "mist.png",
      "731": "mist.png",
      "741": "fog.png",
      "751": "mist.png",
      "761": "mist.png",
      "762": "mist.png",
      "771": "angry_clouds.png",
      "781": "tornado.png",
      "800": "day_clear.png",
      "801": "day_partial_cloud.png",
      "802": "cloudy.png",
      "803": "overcast.png",
      "804": "overcast.png"
  };

  // Icons for nighttime weather
  const nightIcons = {
      "200": "night_half_moon_rain_thunder.png",
      "201": "night_half_moon_rain_thunder.png",
      "202": "night_half_moon_rain_thunder.png",
      "210": "thunder.png",
      "211": "thunder.png",
      "212": "thunder.png",
      "221": "thunder.png",
      "230": "night_half_moon_rain_thunder.png",
      "231": "night_half_moon_rain_thunder.png",
      "232": "night_half_moon_rain_thunder.png",
      "300": "night_half_moon_rain.png",
      "301": "night_half_moon_rain.png",
      "302": "night_half_moon_rain.png",
      "310": "night_half_moon_rain.png",
      "311": "night_half_moon_rain.png",
      "312": "night_half_moon_rain.png",
      "313": "night_half_moon_rain.png",
      "314": "night_half_moon_rain.png",
      "321": "night_half_moon_rain.png",
      "500": "night_half_moon_rain.png",
      "501": "night_half_moon_rain.png",
      "502": "rain.png",
      "503": "rain.png",
      "504": "rain.png",
      "511": "sleet.png",
      "520": "rain.png",
      "521": "rain.png",
      "522": "rain.png",
      "531": "rain.png",
      "600": "night_half_moon_snow.png",
      "601": "night_half_moon_snow.png",
      "602": "night_half_moon_snow.png",
      "611": "night_half_moon_sleet.png",
      "612": "night_half_moon_sleet.png",
      "613": "night_half_moon_sleet.png",
      "615": "night_half_moon_sleet.png",
      "616": "night_half_moon_sleet.png",
      "620": "night_half_moon_snow.png",
      "621": "night_half_moon_snow.png",
      "622": "night_half_moon_snow.png",
      "701": "mist.png",
      "711": "mist.png",
      "721": "mist.png",
      "731": "mist.png",
      "741": "fog.png",
      "751": "mist.png",
      "761": "mist.png",
      "762": "mist.png",
      "771": "angry_clouds.png",
      "781": "tornado.png",
      "800": "night_half_moon_clear.png",
      "801": "night_half_moon_partial_cloud.png",
      "802": "cloudy.png",
      "803": "overcast.png",
      "804": "overcast.png"
  };
  // Return the appropriate icon 
  return isDaytime ? dayIcons[weatherCode] : nightIcons[weatherCode];
}

function detailsVisibility(){
  invalidCityName.style.visibility = 'visible';
        cityNameTime.style.opacity = 0;
        detailsDiv.style.opacity = 0;
        detailsDiv.style.visibility = 'hidden';
        cityNameTime.style.visibility = 'hidden';
        imageDiv.style.height = '80vh';
        Background.src = "Default.jpg";
        mainImage.src = "Default.jpg";
}


function SearchingCity() {
  // Hide the invalid city message initially
  invalidCityName.style.visibility = 'hidden';

  // Get the input value (city name)
  let cityNameInput = searchInput.value;

  // Fetch weather data from OpenWeatherMap API
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameInput}&units=metric&appid=53bf591792cadb5afc28d94074a14dc4`)
    .then(response => response.json())
    .then(data => {
      if (data.main) {

        detailsDiv.style.visibility = 'visible';
        cityNameTime.style.visibility = 'visible';
        cityNameTime.style.opacity = 1;
        detailsDiv.style.opacity = 1;
        imageDiv.style.height = '60vh';
        // Extract necessary weather details
        let fetchMainTemp = data.main.temp;
        let fetchDescription = data.weather[0].description;
        let fetchMain = data.weather[0].main;
        let fetchId = data.weather[0].id;
        let fetchTimeZone = data.timezone;
        let fetchCityName = data.name;
        let fetchLowTemp = data.main.temp_min;
        let fetchHighTemp = data.main.temp_max;
        let fetchWindSpeed = data.wind.speed;
        let fetchHumidity = data.main.humidity;
        let fetchPressure = data.main.pressure;

        // Unsplash API URL to fetch background image
        const unsplashURL = `https://api.unsplash.com/search/photos?query=${cityNameInput}&client_id=XBTkHjyzPIKk85ztWIOdyTainOWCC7sX09YLeKw6e5A`;

        // Fetch image data from Unsplash API
        fetch(unsplashURL)
          .then(response => {
            return response.json();
          })
          .then(imageData => {
            if (imageData && imageData.results.length > 0) {
              let choice = Math.floor(Math.random() * imageData.results.length); 

              // Set the background and main image
              const image = imageData.results[choice].urls.raw + '?q=50&w=1080&h=1920';
              Background.src = image;
              mainImage.src = image;
              
              // Update weather details in the UI
              mainTemp.textContent = fetchMainTemp.toFixed(1) + '°C';
              weatherDescription.textContent = fetchDescription;
              weatherMain.textContent = fetchMain;

              date.textContent = getTodayDate();
              time.textContent = getCityTimeZoneTime(fetchTimeZone);
              cityName.textContent = fetchCityName;

              lowTemp.textContent = fetchLowTemp + '°C';
              highTemp.textContent = fetchHighTemp + '°C';
              windSpeed.textContent = fetchWindSpeed + ' km/h';
              humidity.textContent = fetchHumidity + '%';
              pressure.textContent = fetchPressure + ' hPa';

              // Set the weather icon based on the weather ID and time of day
              weatherIcon.src = "weatherImages/" + getWeatherIcon(fetchId, isDaytime(timeIn24hr));
            } else {
              console.log('No results found or invalid response from Unsplash.');
              invalidCityName.style.visibility = 'visible';
              cityNameTime.style.opacity = 0;
              detailsDiv.style.opacity = 0;
              detailsDiv.style.visibility = 'hidden';
              cityNameTime.style.visibility = 'hidden';
              Background.src = "Default.jpg";
              mainImage.src = "Default.jpg";
              
              imageDiv.style.height = '80vh';
              
            }
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation (Unsplash):', error);
          });
      } else {
        console.log('Main data not found or invalid response from Weather API.');
        
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation (Weather API):', error);
    });
}

// Event listener for search icon click
searchIcon.addEventListener('click', SearchingCity);

// Event listener for pressing the Enter key
searchInput.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    SearchingCity();
  }
});


