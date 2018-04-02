import React, {Component} from 'react';

function NameTableRow(props) {
  return (
    <tr>
      <td>{props.name}
        <i className="material-icons small right" onClick={props.handleRemoveName}>delete</i>
      </td>
    </tr>
  )
}


class NameTable extends Component {

  constructor() {
    super();
    this.state = {userInput: ""};
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleNewName = this.handleNewName.bind(this);
  }

  handleUserInput(event) {
    this.setState({userInput: event.target.value});
  }

  handleNewName() {
    this.props.handleNewName(this.state.userInput);
    this.setState({userInput: ""});
  }

  render() {
    const tableNames = [];
    this.props.names.forEach((name, index) => tableNames.push(
      <NameTableRow key={index + "_" + name} name={name}
                    handleRemoveName={() => this.props.handleRemoveName(index)}/>));

    let workerLimit = "";
    if (this.props.names.length === 10) {
      workerLimit = <p className="workerLimitText">Reached limit of workers.</p>;
    }

    return (
      <div>
        <div className="row">
          <h4>Add Names:</h4>
          {workerLimit}
          <div className="input-field col s7">
            <input id="nameInput" type="text" className="validate"
                   value={this.state.userInput}
                   onChange={this.handleUserInput}/>
            <label htmlFor="nameInput">Name</label>
          </div>
          <div className="col s5 m5 l5" style={{marginTop: "20px"}}>
            <button className="addNameButton btn waves-effect waves-light"
                    onClick={this.handleNewName}
                    disabled={this.props.names.length === 10}>add
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
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
