import React, {Component} from 'react';

function NameTableRow(props) {
  return (
    <tr>
      <td>{props.name}
        <i className="material-icons small right" onClick={props.handler}>delete</i>
      </td>
    </tr>
  )
}


class NameTable extends Component {

  constructor() {
    super();
    this.state = {names: [], userInput: ""};
    this.addName = this.addName.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleRemoveNameRow = this.handleRemoveNameRow.bind(this);
  }

  handleUserInput(event) {
    this.setState({userInput: event.target.value});
  }

  addName() {
    const name = this.state.userInput.trim();
    if (name.length > 0) {
      const newData = this.state.names.concat([name]);
      this.setState({names: newData, userInput: ""})
    }
  }

  handleRemoveNameRow(index) {
    const array = this.state.names;
    array.splice(index, 1);
    this.setState({names: array});
  }

  render() {
    const tableNames = this.state.names.map((name, index) =>
      <NameTableRow key={index + "_" + name} name={name}
                    handler={() => this.handleRemoveNameRow(index)}/>);

    let workerLimit = "";
    if (this.state.names.length === 10) {
      workerLimit = <p id="workerLimitText">Reached limit of workers.</p>;
    }

    return (
      <div className="container">
        <div className="row">
          {workerLimit}
          <div className="input-field col s4 m3">
            <input id="nameInput" type="text" className="validate"
                   value={this.state.userInput} onChange={this.handleUserInput}/>
            <label htmlFor="nameInput">Name</label>
          </div>
          <div className="col s2 m1" style={{marginTop: "20px"}}>
            <button className="btn waves-effect waves-light" onClick={this.addName}
                    disabled={this.state.names.length === 10}>add
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
