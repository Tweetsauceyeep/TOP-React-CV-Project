import React, {Component} from 'react';

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
  }


  render(){
    return(
      <div>
        <h2>Personal Details</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="number"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
        </form>
        <div>{JSON.stringify(this.props)}</div>
      </div>
    )
  }
}

export default PersonalDetails
