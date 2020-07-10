import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {

    //const saludo = 'Hola mundo';
    //console.log(props)

    return (
        <>
            <h1>{saludo}</h1>
            {/*<h1>{ JSON.stringify( saludo, null, 3 ) }</h1>*/}
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.prototype = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;