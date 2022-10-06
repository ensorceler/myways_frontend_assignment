import { BiDroplet as HumidityIcon } from "react-icons/bi";
import { atmospheric_data } from "../../utils/weather_data";
export default function HumidityInfo() {
  return (
    <div className="px-4 py-2 rounded-lg bg-white bg-opacity-30 backdrop-blur-md flex flex-col gap-2">
      <p>Humidity</p>
      <div className="flex flex-row items-center gap-2">
        <HumidityIcon />
        <p className="text-base">{atmospheric_data.humidity} %</p>
      </div>
    </div>
  );
}
