import { useState, useEffect } from 'react';
import './Timer.css';
function Timer({name, value}) {
const [running, setRunning] = useState(false);
const [seconds, setSeconds] = useState(0);

useEffect(() => {
    let interval = null;
    if (running) {
    interval = setInterval(() => setSeconds(seconds+1),1000);
    }

    return () => {
    if (interval) {
        clearInterval(interval);
    }
    };
}, [running, seconds]);

useEffect(() => {
    setSeconds(value || 0);
},[value]);

function secondsToDisplay(seconds) {
    const minutes_secodes = 60;
    const hours_secodes = 60 * minutes_secodes;
    const days_secodes = 24 * hours_secodes;

    const days = Math.floor(seconds / days_secodes);
    const hours = Math.floor((seconds % days_secodes) / hours_secodes);
    const minutes = Math.floor((seconds % hours_secodes) / minutes_secodes);
    const secs = seconds % minutes_secodes;

    if (days > 0) {
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
    } else if (hours > 0) {
    return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
    return `${minutes}m ${secs}s`;
    } else {
    return `${secs}s`;
    }
}

function resetClick(){
    setRunning(false);
    setSeconds(value || 0);
}

return (
    <div className='timer'>
    <h3 className='timer-title'>{name || 'Timer'}</h3>
    <p><input type="text" readOnly={true}
        placeholder='1d 23h 10m 0s' className='timer-display' value={secondsToDisplay(seconds)} /></p>
    <div className='timer-buttons'>
        <button className='btn btn-danger' onClick={resetClick}>Reset</button>
        <button className={'btn ' + (running ? 'btn-warning' : 'btn-success')} onClick={() => {setRunning(!running);}}>
        {running ? 'Pause' : 'Run'}
        </button>
    </div>
    </div>
);
}

export default Timer;