import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ScheduleTable extends Component {

  render() {
    let names = [];
    let namesGivenLength = 0;
    if (this.props.names) {
      namesGivenLength = this.props.names.length;
    }
    let data = this.props.data;

    for (let i=0; i<namesGivenLength; i++) {
      names[i] = this.props.names[i];
    }
    //substitute names if given less than 10
    for (let i=namesGivenLength; i<10; i++) {
      names[i] = "worker " + (i+1);
    }

    const tableNames = [];
    for (let i=0; i<10; i++) {
      let pos = data[i];
      tableNames.push(<td key={i+"_"+names[i]}>{names[pos-1]}</td>);
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
      <table className="schedule bordered responsive-table green accent-1 z-depth-3">
        <thead>
        <tr>
          <th>Week {this.props.week}</th>
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

ScheduleTable.propTypes = {
  data: PropTypes.array.isRequired,
  names : PropTypes.array,
  week: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default ScheduleTable;