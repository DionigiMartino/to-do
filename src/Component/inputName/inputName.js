import React from 'react';
import inputClass from './inputName.module.css';
import Aux from '../Hoc/Aux';

const inputName = props => {
    return(
        <Aux>
            <input className={inputClass.inputStyle} defaultValue='Inserisci' />
            <button className={inputClass.inputButton} onClick={props.addList}>Inserisci Elemento</button>
        </Aux>   
    )
}

export default inputName;