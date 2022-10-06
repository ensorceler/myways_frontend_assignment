import {
  atmospheric_data,
  weather_units,
  wind_data,
} from "../utils/weather_data";
import HumidityInfo from "./atmosphere/HumidityInfo";
import PressureInfo from "./atmosphere/PressureInfo";
import WindInfo from "./atmosphere/WindInfo";
import DayLightInfo from "./DayLightInfo";
import { BsFillEyeFill as EyeIcon } from "react-icons/bs";
import { TbTemperature as TemperatureIcon } from "react-icons/tb";
import { fa_to_cel } from "../utils/temp_conversion";

export const MoreInfoSmallDevices = () => {
  return (
    <div className="lg:hidden">
      <DayLightInfo />
      <div className="mt-8 grid grid-rows-2 grid-cols-2 gap-4">
        <WindInfo />
        <div className="grid grid-rows-2 gap-2">
          <PressureInfo />
          <HumidityInfo />
        </div>
      </div>
    </div>
  );
};

const FeelsLikeAndVisibility = ({ tempUnit }: { tempUnit: string }) => {
  return (
    <div className="bg-white bg-opacity-20 rounded-lg px-2 py-2 mt-4 flex flex-row justify-between">
      <div className="flex flex-row items-center ">
        <TemperatureIcon fontSize={20} />
        <div className="flex flex-row items-center gap-3">
          <p className="font-medium">Feels Like</p>
          <p>
            {tempUnit === "F" ? (
              <span>
                {wind_data.chill} &#176;{tempUnit}
              </span>
            ) : (
              <span>
                {fa_to_cel(wind_data.chill)} &#176;{tempUnit}
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-1">
        <EyeIcon />
        <div className="flex flex-row items-center gap-3">
          <p className="font-medium">Visibility</p>
          <p className="font-base">
            {atmospheric_data.visibility} {weather_units.distance}
          </p>
        </div>
      </div>
    </div>
  );
};

export const MoreInfoLargeDevices = ({ tempUnit }: { tempUnit: string }) => {
  return (
    <div className="hidden lg:block lg:flex-1 ">
      <DayLightInfo />
      <div className="mt-8 grid grid-rows-1 grid-cols-2 gap-4">
        <WindInfo />
        <div className="grid grid-rows-2 gap-2">
          <PressureInfo />
          <HumidityInfo />
        </div>
      </div>
      <FeelsLikeAndVisibility tempUnit={tempUnit} />
    </div>
  );
};
