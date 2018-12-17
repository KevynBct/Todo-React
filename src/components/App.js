import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import {TodoContainer} from './TodoContainer';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TodoContainer>
          </TodoContainer>
        </header>
      </div>
    );
  }
}

export default App;
