import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import NameTable from "./Components/NameTable";

class App extends Component {
  constructor() {
    super();
    this.state = {response: []};
    this.apiCall = this.apiCall.bind(this);
  }

  componentDidMount() {
    this.apiCall()
  }

  apiCall() {
    axios.get('https://python-flask-api-schedule.herokuapp.com/generate/2')
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
        <button onClick={this.apiCall}>Reload</button>
        <NameTable/>
      </div>
    );
  }
}

export default App;
