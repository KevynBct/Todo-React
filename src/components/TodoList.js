import React, { Component } from 'react';
import '../css/App.css';
import {TodoItem} from './TodoItem';

export class TodoList extends Component {
  constructor (props){
    super(props);
  }

  render() {
    
    const listItems = this.props.todoList.map((todo) =>
      <TodoItem key={todo.title} title={todo.title} isDone={todo.isDone}/>
    );

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}