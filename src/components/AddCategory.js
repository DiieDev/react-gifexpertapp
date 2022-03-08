import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [ inputValue, setInputValue ] = useState('Hola Mundo');

    const handleInput = (e) => {
        setInputValue( e.target.value );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( ( c ) => [inputValue, ...c]);
            setInputValue('');
        }        

    };

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInput }
            />
        </form>
    )

};

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
};