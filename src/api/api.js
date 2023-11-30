import axios from 'axios';
import Notiflix from 'notiflix';

const BASE_GEOCODE_URL = 'http://api.openweathermap.org/geo/1.0/';
const BASE_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = 'ab67645e8dc60ba4f1fe44d6c82b685e';
axios.defaults.params = {
  appid: API_KEY,
};
const geocodeApi = axios.create({
  baseURL: BASE_GEOCODE_URL,
});
const weatherApi = axios.create({
  baseURL: BASE_WEATHER_URL,
  params: {
    units: 'metric',
    lang: 'ua',
  },
});

class Api {
  #handleError(error) {
    Notiflix.Notify.failure(error.message);
  }

  #getInfo(data) {
    const {
      city: { name: city, country },
      list,
    } = data;
    const weatherList = list.map(el => {
      const {
        dt_txt: date,
        main: { feels_like: rawFeelsLike, humidity, temp: rawTemp },
        weather: [{ description: rawWeatherDesc }],
        wind: { speed: rawWindSpeed },
      } = el;
      const feelsLike = Math.round(rawFeelsLike);
      const temp = Math.round(rawTemp);
      const windSpeed = (rawWindSpeed * 3.6).toFixed(1);
      const weatherDesc =
        rawWeatherDesc.charAt(0).toUpperCase() + rawWeatherDesc.slice(1);
      return { date, feelsLike, humidity, temp, weatherDesc, windSpeed };
    });
    return { city, country, weatherList };
  }

  async getWeather(query) {
    try {
      const resp = await geocodeApi.get(`direct?q=${query}`);
      const { lon, lat } = resp.data[0];
      const response = await weatherApi.get(`forecast?lat=${lat}&lon=${lon}`);
      return this.#getInfo(response.data);
    } catch (error) {
      this.#handleError(error);
    }
  }
}

const api = new Api();
export default api;
