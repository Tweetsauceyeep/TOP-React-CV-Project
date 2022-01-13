import React, {Component} from 'react';
import '../App.css';

class RenderCV extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {information} = this.props;

    if (!this.props.stateComplete) {
      return null
    } else {
      return (
        <div >
          <h2>Personal Details</h2>
          <div>{`First Name: ${information.name}`}</div>
          <div>{`Email: ${information.email}`}</div>
          <div>{`Contact Number: ${information.number}`}</div>
          <h2>Educational Experience</h2>
          <div>{`School Name: ${information.schoolName}`}</div>
          <div>{`Degree: ${information.degree}`}</div>
          <div>{`Date of Study: ${information.studyDate}`}</div>
          <h2>Work Experience</h2>
          <div>{`Previous Company: ${information.companyName}`}</div>
          <div>{`Previous Position: ${information.positionTitle}`}</div>
          <div>{`Main Work: ${information.mainWork}`}</div>
          <div>{`Work Length: ${information.workLength}`}</div>
        </div>
      );
    }
  }
}
export default RenderCV;
