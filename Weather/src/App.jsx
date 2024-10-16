import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // State to hold city input value
  const [city, setCity] = useState("");

  // State to hold fetched weather details
  const [weather, setWeather] = useState(null);
  const [counter, setcounter] = useState(1);
  // Function to handle data fetching
  const getData = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Fetch weather data from the OpenWeatherMap API
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        // Check if the response contains valid weather data
        if (data.cod === 200) {
          // Update the weather state with fetched data
          setWeather({
            cityName1: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
          });
        } else {
          // Handle the case where the city is not found
          setWeather(null);
          alert("City not found. Please try again.");
        }
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle any errors during fetch

    // Clear the city input after submission
    setCity("");
  };
  let changeCounter = () => {
    setcounter(counter + 1);
  };

  useEffect(() => {
    console.log("Welcome to Atullya");
  }, [counter]);
  return (
    <div className="App">
      {counter}
      <button
        onClick={() => {
          changeCounter();
        }}
      >
        Click Me
      </button>
      {/* Attach the event handler properly */}
      <form onSubmit={getData}>
        <input
          type="text"
          value={city}
          placeholder="Enter city"
          onChange={(e) => setCity(e.target.value)} // Update state with input value
        />
        <button type="submit">Get Weather</button>
      </form>

      {/* Display the weather data conditionally if it is available */}
      {weather ? (
        <div className="weather-details">
          <h2>Weather in {weather.cityName1}</h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Description: {weather.description}</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind Speed: {weather.windSpeed} m/s</p>
        </div>
      ) : (
        <p>
          No weather data available. Please enter a city name to get the
          weather.
        </p>
      )}
    </div>
  );
}

export default App;
