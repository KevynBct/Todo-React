import React, {Component} from 'react';
import TodoList from './TodoList.js'
import TodoForm from './TodoForm'

export class TodoContainer extends Component {

    render() {
        return (
            <div>
                <TodoForm />
                <TodoList />
                {this.props.children}
            </div>
        );
    }
}