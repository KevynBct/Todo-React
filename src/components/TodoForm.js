import React, { Component } from 'react';
import '../css/App.css';
import {TodoContext} from './TodoContext';

export class TodoForm extends Component {
    constructor (props){
        super(props);

        this.addTodo = props.addTodo;

        this.state = {
            todo : ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    addTodo () {
    }


    handleInputChange(event) {
        this.setState({
            todo : event.target.value
        }); 
    }

    render() {
        return (
            <TodoContext.Consumer>
            {
                ({addTodo}) => {
                    return (
                        <div>
                        <form>
                            <input type="text" name="todo" placeholder="Ajouter tâche" value={this.state.todo} onChange={this.handleInputChange} />
                        </form>
                        <button onClick={() => addTodo(this.state.todo)}>Ajouter</button>
                        </div>
                    )
                }
            }
            </TodoContext.Consumer>
        );
    }
}