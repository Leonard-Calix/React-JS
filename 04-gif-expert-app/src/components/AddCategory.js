import React, { useState } from 'react';
import PropTypes  from 'prop-types'

const AddCategory = ({ setCategorias }) => {

    const [imputValue, setImputValue] = useState('');

    const handleImputChange = (e) => {
        //console.log(e.target.value);
        setImputValue(e.target.value);
    }

    const handleSudmit = (e) => {
        e.preventDefault();

        if (imputValue.trim().length > 2) {
            setCategorias(cat => [imputValue,...cat]);
            setImputValue('');
        }
    }

    return (

        <form onSubmit={handleSudmit} >
            <input type="text" value={imputValue} onChange={handleImputChange} />
        </form>
    )
}

AddCategory.prototype = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory;