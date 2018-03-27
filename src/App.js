import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {response: []};
  }

  componentDidMount() {
    // this.apiCall()
    axios.get('https://python-flask-api-schedule.herokuapp.com/')
      .then(
        function (response) {
          console.log("api response data: " + response.data);
          return JSON.stringify(response.data);
        }
      )
      .then(response => this.setState({response: response}))
      .catch(function (error) {
        console.log("error: " + error);
      });
  }

  // apiCall() {
  //
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.state.response}</p>
        {/*<button onClick={this.apiCall}>Reload</button>*/}
      </div>
    );
  }
}

export default App;
