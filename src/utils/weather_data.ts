import weatherJsonData from "../../public/weather.json";

export const location_data = weatherJsonData.query.results.channel.location;

export const atmospheric_data =
  weatherJsonData.query.results.channel.atmosphere;
export const wind_data = weatherJsonData.query.results.channel.wind;

export const daylight_data = weatherJsonData.query.results.channel.astronomy;

export const weather_units = weatherJsonData.query.results.channel.units;

export const today_date =
  weatherJsonData.query.results.channel.item.condition.date;

export const today_temp =
  weatherJsonData.query.results.channel.item.condition.temp;

export const today_weather_condition =
  weatherJsonData.query.results.channel.item.condition.text;

export const today_high_temp =
  weatherJsonData.query.results.channel.item.forecast[0].high;
export const today_low_temp =
  weatherJsonData.query.results.channel.item.forecast[0].low;
