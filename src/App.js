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

  const [formComplete, setFormComplete] = useState(false);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setFormComplete(!formComplete);
    if (formComplete) {
      setSubmitText('Preview');
    }
    if (!formComplete) {
      setSubmitText('Edit CV');
    }
  };

  const resetButton = () => {
    setFormData({
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
  };

  const [submitText, setSubmitText] = useState('Preview CV');
  const RenderSubmitText = () => {};

  return (
    <div className="App">
      <button onClick={handleSubmit}>{submitText}</button>
      <button onClick={resetButton}>Reset</button>
      {formComplete ? (
        <RenderCV information={formData} formComplete={formComplete} />
      ) : (
        <TestForm formData={formData} handleChange={handleChange} />
      )}
    </div>
  );
};
export default App;
