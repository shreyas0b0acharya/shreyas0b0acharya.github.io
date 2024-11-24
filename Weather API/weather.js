const searchIcon = document.getElementById("searchIcon");
const Background = document.getElementById("Background");
const mainImage = document.getElementById("mainImage");
const mainTemp = document.getElementById("mainTemp");
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth, windowHeight);

var main = '';



function randomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

searchIcon.addEventListener('click',SearchingCity);

function SearchingCity(){
  const searchInput = document.getElementById("searchInput");
  let cityName = searchInput.value;
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=53bf591792cadb5afc28d94074a14dc4')
    .then(response => response.json())
    .then(data => {
      if (data.main) {
        console.log("temp: " + data.main.temp);
        main = data.weather[0].description;
        console.log("main: " + main);
        fetchMainTemp = data.main.temp;

        const unsplashURL = 'https://api.unsplash.com/search/photos?query=' + cityName + '&client_id=XBTkHjyzPIKk85ztWIOdyTainOWCC7sX09YLeKw6e5A';

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

              mainTemp.textContent = fetchMainTemp + ' °C';

            } else {
              console.log('No results found or invalid response.');
            }
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation (Unsplash):', error);
          });

      } else {
        console.log('Main data not found or invalid response.');
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation (Weather API):', error);
    });
  }
  function getWeatherIcon(weatherCode, isDaytime) {
    const dayIcons = {
        "800": "day_clear.png",
        "801": "day_partial_cloud.png",
        "802": "cloudy.png",
        "803": "overcast.png",
        "804": "overcast.png",
        "500": "day_rain.png",
        "200": "day_rain_thunder.png",
        "600": "day_snow.png",
        "701": "fog.png",
        // Add other day codes...
    };

    const nightIcons = {
        "800": "night_half_moon_clear.png",
        "801": "night_half_moon_partial_cloud.png",
        "802": "cloudy.png",
        "803": "overcast.png",
        "804": "overcast.png",
        "500": "night_half_moon_rain.png",
        "200": "night_half_moon_rain_thunder.png",
        "600": "night_half_moon_snow.png",
        "701": "fog.png",
        // Add other night codes...
    };

    return isDaytime ? dayIcons[weatherCode] : nightIcons[weatherCode];
}




