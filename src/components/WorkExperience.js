import React, {Component} from 'react';

class WorkExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h2>Work Experience</h2>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            placeholder="Company Name"
            name="companyName"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            placeholder="Position Title"
            name="positionTitle"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            placeholder="Main Work"
            name="mainWork"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            placeholder="Work Length"
            name="workLength"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
          <button type="submit">Submit Form</button>
        </form>
        <div>{JSON.stringify(this.props.state)}</div>
      </div>
    );
  }
}

export default WorkExperience;
