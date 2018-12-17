import React, { Component } from 'react';
import '../css/App.css';

export class TodoForm extends Component {
    constructor (props){
        super(props);

        this.addTodo = props.addTodo;

        this.state = {
            todo : ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event) {
        this.setState({
            todo : event.target.value
        }); 
    }

    handleSubmit(event){
        this.props.addTodo(this.state.todo)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="text" name="todo" placeholder="Ajouter tâche" value={this.state.todo} onChange={this.handleInputChange} />
                <input type="submit" value="Submit" id="submitButton" />
            </form>
        );
    }
}