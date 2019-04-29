import React,{Component} from 'react';
import {connect} from 'react-redux';
import *as actions from './actions';

class FormToAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.addNewTodo = this.addNewTodo.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    addNewTodo() {
        const {addTodo} = this.props;
        addTodo(this.state.text);
        this.setState({text: ''});
    }

    render() {        
        return (
            <header>
                <input type='text' onChange={this.handleChange} value={this.state.text} placeholder='Add...' />
                <button onClick={this.addNewTodo} >Add</button>
            </header>
        )
    }
}
    
const mapStateToProps = state => ({
    todos: state.listOfTodo,
});



export default connect(mapStateToProps,{
    addTodo: actions.addTodo,
})(FormToAdd);
