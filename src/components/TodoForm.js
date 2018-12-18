import React, { Component } from 'react';
import '../css/App.css';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {addTodo} from '../redux/store/todos.action';

class TodoForm extends Component {
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

    handleSubmit(event,addTodo){
        addTodo(this.state.todo);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e, this.props.addTodo)} >
                <input type="text" name="todo" placeholder="Ajouter tâche" value={this.state.todo} onChange={this.handleInputChange} />
                <input type="submit" value="Submit" id="submitButton" />
            </form>
        );
    }
}

TodoForm.propTypes = {
    addTraining: PropTypes.func.isRequired
}

const mapStateToProps = state => ({});
  
  const mapDispatchToProps = dispatch => ({
    addTodo: title => dispatch(addTodo(title)),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)