import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import DisplayTodos from './display_todos';


class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="display-3 text-center">To Do List</h1>
                <DisplayTodos/>
            </div>
        )
    }
}

export default App;