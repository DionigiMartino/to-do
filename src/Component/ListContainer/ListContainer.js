import React from 'react';
import ListStyle from './ListContainer.module.css';

import InputName from '../inputName/inputName';
import ListElement from '../ListContainer/ListElement/ListElement'
import Aux from '../Hoc/Aux'

const ListToDo = props => {
    return (
        <Aux>
            <ul className={ListStyle.ListContainer}>
                <ListElement ListMap={props.ListMap} />
            </ul>
            <InputName addList={props.inserimentoValore} valueInput={props.valueInputCheck} changeValue={props.changeInputValue} />
        </Aux>
    )
}

export default ListToDo;