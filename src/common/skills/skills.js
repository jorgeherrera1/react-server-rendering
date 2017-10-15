import React, {Component} from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);

    let initialData;
    if (props.staticContext) {
      initialData = props.staticContext.initialData;
    } else {
      initialData = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    }

    this.state = {
      skills: initialData.skills.join(',')
    };
  }

  static fetchData() {
    return fetch('http://localhost:9000/api/skills')
      .then(res => res.json());
  }

  render() {
    return (
      <div>
        <h1>Skills</h1>
        <h3>{this.state.skills}</h3>
      </div>
    );
  }
}

export default Skills;
