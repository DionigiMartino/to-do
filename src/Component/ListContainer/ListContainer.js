import React, { Component } from 'react';
import ListStyle from './ListContainer.module.css';

class ListToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            ListMap: this.props.ListMap,
            clicked: this.props.clicked
        }
    }

    componentDidMount(){
        console.log('mounted')
    }

    componentDidUpdate(){
        if(this.state.clicked){
            this.setState({
                ListMap: this.props.ListMap
            })
        }
    }

    render(){
        let list = this.state.ListMap;
        let listInsert = list.map(el => {
            return <li key={el.toString()}>{el}</li>
        })

        return (
            <ul className={ListStyle.ListContainer}>
                {listInsert}
            </ul>
        )
    }
}

export default ListToDo;