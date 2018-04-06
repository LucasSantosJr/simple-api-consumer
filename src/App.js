import React, { Component } from 'react';
import './App.css';
import HttpMethods from './components/HttpMethods'
import JsonFields from './components/JsonFields'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HttpMethods/>
        <JsonFields/>
      </div>
    );
  }
}

export default App;
