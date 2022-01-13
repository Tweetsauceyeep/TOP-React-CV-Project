import React, {Component} from 'react';

class TestForm extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <form style={{marginBottom: "20px"}}>
          <h2>Personal Details</h2>
          <label for="name" style={{marginRight: '10px', }}>Name:</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.props.state.name}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <label for="email" style={{marginRight: '10px' }}>Email:</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.props.state.email}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <label for="number" style={{marginRight: '10px' }}>Contact Number:</label>
          <input
            type="text"
            placeholder="Phone Number"
            name="number"
            value={this.props.state.number}
            onChange={e => this.props.handleChange(e)}
          />
          <br></br>
          <h2>Educational Experience</h2>
          <label for="schoolName" style={{marginRight: '10px' }}>School Name:</label>
          <input
            type="text"
            placeholder="School Name"
            name="schoolName"
            value={this.props.state.schoolName}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <label for="degree" style={{marginRight: '10px' }}>Degree:</label>
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            value={this.props.state.degree}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <label for="studyDate" style={{marginRight: '10px' }}>Date Of Study:</label>
          <input
            type="text"
            placeholder="Date of Study"
            name="studyDate"
            value={this.props.state.studyDate}
            onChange={e => this.props.handleChange(e)}
          />
          <h2>Work Experience</h2>
          <label for="companyName" style={{marginRight: '10px' }}>Previous Company:</label>
          <input
            type="text"
            placeholder="Company Name"
            name="companyName"
            value={this.props.state.companyName}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <label for="positionTitle" style={{marginRight: '10px' }}>Position Title:</label>
          <input
            type="text"
            placeholder="Position Title"
            name="positionTitle"
            value={this.props.state.positionTitle}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <label for="mainWork" style={{marginRight: '10px' }}>Main Work:</label>
          <input
            type="text"
            placeholder="Main Work"
            name="mainWork"
            value={this.props.state.mainWork}
            onChange={e => this.props.handleChange(e)}
          />
          <br />
          <label for="workLength" style={{marginRight: '10px' }}>Work Length:</label>
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
