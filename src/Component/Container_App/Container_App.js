import React from 'react';
import Aux from '../Hoc/Aux';
import container from './Container_App.module.css';

class Container_App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listCont: []
        }
        this.inserimentoValore = this.inserimentoValore.bind(this);
    }

    createItem(item){
        return (
            <li key={item.key} name={item.key} className={container.ListContainerElement}>{item.testo}</li>
        )
    }

    inserimentoValore(e){
        if(this._inputElement !== ""){
            let newItem = {
                key: Date.now(),
                testo: this._inputElement.value
            }

            this.setState(prevState => {
                return {
                    listCont: prevState.listCont.concat(newItem)
                }
            })

            this._inputElement.value = "";
        }

        e.preventDefault(); 
    }

    render(){
        let ListMap = this.state.listCont;
        let list = ListMap.map(this.createItem)

        return(
            <Aux>
                <div className={container.whole_Container}>
                    
                <form onSubmit={this.inserimentoValore}>
                    <input type="text" className={container.inputStyle} ref={(a) => this._inputElement = a}/>
                    <input type="submit" className={container.inputButton} value="Inserisci elemento" />
                </form>
                </div>

                <ul className={container.ListContainer}>
                    {list}
                </ul>
            </Aux>
        )
    }
}


export default Container_App;