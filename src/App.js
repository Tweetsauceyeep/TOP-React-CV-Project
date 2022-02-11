import './App.css';
import React, {useState} from 'react';
import TestForm from './components/TestForm';
import RenderCV from './components/DisplayCV';

const App = () => {
  const [formData, setFormData] = useState({
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
  });

  handleChange=()=>{

  }

  return (
    <div className="App">
      <button onClick={this.handleSubmit}>{buttonText}</button>
      <button onClick={this.resetButton}>Reset Text</button>
      {this.state.stateComplete ? (
        <RenderCV
          information={this.state}
          stateComplete={this.state.stateComplete}
        />
      ) : (
        <TestForm formData={formData} handleChange={this.handleChange} />
      )}
    </div>
  );
};

export default App;
