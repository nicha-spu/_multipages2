import React, { useState, useEffect } from "react";
import "./Calculater.css";
function Calculater() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearAll = () => {
    setInput('');
    setResult(0);
  };

  const clearEntry = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      // Replace eval with a safer alternative or parse the input string.
      const evaluatedResult = eval(input.replace('÷', '/').replace('×', '*'));
      setResult(evaluatedResult);
      setInput('');
    } catch (error) {
      setResult('Error');
      setInput('');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div>{input || result}</div>
      </div>
      <div className="buttons">
        <button onClick={clearAll} className="btn grey">AC</button>
        <button onClick={clearEntry} className="btn grey">C</button>
        <button onClick={() => handleClick('%')} className="btn grey">%</button>
        <button onClick={() => handleClick('÷')} className="btn orange">÷</button>

        <button onClick={() => handleClick('7')} className="btn">7</button>
        <button onClick={() => handleClick('8')} className="btn">8</button>
        <button onClick={() => handleClick('9')} className="btn">9</button>
        <button onClick={() => handleClick('*')} className="btn orange">×</button>

        <button onClick={() => handleClick('4')} className="btn">4</button>
        <button onClick={() => handleClick('5')} className="btn">5</button>
        <button onClick={() => handleClick('6')} className="btn">6</button>
        <button onClick={() => handleClick('-')} className="btn orange">-</button>

        <button onClick={() => handleClick('1')} className="btn">1</button>
        <button onClick={() => handleClick('2')} className="btn">2</button>
        <button onClick={() => handleClick('3')} className="btn">3</button>
        <button onClick={() => handleClick('+')} className="btn orange">+</button>

        <button onClick={() => handleClick('0')} className="btn">0</button>
        <button onClick={() => handleClick('00')} className="btn">00</button>
        <button onClick={() => handleClick('.')} className="btn">.</button>
        <button onClick={calculate} className="btn orange">=</button>
      </div>
    </div>
  );
}

export default Calculater;