import React, {Component} from 'react';

class EducationalExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: '',
      degree: '',
      studyDate: '',
    };
  }
  handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <h2>Educational Experience</h2>
        <form>
          <input
            type="text"
            placeholder="School Name"
            name="schoolName"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Date of Study"
            name="studyDate"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <div>{JSON.stringify(this.state)}</div>
      </div>
    );
  }
}

export default EducationalExperience;
