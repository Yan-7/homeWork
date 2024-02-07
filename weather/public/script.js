document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("send").addEventListener("click", function() {
        const city = document.getElementById("location").value;
        if (city) {
            fetchWeather(city);
        }
        else  {
            console.log("could not find city");
        }
    })
  
    
});

function fetchWeather(city) {
  fetch(`http://127.0.0.1:3000/weather/${city}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("temp").textContent = data.main.temp;
      document.getElementById("condition").textContent = data.weather[0].main;
      document.getElementById("humidity").textContent = data.main.humidity;
      document.getElementById("wind").textContent = data.wind.speed;
    })
    .catch((error) => {
      console.error("error fetching weather", error);
    });
}
