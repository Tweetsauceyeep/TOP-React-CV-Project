import React, {Component} from 'react';
import PersonalDetails from './PersonalDetails';
import EducationalExperience from './EducationalExperience';
import WorkExperience from './WorkExperience';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cv: [],
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
    this.setState({
      cv: this.state.cv.concat(this.state),
    });
  };

  render() {
    return (
      <div className="App">
        <PersonalDetails
          handleChange={e => this.handleChange(e)}
          state={this.state}
          onSubmit={this.handleSubmit}
        />
        <EducationalExperience
          handleChange={e => this.handleChange(e)}
          state={this.state}
        />
        <WorkExperience
          handleChange={e => this.handleChange(e)}
          state={this.state}
        />
        <div>{this.state.cv}</div>
      </div>
    );
  }
}

export default Form;
