const searchIcon = document.getElementById("searchIcon");
const Background = document.getElementById("Background");
const mainImage = document.getElementById("mainImage");
const mainTemp = document.getElementById("mainTemp");
const weatherDescription = document.getElementById("weatherDescription");
const weatherMain = document.getElementById("weatherMain");
const date = document.getElementById("date");
const time = document.getElementById("time");
const cityName = document.getElementById("cityName");
const lowTemp = document.getElementById("lowTemp");
const highTemp = document.getElementById("highTemp");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");


const weatherIcon = document.getElementById("weatherIcon");
const invalidCityName = document.getElementById("invalidCityName");


const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth, windowHeight);

var main = '';



function randomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getTodayDate() { 
  const today = new Date();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = dayNames[today.getDay()];
  const date = today.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthName = monthNames[today.getMonth()];
  return `${dayName}, ${date} ${monthName}`;
}

// Example usage:
console.log(getTodayDate()); // Output: e.g., "Monday, 27 Nov"


function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const period = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${String(hours).padStart(2, '0')}:${minutes} ${period}`;
}

let timeIn24hr = 0;
function getCityTimeZoneTime(timeZoneTime) {
  const now = new Date();
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60000; // Convert local time to UTC
  timeInZone = new Date(utcTime + timeZoneTime * 1000);  // Adjust for offset

  timeIn24hr = timeInZone.toLocaleString('en-US', {
      hour: '2-digit',
      hour12: false,
  });

  return timeInZone.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
  });
}

function isDaytime(hours) {
  if (hours >= 6 && hours < 18) {
      return true;
  } else {
      return false;
  }
}





function getWeatherIcon(weatherCode, isDaytime) {
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

  return isDaytime ? dayIcons[weatherCode] : nightIcons[weatherCode];
}




searchIcon.addEventListener('click',SearchingCity);

function SearchingCity(){
  invalidCityName.style.visibility = 'hidden';
  const searchInput = document.getElementById("searchInput");
  let cityNameInput = searchInput.value;
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityNameInput+'&units=metric&appid=53bf591792cadb5afc28d94074a14dc4')
    .then(response => response.json())
    .then(data => {
      if (data.main) {
        console.log("temp: " + data.main.temp);
        main = data.weather[0].description;
        console.log("main: " + main);
        let fetchMainTemp = data.main.temp;
        let fetchDescription =  data.weather[0].description;
        let fetchMain =  data.weather[0].main;
        let fetchId=  data.weather[0].id;
        let fetchTimeZone = data.timezone;
        let fetchCityName = data.name;

        let fetchLowTemp = data.main.temp_min;
        let fetchHighTemp = data.main.temp_max;
        let fetchWindSpeed = data.wind.speed;
        let fetchHumidiy = data.main.humidity;
        let fetchPressure = data.main.pressure;


        const unsplashURL = 'https://api.unsplash.com/search/photos?query=' + cityNameInput + '&client_id=XBTkHjyzPIKk85ztWIOdyTainOWCC7sX09YLeKw6e5A';

        console.log(unsplashURL);
        
        fetch(unsplashURL)
          .then(response => {
            console.log('Rate Limit:', response.headers.get('X-Ratelimit-Limit'));
            console.log('Remaining Requests:', response.headers.get('X-Ratelimit-Remaining'));
            return response.json();
          })
          .then(data => {
            if (data && data.results.length > 0) {
              let choice = parseInt(Math.random() * (data.results.length));
              console.log("Random index:", choice);  
              console.log("Data results length:", data.results.length);  
              
              console.log(data.results); 
              const image = data.results[choice].urls.raw + '?q=50&w=1080&h=1920';
              Background.src = image;
              mainImage.src = image;

              mainTemp.textContent = fetchMainTemp.toFixed(1) + '°c';
              weatherDescription.textContent = fetchDescription;
              weatherMain.textContent = fetchMain;
              date.textContent = getTodayDate();
              time.textContent = getCityTimeZoneTime(fetchTimeZone);
              cityName.textContent = fetchCityName;

              lowTemp.textContent = fetchLowTemp+ '°c' ;
              highTemp.textContent = fetchHighTemp+ '°c' ;
              windSpeed.textContent = fetchWindSpeed+ ' km/h' ;
              humidity.textContent = fetchHumidiy+ '%' ;
              pressure.textContent = fetchPressure+ ' hPa' ;

              console.log(fetchId);

              console.log("weatherImages/"+getWeatherIcon(fetchId, isDaytime(timeIn24hr)));
              weatherIcon.src ="weatherImages/"+getWeatherIcon(fetchId, isDaytime(timeIn24hr));


               


            } else {
              console.log('No results found or invalid response.');
              invalidCityName.style.visibility = 'visible';
            }
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation (Unsplash):', error);
          });

      } else {
        console.log('Main data not found or invalid response.');
        invalidCityName.style.visibility = 'visible';
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation (Weather API):', error);
    });
  }
  


