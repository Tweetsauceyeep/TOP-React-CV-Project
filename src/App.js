import './App.css';
import React, {Component} from 'react';
import TestForm from './components/TestForm';
import RenderCV from './components/DisplayCV';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateComplete: false,

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

    if (this.state)
      this.setState({
        stateComplete: !this.state.stateComplete,
      });
  };

  render() {
    const buttonText = this.state.stateComplete
      ? 'Edit Text'
      : ' Toggle Preview';

    return (
      <div className="App">
        <button onClick={this.handleSubmit}>{buttonText}</button>
        {this.state.stateComplete ? (
          <RenderCV
            information={this.state}
            stateComplete={this.state.stateComplete}
          />
        ) : (
          <TestForm state={this.state} handleChange={this.handleChange} />
        )}
      </div>
    );
  }
}

export default App;
