import React, {Component} from 'react';
import PersonalDetails from './PersonalDetails';
import EducationalExperience from './EducationalExperience';
import WorkExperience from './WorkExperience';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <PersonalDetails
            handleChange={this.handleChange}
            state={this.state}
          />
          <EducationalExperience
            handleChange={this.handleChange}
            state={this.state}
          />
          <WorkExperience handleChange={this.handleChange} state={this.state} />
          <button type="submit">Submit Form</button>
        </form>
        <div>{}</div>
      </div>
    );
  }
}

export default Form;
