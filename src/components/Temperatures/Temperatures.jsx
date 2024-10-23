import Variable from "../Variable/Variable";
import "./Temperatures.css";
import { useEffect, useState } from "react";

function Temperatures({ initCelsius }) {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [kelvin, setKelvin] = useState(0);
  const [isFahrenheitInput, setIsFahrenheitInput] = useState(false);
  const [isKelvinInput, setIsKelvinInput] = useState(false);

  useEffect(() => {
    setCelsius(initCelsius || 0);
  }, [initCelsius]);

  useEffect(() => {
    if (!isFahrenheitInput && !isKelvinInput) {
      setFahrenheit(celsiusToFahrenheit(celsius));
      setKelvin(celsiusToKelvin(celsius));
    }
    setIsFahrenheitInput(false);
    setIsKelvinInput(false);
  }, [celsius]);

  useEffect(() => {
    if (isFahrenheitInput) {
      setCelsius(fahrenheitToCelsius(fahrenheit));
    }
  }, [fahrenheit]);

  useEffect(() => {
    if (isKelvinInput) {
      setCelsius(kelvinToCelsius(kelvin));
    }
  }, [kelvin]);

  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }

  function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }

  return (
    <div className="temperatures-container">
      <h1 className="temperatures-title">Temperatures</h1>
      <h3 className="temperatures-display">
        <span className="badge bg-primary">{celsius.toFixed(2)} &deg;C</span>
        <span className="badge bg-primary">{fahrenheit.toFixed(2)} &deg;F</span>
        <span className="badge bg-primary">{kelvin.toFixed(2)} &deg;K</span>
      </h3>
      <div className="temperatures-variables">
        <div className="temperatures-celsius">
          <Variable name={"Celsius"} value={celsius} setValue={setCelsius} />
        </div>
        <div className="temperatures-fahrenheit">
          <Variable
            name={"Fahrenheit"}
            value={fahrenheit}
            setValue={(value) => {
              setIsFahrenheitInput(true);
              setFahrenheit(value);
            }}
          />
        </div>
        <div className="temperatures-kelvin">
          <Variable
            name={"Kelvin"}
            value={kelvin}
            setValue={(value) => {
              setIsKelvinInput(true);
              setKelvin(value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Temperatures;
