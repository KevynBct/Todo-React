import React, {Component} from 'react';
import {TodoList} from './TodoList.js'
import {TodoForm} from './TodoForm'

export class TodoContainer extends Component {
    constructor(props) {
        super(props);

        this.addTodo = this.addTodo.bind(this);

        this.state = {
            todoList : []
        }
    }

    static getDerivedStateFromProps (props, state) {  
        return {
            todoList : state.todoList
        }
    }

    addTodo(value){
        const todo = {
            title : value,
            isDone : false
        }
        this.setState(prevState => ({
            todoList: [...prevState.todoList, todo]
          }))
    }

    render() {
        return (
            <div>
                <TodoForm addTodo={this.addTodo}/>
                <TodoList todoList={this.state.todoList}/>
                {this.props.children}
            </div>
        );
    }
}