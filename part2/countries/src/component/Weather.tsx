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
        `https://api.weatherapi.com/v1/current.json?q=${country.latlng[0]},${country.latlng[1]}&key=${API_KEY}`
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
