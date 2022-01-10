import React, {Component} from 'react';

class PersonalDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        email: '',
        number: '',
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

  render(){
    return(
      <div>
        <h2>Personal Details</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <div>{JSON.stringify(this.state)}</div>
      </div>
    )
  }
}

export default PersonalDetails
