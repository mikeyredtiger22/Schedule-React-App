import React, {Component} from 'react';

class ScheduleTable extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    let names = [];
    for (let i=0; i<10; i++) {
      names[i] = "worker " + (i+1);
    }

    const tableNames = [];
    for (let i=0; i<10; i++) {
      tableNames.push(<td>{names[i]}</td>);
    }

    const row1 =
      <tr>
        <th>AM</th>
        {tableNames.slice(0, 5)}
      </tr>;

    const row2 =
      <tr>
        <th>PM</th>
        {tableNames.slice(5)}
      </tr>;
    return (
      <table className="bordered responsive-table">
        <thead>
        <tr>
          <th>.{this.props.data}</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
        </tr>
        </thead>
        <tbody>
        {row1}
        {row2}
        </tbody>
      </table>
    )
  }
}

export default ScheduleTable;