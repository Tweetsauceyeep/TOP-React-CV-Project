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

console.log(formData)
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {};
  const resetButton = () => {};
  return (
    <div className="App">
        <TestForm formData={formData} handleChange={handleChange} />
    </div>
  );
};
export default App;
