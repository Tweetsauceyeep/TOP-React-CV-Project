import React, {Component} from 'react';
import RenderCV from './DisplayCV';

class TestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateComplete: false,

      name: '',
      email: '',
      number: '',

      schoolName: '',
      degree: '',
      studyDate: '',

      companyName: '',
      positionTitle: '',
      mainWork: '',
      workLength: '',
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state)
      this.setState({
        stateComplete: !this.state.stateComplete,
      });
  };


  render() {
    const buttonText = this.state.stateComplete ? 'Edit Text' : ' Toggle Preview'
    return (
      <div className="App">
        <button onClick={this.handleSubmit}>{buttonText}</button>
        <form>
          <h2>Personal Details</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input
            type="text"
            placeholder="Phone Number"
            name="number"
            value={this.state.number}
            onChange={e => this.handleChange(e)}
          />
          <br></br>

          <h2>Educational Experience</h2>
          <input
            type="text"
            placeholder="School Name"
            name="schoolName"
            value={this.state.schoolName}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            value={this.state.degree}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input
            type="text"
            placeholder="Date of Study"
            name="studyDate"
            value={this.state.studyDate}
            onChange={e => this.handleChange(e)}
          />
          <h2>Work Experience</h2>
          <input
            type="text"
            placeholder="Company Name"
            name="companyName"
            value={this.state.companyName}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input
            type="text"
            placeholder="Position Title"
            name="positionTitle"
            value={this.state.positionTitle}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input
            type="text"
            placeholder="Main Work"
            name="mainWork"
            value={this.state.mainWork}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input
            type="text"
            placeholder="Work Length"
            name="workLength"
            value={this.state.workLength}
            onChange={e => this.handleChange(e)}
          />
          <br />
        </form>
        <RenderCV
          information={this.state}
          stateComplete={this.state.stateComplete}
        />
      </div>
    );
  }
}

export default TestForm;
