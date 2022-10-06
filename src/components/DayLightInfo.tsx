import Image from "next/image";
import { useEffect } from "react";
import clockHands from "../../public/clock_hands.png";
import weatherJsonData from "../../public/weather.json";

const sunrise_time = weatherJsonData.query.results.channel.astronomy.sunrise;
const sunset_time = weatherJsonData.query.results.channel.astronomy.sunset;

const calculatingGoldenHour = () => {
  const [hour, minute, meridiem] = sunrise_time.trim().split(/[:,\s+]/);
  const [hour_1, minute_1, meridiem_1] = sunset_time.trim().split(/[:,\s+]/);

  const sunrise_1hr = (parseInt(hour, 10) + 1).toString();
  const sunset_1hr = (parseInt(hour_1, 10) - 1).toString();
  const golden_hour_sunrise = sunrise_1hr.concat(":", minute, " ", meridiem);
  const golden_hour_sunset = sunset_1hr.concat(":", minute_1, " ", meridiem_1);
  return [golden_hour_sunrise, golden_hour_sunset];
};

const [golden_hour_sunrise, golden_hour_sunset] = calculatingGoldenHour();

export default function DayLightInfo() {
  return (
    <div
      aria-label="sunrise_sunset"
      className="w-full flex flex-row items-center gap-10 "
    >
      {/** sunrise */}
      <div className="flex flex-col gap-2 items-center">
        <p className="font-light text-xl">Sunrise</p>
        <div className="h-32 w-24  rounded-full bg-white bg-opacity-30 backdrop-blur-md flex flex-col items-center justify-center">
          <div className="h-14 w-14">
            <Image className="h-full w-full" src={clockHands} />
          </div>
          <p className="text-white">{sunrise_time}</p>
        </div>
      </div>

      {/** golden hour */}
      <div className="flex flex-col gap-2 items-center ">
        <p className="font-light text-xl text-center">Golden Hour</p>
        <div className="h-40 w-24  rounded-full bg-white bg-opacity-30 backdrop-blur-md flex flex-col items-center justify-center">
          <div className="h-14 w-14">
            <Image className="h-full w-full" src={clockHands} />
          </div>
          <p className="text-white text-lg font-medium">
            {golden_hour_sunrise}
          </p>
          <p className="text-white">{golden_hour_sunset}</p>
        </div>
      </div>

      {/** sunset */}

      <div className="flex flex-col gap-2 items-center">
        <p className="font-light text-xl">Sunset</p>
        <div className="h-32 w-24  rounded-full bg-white bg-opacity-30 backdrop-blur-md flex flex-col items-center justify-center">
          <div className="h-14 w-14">
            <Image className="h-full w-full" src={clockHands} />
          </div>
          <p className="text-white">{sunset_time}</p>
        </div>
      </div>
    </div>
  );
}
