import { useState, useEffect } from "react";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
import { MetricsBox } from "../components/MetricsBox";
import { UnitSwitch } from "../components/UnitSwitch";
import { LoadingScreen } from "../components/LoadingScreen";

import styles from "../styles/Home.module.css";

export const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [unitSystem, setUnitSystem] = useState("metric");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/data");
        const data = await res.json();
        setWeatherData(data);
      } catch (error) {
        console.error("error lors de la récupération des données", error);
      }
    };
    getData();
    const interval = setInterval(getData, 3600000);
    return () => clearInterval(interval);
  }, []);

  const changeSystem = () =>
    unitSystem === "metric"
      ? setUnitSystem("imperial")
      : setUnitSystem("metric");

  return weatherData && weatherData.current_weather ? (
    <div className={styles.wrapper}>
      <MainCard
        city={"Paris"}
        country={"FR"}
        description={`Temp: ${weatherData.current_weather.temperature}°C`}
        iconName={"01d"}
        unitSystem={unitSystem}
        weatherData={weatherData}
      />
      <ContentBox>
        <Header>
          <DateAndTime
            weatherData={weatherData}
            unitSystem={unitSystem}
          />
        </Header>
        <MetricsBox
          weatherData={weatherData}
          unitSystem={unitSystem}
        />
        <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
      </ContentBox>
    </div>
  ) : (
    <LoadingScreen loadingMessage="Loading..." />
  );
};

export default App;