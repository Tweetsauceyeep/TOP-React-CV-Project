import React, {Component} from 'react';

class EducationalExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Educational Experience</h2>
        <form>
          <input
            type="text"
            placeholder="School Name"
            name="schoolName"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            placeholder="Date of Study"
            name="studyDate"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
        </form>
        <div>{JSON.stringify(this.props)}</div>
      </div>
    );
  }
}

export default EducationalExperience;
