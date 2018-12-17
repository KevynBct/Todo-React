import React, { Component } from 'react';
import '../css/App.css';
import {TodoContainer} from './TodoContainer';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <TodoContainer>
          </TodoContainer>
        </header>
      </div>
    );
  }
}

export default App;
