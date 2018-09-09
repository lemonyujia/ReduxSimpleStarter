import axios from 'axios';

const API_KEY = '5e8dadbc627dd8f5becd6c3c2f242bba';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// const ROOT_URL = 'https://samples.openweathermap.org/data/2.5/forecast?appid='' + API_KEY;


export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request // we are returning the promise as the payload (important)
  };
}
