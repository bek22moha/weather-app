import Image from "next/image";
import { ctoF, getWeatherIcon } from "../services/converters";
import styles from "./MainCard.module.css";

export const MainCard = ({ city, country, unitSystem, weatherData }) => {
  if (!weatherData || !weatherData.current_weather || !weatherData.hourly) {
    return null;
  }

  const currentTime = new Date(weatherData.current_weather.time);
  const sunriseTime = new Date(weatherData.daily.sunrise[0]);
  const sunsetTime = new Date(weatherData.daily.sunset[0]);
  const isDay = currentTime >= sunriseTime && currentTime < sunsetTime;

  const iconName = getWeatherIcon(weatherData.current_weather.weathercode, isDay);

  const currentTemp =
    unitSystem === "metric"
      ? Math.round(weatherData.current_weather.temperature)
      : Math.round(ctoF(weatherData.current_weather.temperature));

  const feelsLikeTemp =
    weatherData.hourly.temperature_2m?.length > 0
      ? unitSystem === "metric"
        ? Math.round(weatherData.hourly.temperature_2m[0])
        : Math.round(ctoF(weatherData.hourly.temperature_2m[0]))
      : "N/A";

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>{city}, {country}</h1>
      <Image width="300" height="300" src={`/icons/${iconName}.svg`} alt="weatherIcon" />
      <h1 className={styles.temperature}>{currentTemp}°{unitSystem === "metric" ? "C" : "F"}</h1>
      <p>Feels like {feelsLikeTemp}°{unitSystem === "metric" ? "C" : "F"}</p>
    </div>
  );
};
