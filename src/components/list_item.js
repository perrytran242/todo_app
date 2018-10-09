import React from 'react';

export default props => {
    return (
        <li className="list-group-item">
            {props.todos}
        </li>
    )
}