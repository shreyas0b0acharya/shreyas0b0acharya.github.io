let cityName = 'paris';
const Background = document.getElementById("Background");
const mainImage = document.getElementById("mainImage");
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth, windowHeight);

var main = '';

function randomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=53bf591792cadb5afc28d94074a14dc4')
  .then(response => response.json())
  .then(data => {
    if (data.main) {
      console.log("temp: " + data.main.temp);
      main = data.weather[0].description;
      console.log("main: " + main);

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


