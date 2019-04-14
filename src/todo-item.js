import React from 'react';
const Item = (props) => (
        <p className = 'item'>
            <input type="checkbox" />
            <span>{props.item.text}</span>
            <button onClick={props.editTodoText}>edit</button>
            <button onClick={props.removeTodo}>x</button><br/>
        </p>
)
            

    
// const mapStateToProps = state => ({
//     todos: state
// });
// export default connect(mapStateToProps, {
//     addTodo: actions.addTodo,
// })(Item);
export default Item;