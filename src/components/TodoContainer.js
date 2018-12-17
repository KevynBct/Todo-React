import React, {Component} from 'react';
import {TodoList} from './TodoList.js'
import {TodoForm} from './TodoForm'
import {TodoContext} from './TodoContext';

export class TodoContainer extends Component {
    constructor(props) {
        super(props);

        this.addTodo = (title) => {
            const todo = {title : title, isDone : false}
            
            this.setState((prevState) => ({
                todoList: [...prevState.todoList, todo]
            }));
        }

        this.state = {
            todoList : [],
            addTodo : this.addTodo,
        }

        this.clearTodoList = this.clearTodoList.bind(this);
    }

    clearTodoList(){
        this.setState({
            todoList: []
        });
    }

    render() {
        return (
            <div>
                <TodoContext.Provider value={this.state}>
                    <TodoForm />
                    <button onClick={this.clearTodoList}>Réinitialiser</button>
                    <TodoList />
                    {this.props.children}
                </TodoContext.Provider>
                
            </div>
        )
    }
}