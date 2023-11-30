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
    Notiflix.Notify.failure(error.response.data.message);
  }

  #getInfo(data) {}

  async getGeocode(query) {
    try {
      const resp = await geocodeApi.get(`direct?q=${query}`);
      const { name, lon, lat } = resp.data[0];
      return { name, lon, lat };
    } catch (error) {
      this.#handleError();
    }
  }

  async getWeather(lat, lon) {
    try {
      const resp = await weatherApi.get(`forecast?lat=${lat}&lon=${lon}`);
      this.#getInfo(resp.data);
      return resp.data;
    } catch (error) {
      this.#handleError();
    }
  }
}

const api = new Api();
export default api;
