import API_KEY from "./config";
import endpoint from "./endpoints";

async function getCity(cityName) {
  const params = new URLSearchParams({
    q: cityName,
    lang: "RU",
    key: API_KEY,
    days: 3,
  });

  try {
    const response = await fetch(
      `${endpoint.baseUrl}${endpoint.forecastUrl}?${params.toString()}`,
      {}
    );

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export default getCity;
