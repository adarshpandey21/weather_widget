import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "",
        feelsLike: 0,
        humidity: 0,
        maxTemp: 0,
        minTemp: 0,
        temp: 0,
        weather: "",
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Weather App by Adarsh pandey</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}