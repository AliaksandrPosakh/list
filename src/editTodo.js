import React, {Component} from 'react';
import {connect} from 'react-redux';
import *as actions from './actions';
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
        const{editTodo} = this.props;
        editTodo(this.props.task.id, this.state.editText);
        this.props.saveEditText();
    }

    render() {
        return (
            <p>
                <input onChange={this.handleChange} value={this.state.editText} />
                <button onClick={this.onSaveButtonClick}>save</button>
            </p>
        )
        
    }
    
};
const mapStateToProps = state => ({
    todos: state
  });
  
  
  
  export default connect(mapStateToProps, {
    addTodo: actions.addTodo,
    editTodo: actions.editTodo,
    removeTodo: actions.removeTodo
  })(EditTodo);
// export default EditTodo;