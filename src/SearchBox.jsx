

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "288961b9d61c3b22384d68bc5c0b64d3";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );

    let jsonResponse = await response.json();

    if (!response.ok) {
      throw new Error(jsonResponse.message || "Weather not found");
    }

    let result = {
      city: jsonResponse.name,
      temp: jsonResponse.main.temp,
      minTemp: jsonResponse.main.temp_min,
      maxTemp: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].main,
    };

    return result;
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };


  
let handleSubmit = async (event) => {
  event.preventDefault();

  try {
    let info = await getWeatherInfo();
    updateInfo(info);
    setError(false);
  } catch (err) {
    setError(true);
  }

  setCity("");
};

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="City"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />

        <br />
        <br />

        <Button type="submit" variant="contained">
          Search
        </Button>

        {error && (
          <p style={{ color: "red" }}>
            No such place exists!
          </p>
        )}
      </form>
    </div>
  );
}
