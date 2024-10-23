import { useState } from 'react'
import './Counter.css'

function Counter(props) {

    
    const [value, setValue] = useState(props.value || 0);

   
    const increment = () => setValue(value + 1);
    const decrement = () => setValue(value - 1);


    return (
        <div>
            <div className='counter-name'>
            <h3 className='title'>{props.name || 'Counter'}</h3>
            <button className='btn btn-danger' onClick={decrement}>-</button>
                <span className='counter-value'>&nbsp;&nbsp;{value}&nbsp;&nbsp;</span>
                <button className='btn btn-success counter-button' onClick={increment}>  + </button>
            </div>
        </div>
    );
}

export default Counter;