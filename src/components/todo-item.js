import React from 'react';
const Item = (props) => (
        <div className = 'item'>
            <input type="checkbox" />
            <span>{props.item.text}</span>
            <button onClick={props.editTodoText}>edit</button>
            <button className = 'close' onClick={props.removeTodo}>x</button><br/>  
        </div>
)

export default Item;