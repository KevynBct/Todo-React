import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import {TodoContainer} from './TodoContainer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {createLogger} from 'redux-logger';
import {todosReducer} from '../redux/store/todos.reducer';
import thunk from 'redux-thunk';

// Assemblage des différents reducers d'une application
const reducers = combineReducers({
  todos: todosReducer,
});

const logger = createLogger({
  level: 'log',
});
  // Création du store
const store = createStore(reducers, applyMiddleware(thunk, logger));


class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Provider store={store}>
            <TodoContainer>
            </TodoContainer>
          </Provider>
        </header>
      </div>
    );
  }
}

export default App;
