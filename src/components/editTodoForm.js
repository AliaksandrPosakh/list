import React, {Component} from 'react';
import {connect} from 'react-redux';
import *as actions from '../actions/actions';
class EditTodo extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            editText: props.task.text
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({editText: event.target.value});
    }

    onSaveButtonClick = () => {
        const{editTodo, closeEditForm} = this.props;
        editTodo(this.props.task.id, this.state.editText);
        closeEditForm();
    }

    render() {
        return (
            <p className = 'editForm'>
                <input onChange={this.handleChange} value={this.state.editText} />
                <button onClick={this.onSaveButtonClick}>save</button>
            </p>
        )
        
    }
    
};

const mapStateToProps = state => ({
    todos: state.listOfTodo,
    editForm: state.isOpen,
  });
  
  export default connect(mapStateToProps, {
    closeEditForm: actions.closeEditForm,
    editTodo: actions.editTodo,
  })(EditTodo);
