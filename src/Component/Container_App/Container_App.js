import React from 'react';
import InputName from '../inputName/inputName';
import Aux from '../Hoc/Aux';
import container from './Container_App.module.css';
import List from '../ListContainer/ListContainer';

class Container_App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listCont: ['Ciao', 'Come va?'],
            valueInputCheck: '',
            clicked: false
        }

        this.inserimentoValore = this.inserimentoValore.bind(this);
        this.changeInputValue = this.changeInputValue.bind(this);
    }

    inserimentoValore(e){
        let listCont = this.state.listCont;
        let clicked = this.state.clicked;
        e.preventDefault();
        this.setState({listCont: listCont.push(this.state.valueInputCheck), clicked: !clicked})
        console.log(listCont)
    }

    changeInputValue(e){
        this.setState({valueInputCheck: e.target.value})
        console.log(this.state.valueInputCheck)
    }

    render(){
        let Lista;
        if(this.state.listCont.length > 0){
            Lista = (
                <List ListMap={this.state.listCont} /> 
            )
        }

        return(
            <Aux>
                <div className={container.whole_Container}>
                    <InputName addList={this.inserimentoValore} valueInput={this.state.valueInputCheck} changeValue={this.changeInputValue} />
                    {Lista}
                </div>
            </Aux>
        )
    }
}


export default Container_App;