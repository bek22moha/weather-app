export const ctoF = (c) => (c * 9) / 5 + 32;

export const mpsToMph = (mps) => (mps * 2.236936).toFixed(2);

export const kmToMiles = (km) => (km / 1.609).toFixed(1);

export const timeTo12HourFormat = (time) => {
const date = new Date('1970-01-01T${time}:00');
return date.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true
});
};

export const degToCompass = (num) => {
  var val = Math.round(num / 22.5);
  var arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
};

export const unixToLocalTime = (isoString) => {
  const date = new Date(isoString);

  return date.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  })
};

export const getWeatherIcon = (weathercode, isDay) => {
  if (weathercode === 0) return isDay ? "01d" : "01n";
  if ([1,2,3].includes(weathercode)) return isDay ? "03d" : "03n";
  if ([45,48].includes(weathercode)) return isDay ? "50d" : "50n";
  if ([51,53,55,61,63,65,80,81,82].includes(weathercode)) return isDay ? "09d" : "09n";
  if ([71,73,75].includes(weathercode)) return isDay ? "13d" : "13n";
  if ([95,96,99].includes(weathercode)) return isDay ? "11d" : "11n";
  return isDay ? "01d" : "01n"; 
};
