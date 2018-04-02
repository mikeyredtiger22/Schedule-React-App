import React, {Component} from 'react';
import reload_icon from "./reload_icon.png";
import PropTypes from 'prop-types';

class Wheel extends Component {
  constructor(props) {
    super(props);
    this.state = {rotating: false};
    this.handleReload = this.handleReload.bind(this);
  }

  handleReload() {
    if (!this.state.rotating) {
      this.setState({rotating: true});
      if (this.props.handleReload) {
        this.props.handleReload();
      }
      setTimeout(() => this.setState({rotating: false}), 2000);
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <h4>Click to generate new schedule:</h4>
        </div>
        <div className="col">
          <img alt="Reload Button"
               src={reload_icon}
               onClick={this.handleReload}
               className={this.state.rotating ? "rotate" : ""}/>
        </div>
      </div>
    );
  }
}

Wheel.propTypes = {
  handleReload: PropTypes.func
};

export default Wheel;
