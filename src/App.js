import React, {Component} from 'react';
import axios from "axios";
import './App.css';
import NameTable from "./Components/NameTable";
import ScheduleTable from "./Components/ScheduleTable"

class App extends Component {
  constructor() {
    super();
    this.state = {response: null, names: []};
    this.apiCall = this.apiCall.bind(this);
    this.handleNewName = this.handleNewName.bind(this);
    this.handleRemoveName = this.handleRemoveName.bind(this);
  }

  componentDidMount() {
    this.apiCall()
  }

  apiCall() {
    axios.get('https://python-flask-api-schedule.herokuapp.com/generate/2')
      .then(
        function (response) {
          console.log("api response data: " + response.data);
          return response.data;
        }
      )
      .then(response => this.setState({response: response}))
      .catch(function (error) {
        console.log("error: " + error);
      });
  }

  handleNewName(name) {
    const newData = this.state.names.concat([name]);
    this.setState({names: newData, userInput: ""})
  }

  handleRemoveName(index) {
    const array = this.state.names.slice();
    array.splice(index, 1);
    this.setState({names: array});
  }

  render() {
    let scheduleTable = (!this.state.response) ? null :
      <ScheduleTable data={this.state.response} names={this.state.names}/>;
    return (
      <div className="appContainer">
        <div className="row">
          <div className="col s12 m6 l4">
            <NameTable names={this.state.names}
                       handleNewName={this.handleNewName}
                       handleRemoveName={this.handleRemoveName}/>
          </div>
          <div className="col s12 m6 l8">
            <button onClick={this.apiCall}>Reload</button>
          </div>
          <div className="col s12 m6 l8">
            {scheduleTable}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
