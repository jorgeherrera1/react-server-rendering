import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import 'isomorphic-fetch';

class Dashboard extends Component {
  static fetchData() {
    return fetch('http://localhost:9000/api/dashboard')
      .then(res => res.json());
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h3>{this.props.numberOfResources}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.dashboard;
};

export default withRouter(connect(mapStateToProps)(Dashboard));
