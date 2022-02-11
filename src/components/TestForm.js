import React, {Component} from 'react';

const TestForm = ({formData, handleChange}) => {
  return (
    <div>
      <form style={{marginBottom: '20px'}}>
        <h2>Personal Details</h2>
        <label for="name" style={{marginRight: '10px'}}>
          Name:
        </label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={e => handleChange(e)}
        />
        <br />
        <label for="email" style={{marginRight: '10px'}}>
          Email:
        </label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={e => handleChange(e)}
        />
        <br />
        <label for="number" style={{marginRight: '10px'}}>
          Contact Number:
        </label>
        <input
          type="text"
          placeholder="Phone Number"
          name="number"
          value={formData.number}
          onChange={e => handleChange(e)}
        />
        <br></br>
        <h2>Educational Experience</h2>
        <label for="schoolName" style={{marginRight: '10px'}}>
          School Name:
        </label>
        <input
          type="text"
          placeholder="School Name"
          name="schoolName"
          value={formData.schoolName}
          onChange={e => handleChange(e)}
        />
        <br />
        <label for="degree" style={{marginRight: '10px'}}>
          Degree:
        </label>
        <input
          type="text"
          placeholder="Degree"
          name="degree"
          value={formData.degree}
          onChange={e => handleChange(e)}
        />
        <br />
        <label for="studyDate" style={{marginRight: '10px'}}>
          Date Of Study:
        </label>
        <input
          type="text"
          placeholder="Date of Study"
          name="studyDate"
          value={formData.studyDate}
          onChange={e => handleChange(e)}
        />
        <h2>Work Experience</h2>
        <label for="companyName" style={{marginRight: '10px'}}>
          Previous Company:
        </label>
        <input
          type="text"
          placeholder="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={e => handleChange(e)}
        />
        <br />
        <label for="positionTitle" style={{marginRight: '10px'}}>
          Position Title:
        </label>
        <input
          type="text"
          placeholder="Position Title"
          name="positionTitle"
          value={formData.positionTitle}
          onChange={e => handleChange(e)}
        />
        <br />
        <label for="mainWork" style={{marginRight: '10px'}}>
          Main Work:
        </label>
        <input
          type="text"
          placeholder="Main Work"
          name="mainWork"
          value={formData.mainWork}
          onChange={e => handleChange(e)}
        />
        <br />
        <label for="workLength" style={{marginRight: '10px'}}>
          Work Length:
        </label>
        <input
          type="text"
          placeholder="Work Length"
          name="workLength"
          value={formData.workLength}
          onChange={e => handleChange(e)}
        />
        <br />
      </form>
    </div>
  );
};

export default TestForm;
