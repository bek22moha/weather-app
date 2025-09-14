import cityConfig from "../../config.json";

export default async function handler(req, res) {
  try {
    const { latitude, longitude } = cityConfig;

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,visibility&daily=sunrise,sunset&timezone=Europe/Paris`
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des données" });
  }
}
