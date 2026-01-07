function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY_HERE";

    const weatherBox = document.getElementById("weatherBox");
    const errorMsg = document.getElementById("errorMsg");

    weatherBox.style.display = "none";
    errorMsg.innerText = "";

    if (city === "") {
        errorMsg.innerText = "Please enter a city name";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temperature").innerText =
                `🌡️ Temperature: ${data.main.temp} °C`;
            document.getElementById("condition").innerText =
                `☁️ Condition: ${data.weather[0].main}`;
            document.getElementById("humidity").innerText =
                `💧 Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText =
                `🌬️ Wind Speed: ${data.wind.speed} m/s`;

            weatherBox.style.display = "block";
        })
        .catch(error => {
            errorMsg.innerText = error.message;
        });
}

