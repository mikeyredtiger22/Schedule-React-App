import React, {Component} from 'react';

class NameTable extends Component {

  constructor() {
    super();
    this.state = {names: [], userInput: ""};
    this.addName = this.addName.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(event) {
    this.setState({userInput: event.target.value});
  }

  addName() {
    const newData = this.state.names.concat([this.state.userInput]);
    this.setState({names: newData, userInput: ""})
  }

  render() {
    const tableNames = this.state.names.map(
      (name, i) => <tr key={i}><td>{name}</td></tr> );

    return (
      <div className="container">
        <div className="row">
          <div className="input-field col s4 m3">
            <input id="nameInput" type="text" className="validate"
                   value={this.state.userInput} onChange={this.handleUserInput}/>
            <label htmlFor="nameInput">Name</label>
          </div>
          <div className="col s4 m3" style={{marginTop: "20px"}}>
            <button className="btn waves-effect waves-light" onClick={this.addName}>
              <i className="material-icons left">add</i>add
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col s4 m3">
            <table className="bordered highlight green accent-1 z-depth-3">
              <thead>
              <tr>
                <th>Workers:</th>
              </tr>
              </thead>

              <tbody>
              {tableNames}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default NameTable;
