import React from 'react';
import inputClass from './inputName.module.css';

function inputName(props) {
    return(
        <input name="Nome" className={inputClass.inputContainer} />
    )
}

export default inputName;