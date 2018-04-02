import React, {Component} from 'react';
import axios from "axios";
import './App.css';
import NameTable from "./Components/NameTable";
import ScheduleTable from "./Components/ScheduleTable"
import Wheel from "./Components/Wheel";

class App extends Component {
  constructor() {
    super();
    this.state = {response: null, names: []};
    this.apiCall = this.apiCall.bind(this);
    this.handleReload = this.handleReload.bind(this);
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
        console.log("api call error: " + error);
      });
  }

  handleReload() {
    this.apiCall()
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
    let scheduleTable1, scheduleTable2 = "";
    if (this.state.response) {
      scheduleTable1 = <ScheduleTable data={this.state.response[0]}
                                      names={this.state.names} week={1}/>;
      scheduleTable2 = <ScheduleTable data={this.state.response[1]}
                                      names={this.state.names} week={2}/>;
    }
    return (
      <div className="appContainer">
        <div className="row">
          <div className="col s12 m6 l4">
            <NameTable names={this.state.names}
                       handleNewName={this.handleNewName}
                       handleRemoveName={this.handleRemoveName}/>
          </div>
          <div className="col s12 m6 l8">
            <Wheel handleReload={this.handleReload}/>
          </div>
          <div className="col s12 m6 l8 scheduleContainer">
            {scheduleTable1}
          </div>
          <div className="col s12 m6 l8 scheduleContainer">
            {scheduleTable2}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
