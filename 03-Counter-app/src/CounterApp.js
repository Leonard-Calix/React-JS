import React, { useState } from 'react';
import PropTypes from 'prop-types';

// rafcp

const CounterApp = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState(value);

    console.log(counter);

    // handleAdd
    const handelAdd = () =>{
        //setCounter( counter + 1 );
        setCounter( (c) =>  c + 1 );
    }

    const handelRemove = () => setCounter( counter - 1 );

    const handelReset = () => setCounter( value );
    


    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handelAdd }>+1</button>
            <button onClick={ handelReset }>Reset</button>
            <button onClick={ handelRemove }>-1</button>

        </>
    );
}

CounterApp.prototype = {
    value: PropTypes.number
}

export default CounterApp;