const TODO_STORAGE_NAME = 'todo';

function readTodoFromLocalStorage() {
  const todoListString = localStorage.getItem(TODO_STORAGE_NAME);
  return (todoListString == null || todoListString === '') ? [] : JSON.parse(todoListString);
}

function saveTodoListToLocalStorage(todoList) {
  localStorage.setItem(TODO_STORAGE_NAME, JSON.stringify(todoList));
}

function saveTodo(todoItem) {
    return new Promise(resolve => {
      setTimeout(function() {
        let todoList = readTodoFromLocalStorage();
        todoList.push(todoItem);
        saveTodoListToLocalStorage(todoList);
        resolve();
      }, 100)
    });
  }

function getTodoList() {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(readTodoFromLocalStorage());
    }, 100);
  });
}

function editTodoById(id, text) {
  return new Promise (resolve => {
    setTimeout(function() {
      const todoList = readTodoFromLocalStorage();
      const editingList = todoList.map(
        el => el.id === id
          ? {...el, text: text} 
          : el 
        );
      saveTodoListToLocalStorage(editingList);
      resolve();
    }, 100)
  })
  
}

function removeTodoById(id) {
  return new Promise(resolve => {
    setTimeout(function() {
      let todoList = readTodoFromLocalStorage();
      const newTodoList = todoList.filter(el => el.id !== id);
      saveTodoListToLocalStorage(newTodoList);
      resolve();
    }, 100)
  });
}

export default {
  saveTodo,
  getTodoList,
  editTodoById,
  removeTodoById
}
