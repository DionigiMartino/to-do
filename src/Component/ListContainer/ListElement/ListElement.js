import React from 'react';

const ListElement = props => {
    let list = props.ListMap;
    let listMap = list.map(el => <li key={el.id} name={el.id}>{el.testo}</li>)

    return(
        {listMap}
    )
}

export default ListElement