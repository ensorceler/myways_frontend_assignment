import HumidityInfo from "./atmosphere/HumidityInfo";
import PressureInfo from "./atmosphere/PressureInfo";
import WindInfo from "./atmosphere/WindInfo";
import DayLightInfo from "./DayLightInfo";

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

export const MoreInfoLargeDevices = () => {
  return (
    <div className="hidden lg:block lg:flex-1">
      <DayLightInfo />
      <div className="mt-8 grid grid-rows-1 grid-cols-2 gap-4">
        <WindInfo />
        <div className="grid grid-rows-2 gap-2">
          <PressureInfo />
          <HumidityInfo />
        </div>
      </div>
    </div>
  );
};
