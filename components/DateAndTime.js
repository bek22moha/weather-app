import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData }) => {
  if (!weatherData || !weatherData.current_weather) {
    return null;
  }

  const time = new Date(weatherData.current_weather.time);

  const weekday = time.toLocaleDateString("fr-FR", { weekday: "long" });
  const hours = time.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    sou: "2-digit",
  });

  return (
    <div className={styles.wrapper}>
      <h2>
        {weekday}, {hours}
      </h2>
    </div>
  );
};

export default DateAndTime;