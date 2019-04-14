import React, {Component} from 'react';
import Item from './todo-item';
import List from './todo-list';
import FormToAdd from './FormToAdd';
import EditTodo from './editTodo';
import {connect} from 'react-redux';
import *as actions from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      todoList: [],
      editedTaskId: null
    };
    this.editTodoText = this.editTodoText.bind(this);
    this.saveEditText = this.saveEditText.bind(this);
  }

  // componentDidMount() {
  //   if (localStorage.getItem('todo') != undefined) {
  //     const todoList = JSON.parse(localStorage.getItem('todo'));
  //     this.setState({todoList});
  //   }
  // }

  saveEditText() {
    this.setState({isOpen: false});
  }

  editTodoText(taskId) {
    this.setState({isOpen: true, editedTaskId: taskId});
  }

  renderTaskBlock() {
    const {editTodo, removeTodo} = this.props;
    
    if(this.state.isOpen) {
      const task = this.props.todos.find(el => el.id === this.state.editedTaskId);
      console.log(task);
      return task ? <EditTodo task={task} saveEditText={this.saveEditText} editTask={editTodo.bind(this)}></EditTodo> : null
    } else {
      return <List>
        {
          this.props.todos.map(item => {
            return <Item
              editTodoText={this.editTodoText.bind(this, item.id)}
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
          <FormToAdd
          ></FormToAdd>
          {this.renderTaskBlock()}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps, {
  addTodo: actions.addTodo,
  editTodo: actions.editTodo,
  removeTodo: actions.removeTodo
})(App);
// export default App;