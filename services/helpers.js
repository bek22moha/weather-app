import { kmToMiles, mpsToMph } from "./converters";

export const getWindSpeed = (unitSystem, windInMps) =>
  unitSystem === "metric" ? windInMps : mpsToMph(windInMps);

export const getVisibility = (unitSystem, visibilityInMeters) =>
  visibilityInMeters
    ? unitSystem === "metric"
      ? (visibilityInMeters / 1000).toFixed(1)
      : kmToMiles(visibilityInMeters / 1000)
    : "N/A";

export const getTime = (timeString) => {
  if (!timeString) return "";
  const date = new Date(timeString);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

export const getAMPM = (timeString) => {
  if (!timeString) return "";
  const hours = new Date(timeString).getHours();
  return hours >= 12 ? "PM" : "AM";
};
