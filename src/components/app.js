import React, { Component } from 'react';
import data from '../data/data';
import DisplayTodos from './display_todos';
import Modal from './modal';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            todoItem: '',
            isModalOpen: false, 
        }
    }

    componentDidMount() {
        this.getTodoList();
        this.openModal();
    }

    getTodoList() {
        this.setState({
            todos: data,
        });
    }

    addTodo = () => {
        data.push({
            todoItem: this.state.todoItem,
        });
        this.getTodoList();

        this.setState({
            todoItem: '',
        })
    }

    openModal() {
        this.setState({ isModalOpen: true});
    }

    closeModal = () => {
        this.setState({ isModalOpen: false});
        console.log('close')
    }
    
    render() {
        console.log(this.state.isModalOpen);
        return (
            <div className="text-center container">
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal}> 
                    <h1>Modal</h1>
                    <p>Hello World</p>
                    <button onClick={this.closeModal}>Close Modal</button>
                </Modal>
                <h1 className="display-3">To Do List</h1>
                <form onSubmit={event => event.preventDefault()}>
                    <div className="input-group mb-3">
                        <input onChange={event => this.setState({todoItem: event.target.value})} type="text" className="form-control"/>
                        <div className="input-group-append">
                            <button onClick={this.addTodo} className="btn btn-outline-primary">Submit</button>
                        </div>
                    </div>
                </form>
                <DisplayTodos todos={this.state.todos}/>
            </div>
    
        )
    }
}

export default App;