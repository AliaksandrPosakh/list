import React, {Component} from 'react';
import Item from './components/todo-item';
import List from './components/todo-list';
import ToAddForm from './components/todoAddForm';
import EditTodo from './components/editTodoForm';
import {connect} from 'react-redux';
import *as actions from './actions/actions';
import { log } from 'util';

class App extends Component {
  componentDidMount() {
    const {getData} = this.props;
    getData();
  }
  renderTaskBlock() {
    const {removeTodo, openEditForm} = this.props;
    if(this.props.editForm) { 
        const task = this.props.todos.find(el => el.id === this.props.editedTaskId);
        return task ? <EditTodo task={task}></EditTodo> : null
    }
    else
    return this.props.todos.length > 0 ?
        <List>
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
       : null
      
    }
    
  render() {
    console.log('render app', this.props);  
    return (
      <div>
          <ToAddForm
          ></ToAddForm>
          {this.renderTaskBlock()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todoListReducer.listOfTodo,
  editForm: state.todoListReducer.isOpen,
  editedTaskId: state.todoListReducer.editedTaskId,
  usersList: state.usersList,
});

export default connect(mapStateToProps, {
  removeTodo: actions.removeTodo,
  openEditForm: actions.openEditForm,
  getData: actions.getData
})(App);