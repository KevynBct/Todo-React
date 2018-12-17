import React, { Component } from 'react';
import '../css/App.css';
import {TodoItem} from './TodoItem';
import {TodoContext} from './TodoContext';

export class TodoList extends Component {

  render() {
    return (
        <TodoContext.Consumer>
        {
            ({todoList}) => {
                 const listItems = todoList.map((todo) =>
                  <TodoItem key={todo.title} title={todo.title} isDone={todo.isDone}/>
                );
                return (
                  <ul>
                    {listItems}
                  </ul>
                )
            }
        }
        </TodoContext.Consumer>
    );
}

}