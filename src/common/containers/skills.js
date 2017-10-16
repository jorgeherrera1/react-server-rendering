import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import 'isomorphic-fetch';

class Skills extends Component {
  static fetchData() {
    return fetch('http://localhost:9000/api/skills')
      .then(res => res.json());
  }

  render() {
    return (
      <div>
        <h1>Skills</h1>
        <h3>{this.props.skills}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    skills: state.skills.join(',')
  };
};

export default withRouter(connect(mapStateToProps)(Skills));

