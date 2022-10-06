import Image from "next/image";
import weatherJsonData from "../../public/weather.json";
import sunny_weather from "../../public/sunny.png";
import breezy_weather from "../../public/breezy.png";
import rainy_weather from "../../public/rainy.png";
import cloudy_weather from "../../public/cloudy.png";
import party_cloudy_weather from "../../public/partly_cloudy.png";
import mostly_cloudy_weather from "../../public/mostly_cloudy.png";
import scattered_showers_weather from "../../public/scattered_showers.png";

const weatherDescToday =
  weatherJsonData.query.results.channel.item.condition.text;

export default function WeatherType() {
  return (
    <div aria-label="icon and temp switch" className="mt-4 h-40 w-40 ">
      {weatherDescToday === "Breezy" && (
        <Image className="w-full h-full" src={breezy_weather} />
      )}
      {weatherDescToday === "Cloudy" && (
        <Image className="w-full h-full" src={cloudy_weather} />
      )}
      {weatherDescToday === "Partly Cloudy" && (
        <Image className="w-full h-full" src={party_cloudy_weather} />
      )}
      {weatherDescToday === "Scattered Showers" && (
        <Image className="w-full h-full" src={scattered_showers_weather} />
      )}
      {weatherDescToday === "Mostly Cloudy" && (
        <Image className="w-full h-full" src={mostly_cloudy_weather} />
      )}
    </div>
  );
}
