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
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    addTextInInput() {
        this.props.addTodo(this.state.text);
        this.setState({text: ''});
    }

    render() {
        
        return (
            <div>
                <input type='text' onChange={this.handleChange} value={this.state.text} placeholder='Add...' />
                <button onClick={this.addTextInInput.bind(this)} >Add</button>
            </div>
        )
    }
}
    
const mapStateToProps = state => ({
    todos: state,
});



export default connect(mapStateToProps, {
    addTodo: actions.addTodo,
})(FormToAdd);