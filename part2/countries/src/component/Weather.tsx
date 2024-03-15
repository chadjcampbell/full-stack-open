import { useEffect, useState } from "react";
import { CountryType } from "../App";
import axios from "axios";

type WeatherDataType = {
  current: {
    temp_c: number;
    condition: { icon: string; text: string };
    wind_mph: number;
  };
};

type WeatherProps = {
  country: CountryType;
};

const Weather = ({ country }: WeatherProps) => {
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API;

  useEffect(() => {
    const getWeatherData = async () => {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?q=${country.latlng[0]},${country.latlng[1]}&key=${API_KEY}`
      );
      setWeatherData(res.data);
    };
    if (!weatherData) {
      getWeatherData();
    }
  });

  return (
    <section>
      <h4>Weather for {country.name.common}</h4>
      <p>Temperature: {weatherData?.current.temp_c} Celcius</p>
      <img
        src={weatherData?.current.condition.icon}
        alt={weatherData?.current.condition.text}
      />
      <p>Wind: {weatherData?.current.wind_mph} mph</p>
    </section>
  );
};

export default Weather;
