import React from 'react';
import InputName from '../inputName/inputName';
import Aux from '../Hoc/Aux';
import container from './Container_App.module.css';
import List from '../ListContainer/ListContainer';

class Container_App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listCont: []
        }
    }

    inserimentoValore(i){
        const listCont = this.state.listCont;
        this.setState({listCont: listCont.push('Ciao')});
        console.log(listCont)
    }

    render(){
        return(
            <Aux>
                <div className={container.whole_Container}>
                    <InputName addList={() => this.inserimentoValore()} />
                    <List ListMap={this.state.listCont} />
                </div>
            </Aux>
        )
    }
}


export default Container_App;