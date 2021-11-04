import React from 'react';

const TodoItem = ({item: { id, text }}) => {
    return <div id={id}>{text}<span>❌</span></div>
}

export default TodoItem;