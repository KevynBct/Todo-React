import React, { Component } from 'react';
import '../css/App.css';
import PropTypes from 'prop-types';
import {TodoItem} from './TodoItem';
import {connect} from 'react-redux';
import {loadTodos} from '../redux/store/todos.action';

class TodoList extends Component {

  componentDidMount() {
    this.props.loadTodos();
  }

  displayTrainings () {
    if (this.props.loading) {
      return <p>Loading ....</p>
    }

    return this.props.todos.map((todo) => <TodoItem key={todo.title} title={todo.title} isDone={todo.isDone}/>);
  }

  render() {
    return (
      <ul>
        {this.displayTrainings()}
      </ul>
    );
  }
}

TodoList.propTypes = {
  loadTodos: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      isDone : PropTypes.bool.isRequired
    })
  ).isRequired,
}

const mapStateToProps = state => ({
  todos: state.todos.list,
  loading: state.todos.loading,
});

const mapDispatchToProps = dispatch => ({
  loadTodos: () => dispatch(loadTodos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)