import React, {Component} from 'react';
import Item from './todo-item';
import List from './todo-list';
import FormToAdd from './FormToAdd';
import EditTodo from './editTodo';
import {connect} from 'react-redux';
import *as actions from './actions';


class App extends Component {
  
  renderTaskBlock() {
    const {removeTodo, openEditForm} = this.props;
    if(this.props.editForm) { 
        const task = this.props.todos.find(el => el.id === this.props.editedTaskId);
        return task ? <EditTodo task={task}></EditTodo> : null
    }
    else
        {
        return <List>
          {
            this.props.todos.map(item => {
                return <Item
                  editTodoText={openEditForm.bind(this, item.id)}
                  key={item.id}
                  item={item}
                  removeTodo={removeTodo.bind(this, item.id)}
                  >
                  </Item>
              })
                
          }
        </List>
      }
      
    }
    
  render() {
    return (
      <div>
          <FormToAdd></FormToAdd>
          {this.renderTaskBlock()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.listOfTodo,
  editForm: state.isOpen,
  editedTaskId: state.editedTaskId,
});

export default connect(mapStateToProps, {
  removeTodo: actions.removeTodo,
  openEditForm: actions.openEditForm,
})(App);