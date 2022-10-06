import React, { useEffect, useRef } from "react";
import {
  location_data,
  today_date,
  today_high_temp,
  today_low_temp,
  today_temp,
  today_weather_condition,
} from "../utils/weather_data";
import WeatherType from "./WeatherType";
import { GoLocation as LocationIcon } from "react-icons/go";
import { BsSearch as SearchIcon } from "react-icons/bs";
import { TbTemperature as TemperatureIcon } from "react-icons/tb";
import WeekWeatherView from "./week_weather/WeekWeatherView";
import { MoreInfoSmallDevices } from "./MoreInfo";
import SwitchTempUnitButton from "./SwitchTempUnitButton";
import { fa_to_cel } from "../utils/temp_conversion";
interface WeatherConditionsMainProps {
  selectedTemp: string;
  setSelectedTemp: Function;
}
export default function WeatherConditionsMain({
  selectedTemp,
  setSelectedTemp,
}: WeatherConditionsMainProps) {
  const [toggleShowMore, setToggleShowMore] = React.useState<boolean>(false);

  const changeTemperatureUnit = (val: string) => {
    setSelectedTemp(val);
  };
  const scrollRef = useRef<any>();

  useEffect(() => {
    if (toggleShowMore === true) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [toggleShowMore]);

  return (
    <div className="ml-auto mr-auto max-w-sm sm:max-w-lg md:max-w-2xl lg:flex-1 py-4 ">
      {/** location and search  */}
      <div
        aria-label="location and searchbox"
        className="flex flex-row justify-between"
      >
        <div className="flex flex-row items-center gap-4">
          <LocationIcon fontSize={20} className="text-white" />
          <p className="text-white sm:text-lg">
            {location_data.city}, {location_data.region} ,{" "}
            {location_data.country}
          </p>
        </div>
        <button className="px-2 py-2 md:px-3 md:py-3 rounded-md bg-white bg-opacity-20 backdrop-blur-sm active:scale-95">
          <SearchIcon className="text-white" />
        </button>
      </div>

      {/** temperature description icon and temp switch button  */}
      <div className="mt-4 flex flex-row justify-between items-center">
        <WeatherType />
        <SwitchTempUnitButton
          selectedTemp={selectedTemp}
          setSelectedTemp={setSelectedTemp}
        />
      </div>

      <div className="my-2">
        <p className="font-base text-base ">
          Weather is{" "}
          <span className="font-semibold">{today_weather_condition}</span>{" "}
          today.
        </p>
      </div>
      {/**  temperature Icon */}
      <div className="relative w-40">
        <p className="text-8xl font-light text-white">
          {selectedTemp === "F" ? (
            <>{today_temp}</>
          ) : (
            <>{fa_to_cel(today_temp)}</>
          )}
        </p>
        <div arial-label="date" className="absolute top-0 right-0">
          <p className="text-3xl text-white font-light">&#176;{selectedTemp}</p>
        </div>
      </div>

      {/** day and date */}
      <div aria-label="date" className="mt-4">
        <p className="text-xl">{today_date}</p>
      </div>

      {/** high and low */}
      <div className="flex flex-row justify-between items-center">
        <div className="mt-4 flex flex-row items-center gap-6 font-light text-md">
          <div className="flex items-center ">
            <TemperatureIcon />
            <p> High / Low</p>
          </div>
          <p>
            {selectedTemp === "F" ? (
              <span>{today_high_temp}</span>
            ) : (
              <span>{fa_to_cel(today_high_temp)}</span>
            )}{" "}
            &#176;{selectedTemp} /{" "}
            {selectedTemp === "F" ? (
              <span>{today_low_temp}</span>
            ) : (
              <span>{fa_to_cel(today_low_temp)}</span>
            )}{" "}
            &#176;
            {selectedTemp}
          </p>
        </div>

        <button
          className="lg:hidden px-2 py-1 rounded-md bg-opacity-30 bg-white backdrop-blur-lg active:scale-95 text-sm "
          onClick={() => setToggleShowMore(!toggleShowMore)}
        >
          {toggleShowMore === false ? (
            <span>show more</span>
          ) : (
            <span> show less</span>
          )}
        </button>
      </div>

      <WeekWeatherView tempUnit={selectedTemp} />
      {toggleShowMore && <MoreInfoSmallDevices />}
      <div ref={scrollRef}></div>
    </div>
  );
}
