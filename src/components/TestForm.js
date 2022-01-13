import React, {Component} from 'react';

class TestForm extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="App">
        <form>
          <h2>Personal Details</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.props.state.name}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.props.state.email}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <input
            type="text"
            placeholder="Phone Number"
            name="number"
            value={this.props.state.number}
            onChange={e => this.props.handleChange(e)}
          />
          <br></br>

          <h2>Educational Experience</h2>
          <input
            type="text"
            placeholder="School Name"
            name="schoolName"
            value={this.props.state.schoolName}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            value={this.props.state.degree}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <input
            type="text"
            placeholder="Date of Study"
            name="studyDate"
            value={this.props.state.studyDate}
            onChange={e => this.props.handleChange(e)}
          />
          <h2>Work Experience</h2>
          <input
            type="text"
            placeholder="Company Name"
            name="companyName"
            value={this.props.state.companyName}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <input
            type="text"
            placeholder="Position Title"
            name="positionTitle"
            value={this.props.state.positionTitle}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <input
            type="text"
            placeholder="Main Work"
            name="mainWork"
            value={this.props.state.mainWork}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <input
            type="text"
            placeholder="Work Length"
            name="workLength"
            value={this.props.state.workLength}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
        </form>
      </div>
    );
  }
}

export default TestForm;
