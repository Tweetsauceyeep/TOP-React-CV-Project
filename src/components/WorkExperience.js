import React, {Component} from 'react';

class WorkExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: '',
      positionTitle: '',
      mainWork: '',
      workLength: ''

    }
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
      <div className="App">
        <h2>Work Experience</h2>
        <form>
          <input
            type="text"
            placeholder="Company Name"
            name="companyName"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Position Title"
            name="positionTitle"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Main Work"
            name="mainWork"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Work Length"
            name="workLength"
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

export default WorkExperience;
