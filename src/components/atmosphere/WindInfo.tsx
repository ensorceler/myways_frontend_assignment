import { BsWind as WindIcon } from "react-icons/bs";
import { weather_units, wind_data } from "../../utils/weather_data";

export default function WindInfo() {
  return (
    <div className="px-4 py-2 flex flex-col justify-center items-center bg-white bg-opacity-20 backdrop-blur-md rounded-xl">
      <div className="flex flex-row justify-center items-center gap-2">
        <p className="text-lg font-medium ">Wind </p>
        <WindIcon />
      </div>
      <div className="mb-4 flex flex-row justify-center items-center rounded-full ">
        <div className="origin-bottom  animate-rotate  w-0 h-0 border-l-[5px] border-l-transparent border-b-[30px] border-b-neutral-200 border-r-[5px] border-r-transparent "></div>
      </div>
      <p className="font-light text-center">
        Speed: {wind_data.speed} {weather_units.speed}
      </p>
      <p className="font-light text-center">
        Direction: {wind_data.direction}&#176;
      </p>
    </div>
  );
}
