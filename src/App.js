import React, { Component } from 'react';
import axios from "axios";
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
      <div className="appContainer">
        <div className="row">
          <div className="col s12 m6 l4">
            <NameTable/>
          </div>
          <div className="col s12 m6 l8">
            <p>{this.state.response}</p>
            <button onClick={this.apiCall}>Reload</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
