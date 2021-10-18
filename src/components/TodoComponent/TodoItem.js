import React from 'react';

const TodoItem = ({item: { textTodo }}) => {
    return <h1>{textTodo}</h1>
}

export default TodoItem;