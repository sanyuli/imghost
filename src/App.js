import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
