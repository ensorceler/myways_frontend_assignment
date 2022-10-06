interface Props {
  selectedTemp: string;
  setSelectedTemp: Function;
}

export default function SwitchTempUnitButton({
  selectedTemp,
  setSelectedTemp,
}: Props) {
  const changeTemperatureUnit = (val: string) => {
    setSelectedTemp(val);
  };
  return (
    <div
      arial-label="temperature_switch"
      className="h-20 w-14 mr-2 rounded-lg bg-white bg-opacity-20 backdrop-blur-md grid grid-rows-2 active:scale-95 lg:grid lg:grid-rows-1 lg:grid-cols-2 lg:h-10 lg:w-24 "
    >
      <div
        aria-label="celcius"
        className={`flex justify-center items-center 
            ${selectedTemp == "C" ? "bg-opacity-40 backdrop-blur-md" : ""} 
            `}
        onClick={() => changeTemperatureUnit("C")}
      >
        &#8451;
      </div>
      <div
        aria-lable="Fahrenheit"
        className={`flex justify-center items-center
            ${selectedTemp == "F" ? "bg-opacity-40 backdrop-blur-md" : ""} 
            
            `}
        onClick={() => changeTemperatureUnit("F")}
      >
        &#8457;
      </div>
    </div>
  );
}
