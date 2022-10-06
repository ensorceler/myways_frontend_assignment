import React from "react";
import Image from "next/image";
import sunny_weather from "../../../public/sunny.png";
import breezy_weather from "../../../public/breezy.png";
import rainy_weather from "../../../public/rainy.png";
import cloudy_weather from "../../../public/cloudy.png";
import party_cloudy_weather from "../../../public/partly_cloudy.png";
import mostly_cloudy_weather from "../../../public/mostly_cloudy.png";
import scattered_showers_weather from "../../../public/scattered_showers.png";
import { fa_to_cel } from "../../utils/temp_conversion";

interface DayWeatherProps {
  temp_unit: string;
  date: string;
  day: string;
  high_temp: string;
  low_temp: string;
  weather_type: string;
}
export default function DayWeather({
  temp_unit,
  weather_type,
  low_temp,
  high_temp,
  date,
  day,
}: DayWeatherProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-2 py-4 px-2 bg-white bg-opacity-20 backdrop-blur-md rounded-xl">
      <p>
        {temp_unit === "F" ? (
          <span>{low_temp}</span>
        ) : (
          <span>{fa_to_cel(low_temp)}</span>
        )}
        &#176;
        {temp_unit} -
        {temp_unit === "F" ? (
          <span>{high_temp}</span>
        ) : (
          <span>{fa_to_cel(high_temp)}</span>
        )}
        &#176;
        {temp_unit}
      </p>
      <div className="h-10 w-10">
        {weather_type === "Breezy" && (
          <Image
            alt="weather_type"
            className="w-full h-full"
            src={breezy_weather}
          />
        )}
        {weather_type === "Cloudy" && (
          <Image
            alt="weather_type"
            className="w-full h-full"
            src={cloudy_weather}
          />
        )}
        {weather_type === "Partly Cloudy" && (
          <Image
            alt="weather_type"
            className="w-full h-full"
            src={party_cloudy_weather}
          />
        )}
        {weather_type === "Scattered Showers" && (
          <Image
            alt="weather_type"
            className="w-full h-full"
            src={scattered_showers_weather}
          />
        )}
        {weather_type === "Mostly Cloudy" && (
          <Image
            alt="weather_type"
            className="w-full h-full"
            src={mostly_cloudy_weather}
          />
        )}
        {weather_type === "Rain" && (
          <Image
            alt="weather_type"
            className="w-full h-full"
            src={rainy_weather}
          />
        )}
      </div>
      <p className="text-sm">{date}</p>
      <p className="text-center">{day}</p>
    </div>
  );
}
