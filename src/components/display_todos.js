import React from 'react';
import ListItem from './list_item';

export default props => {
    const todos = props.todos.map( (item, index) => { 
        return <ListItem key={index} todos={item.todoItem}/>
    });
    return (
        <div className="list-group">
            {todos}
        </div>
    )
}