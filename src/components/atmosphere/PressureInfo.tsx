import BarometerIcon from "../../icons/BarometerIcon";
import { atmospheric_data, weather_units } from "../../utils/weather_data";

export default function PressureInfo() {
  return (
    <div className="px-4 py-2 rounded-lg bg-white bg-opacity-30 backdrop-blur-md flex flex-col gap-2">
      <p className="font-medium">Pressure</p>
      <div className="flex flex-row gap-2">
        <BarometerIcon size={24} />
        <p>
          {atmospheric_data.pressure} {weather_units.pressure}
        </p>
      </div>
    </div>
  );
}
