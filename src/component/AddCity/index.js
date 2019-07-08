import React from 'react';
import { connect } from 'react-redux';

import {addCity} from "../../store/actions/cities";

class AddCity extends React.PureComponent {

  state = {
    countryId:"",
    cityName:""
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
    this.props.addCity({
      countryId: this.state.countryId,
      cityName: this.state.cityName
    })
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          Add City
        </div>
        <div className="card-body">
          <form onSubmit={this.handleOnSubmit}>
            <div className='form-group'>
              <label htmlFor="countryId">Select Country</label>
              <select className="form-control" required onChange={this.handleOnChange} name="countryId">
                <option value="" selected disabled hidden>-- Select Country --</option>
                {
                  this.props.countries.map(country => 
                    <option key={country.id} value={country.id}>{country.name}</option>
                  )
                }
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="cityName">Name</label>
              <input name="cityName" className="form-control" type="text" required onChange={this.handleOnChange}/>
            </div>
            <button className="btn btn-primary btn-block" type="submit">ADD CITY</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries.countries,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCity: (data) => dispatch(addCity(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCity)