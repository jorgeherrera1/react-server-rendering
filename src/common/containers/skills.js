import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import {fetchSkills} from '../actions';

class Skills extends Component {
  static fetchData() {
    return fetch('http://localhost:9000/api/skills')
      .then(res => res.json());
  }

  componentWillMount() {
    if (!this.props.skills) {
      this.props.fetchSkills();
    }
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
    skills: state.skills.data.join(',')
  };
};

export default withRouter(connect(mapStateToProps, {fetchSkills})(Skills));
