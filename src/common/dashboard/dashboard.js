import React, {Component} from 'react';
import 'isomorphic-fetch';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    let initialData;
    if (props.staticContext) {
      console.log('constructing from server');
      initialData = props.staticContext.initialData;
    } else {
      console.log('constructing from browser');
      initialData = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    }

    this.state = {
      numberOfResources: initialData.numberOfResources
    };
  }

  static fetchData() {
    return fetch('http://localhost:9000/api/dashboard')
      .then(res => res.json());
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h3>{this.state.numberOfResources}</h3>
      </div>
    );
  }
}

export default Dashboard;
