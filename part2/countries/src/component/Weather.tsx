import { useEffect, useState } from "react";
import { CountryType } from "../App";
import axios from "axios";

type WeatherProps = {
  country: CountryType;
};

const Weather = ({ country }: WeatherProps) => {
  const [weatherData, setWeatherData] = useState({});
  const API_KEY = import.meta.env.VITE_WEATHER_API;
  useEffect(() => {
    const getWeatherData = async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${API_KEY}`
      );
      setWeatherData(res.data);
    };
    if (Object.keys(weatherData).length === 0) {
      getWeatherData();
    }
  });
  console.log(weatherData);

  return <h4>Weather for {country.name.common}</h4>;
};

export default Weather;
