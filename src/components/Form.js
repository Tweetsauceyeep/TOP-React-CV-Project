import React, {Component} from 'react';
import PersonalDetails from './PersonalDetails';
import EducationalExperience from './EducationalExperience';
import WorkExperience from './WorkExperience'

class Form extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      personalDetails: {
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <PersonalDetails />
        <EducationalExperience />
        <WorkExperience/>
      </div>
    );
  }
}

export default Form;
