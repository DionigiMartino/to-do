import React from 'react';
import InputName from '../inputName/inputName';
import Aux from '../Hoc/Aux';

class Container_App extends React.Component {
    render(){
        return(
            <Aux>
                <InputName />
                <InputName />
            </Aux>
        )
    }
}

export default Container_App;