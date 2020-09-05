import React from 'react';
import inputClass from './inputName.module.css';
import Aux from '../Hoc/Aux';

const inputName = (props) => {
    return(
        <Aux>
            <form onSubmit={props.addList}>
                <input type="text" className={inputClass.inputStyle} value={props.valueInput} onChange={props.changeValue}/>
                <input type="submit" className={inputClass.inputButton} value="Inserisci elemento" />
            </form>
        </Aux>   
    )
}

export default inputName;