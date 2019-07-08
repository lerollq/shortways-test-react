import React from 'react';
import { connect } from 'react-redux';

import {addCountry} from "../../store/actions/countries";

class AddCountry extends React.PureComponent {

  state = {
    countryCode:"",
    countryName:""
  }

  componentDidMount() {
    this.setState({})
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value,
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addCountry({
      countryCode: this.state.countryCode,
      countryName: this.state.countryName
    })
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          Add Country
        </div>
        <div className="card-body">
          <form onSubmit={this.handleOnSubmit}>
            <div className='form-group'>
              <label htmlFor="countryCode">Country Code</label>
              <input name="countryCode" className="form-control" type="text" required onChange={this.handleOnChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="countryName">Country Name</label>
              <input name="countryName" className="form-control" type="text" required onChange={this.handleOnChange}/>
            </div>
            <button className="btn btn-primary btn-block" type="submit">ADD COUNTRY</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCountry: (data) => dispatch(addCountry(data))
  }
}

export default connect(null, mapDispatchToProps)(AddCountry)