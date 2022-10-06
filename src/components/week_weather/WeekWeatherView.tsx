import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { RiArrowRightSFill as RightArrowIcon } from "react-icons/ri";
import weatherJsonData from "../../../public/weather.json";
import DayWeather from "./DayWeather";

const forecastData = weatherJsonData.query.results.channel.item.forecast;

interface WeekWeatherViewProps {
  tempUnit: string;
}

function WeekWeatherViewSmallScreen({ tempUnit }: WeekWeatherViewProps) {
  return (
    <div className="sm:hidden">
      <Swiper spaceBetween={10} slidesPerView={3}>
        {forecastData.map((item, index) => (
          <SwiperSlide>
            <DayWeather
              key={index}
              temp_unit={tempUnit}
              day={item.day}
              date={item.date}
              high_temp={item.high}
              low_temp={item.low}
              weather_type={item.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-2 flex flex-row items-center gap-1 animate-pulse">
        <p className="font-light">fully swipeable </p>
        <RightArrowIcon />
      </div>
    </div>
  );
}
function WeekWeatherViewMediumScreen({ tempUnit }: WeekWeatherViewProps) {
  return (
    <div className="hidden sm:block lg:hidden">
      <Swiper spaceBetween={10} slidesPerView={4}>
        {forecastData.map((item, index) => (
          <SwiperSlide>
            <DayWeather
              key={index}
              temp_unit={tempUnit}
              day={item.day}
              date={item.date}
              high_temp={item.high}
              low_temp={item.low}
              weather_type={item.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-2 flex flex-row items-center gap-1 animate-pulse">
        <p className="font-light">fully swipeable </p>
        <RightArrowIcon />
      </div>
    </div>
  );
}

export function WeekWeatherViewLargeScreen({ tempUnit }: WeekWeatherViewProps) {
  return (
    <div className="hidden lg:block max-w-4xl ml-auto mr-auto ">
      <div className="hidden lg:block ">
        <Swiper className="h-full w-full" spaceBetween={10} slidesPerView={7}>
          {forecastData.map((item, index) => (
            <SwiperSlide>
              <DayWeather
                key={index}
                temp_unit={tempUnit}
                day={item.day}
                date={item.date}
                high_temp={item.high}
                low_temp={item.low}
                weather_type={item.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default function WeekWeatherView({ tempUnit }: WeekWeatherViewProps) {
  return (
    <div className="mt-6 ">
      <WeekWeatherViewSmallScreen tempUnit={tempUnit} />
      <WeekWeatherViewMediumScreen tempUnit={tempUnit} />
    </div>
  );
}
