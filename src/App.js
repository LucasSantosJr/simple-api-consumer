import React, { Component } from 'react';
import HttpMethods from './components/HttpMethods'
import JSONFields from './components/JSONFields'
import Request from './components/Request'
import MyURL from './components/MyURL'
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {url: '', method: 'GET', json:  '', location: '/'}
    this.updateURL = this.updateURL.bind(this)
    this.updateMethod = this.updateMethod.bind(this)
    this.updateJSON = this.updateJSON.bind(this)
  }

  updateURL (url) {
    this.setState({url: url})
  }

  updateMethod (method) {
    this.setState({method: method})
  }

  updateJSON (json) {
    this.setState({json: json})
  }

  render() {
    return (
      <div className="App">
        <HttpMethods method={this.updateMethod}/>
        <MyURL method={this.updateURL}/>
        <JSONFields method={this.updateJSON}/>
        <Request settings={this.state}/>
      </div>
    );
  }
}

export default App;
