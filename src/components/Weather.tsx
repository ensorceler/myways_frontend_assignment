import React, { useEffect } from "react";
import { WeekWeatherViewLargeScreen } from "./week_weather/WeekWeatherView";
import { weather_units } from "../utils/weather_data";
import { MoreInfoLargeDevices } from "./MoreInfo";
import WeatherConditionsMain from "./WeatherConditionsMain";

export default function Weather() {
  const [selectedTemp, setSelectedTemp] = React.useState<string>(
    weather_units.temperature
  );
  return (
    <div>
      <div className="pt-4 lg:pt-8 lg:max-w-4xl lg:ml-auto lg:mr-auto lg:flex lg:flex-row lg:gap-8 ">
        <WeatherConditionsMain
          selectedTemp={selectedTemp}
          setSelectedTemp={setSelectedTemp}
        />
        <MoreInfoLargeDevices tempUnit={selectedTemp} />
      </div>
      <WeekWeatherViewLargeScreen tempUnit={selectedTemp} />
    </div>
  );
}
