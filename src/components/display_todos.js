import React, { Component } from 'react';
import { connect } from 'react-redux';


class DisplayTodos extends Component {
    renderList() {
        const { todoList } = this.props;
        return todoList.map( (todoItem, index) => {
            return <li className="list-group-item" key={index}>{todoItem.todo}</li>
        });
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        todoList: state.todoList
    }
}

export default connect(mapStateToProps)(DisplayTodos);