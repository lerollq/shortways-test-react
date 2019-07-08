import React from 'react';
import { connect } from 'react-redux';

import {addMember} from "../../store/actions/members";

class AddCity extends React.PureComponent {

  state = {
    firstName:"",
    lastName:"",
    address:"",
    cityId:"",
    countryId:"",
  }

  componentDidMount() {
    this.setState({})
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value,
    })
  }

  handleSelectCountryOnChange = (e) => {
    this.setState({
      countryId:e.target.value,
      cityId:""
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addMember({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      cityId: this.state.cityId,
    })
  }

  getCityFromCountry = () => {
    return this.props.cities.filter(p => p.country_id === Number(this.state.countryId))
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          Add Member
        </div>
        <div className="card-body">
          <form onSubmit={this.handleOnSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">FirstName</label>
              <input name="firstName" className="form-control" type="text" required onChange={this.handleOnChange}/>
            </div>

            <div className="form-group">
              <label htmlFor="lastName">LastName</label>
              <input name="lastName" className="form-control" type="text" required onChange={this.handleOnChange}/>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input name="address" className="form-control" type="text" required onChange={this.handleOnChange}/>
            </div>

            <div className='form-group'>
              <label htmlFor="countryId">Select Country</label>
              <select className="form-control" required onChange={this.handleSelectCountryOnChange} name="countryId">
                <option value="" selected disabled hidden>-- Select Country --</option>
                {
                  this.props.countries.map(country => 
                    <option key={country.id} value={country.id}>{country.name}</option>
                  )
                }
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor="countryId">Select City</label>
              <select className="form-control" required value={this.state.cityId} onChange={this.handleOnChange} name="cityId">
                <option value="" selected disabled hidden>-- Select City --</option>
                {
                  this.getCityFromCountry().map(city => 
                    <option key={city.id} value={city.id}>{city.name}</option>
                  )
                }
              </select>
            </div>

            <button className="btn btn-primary btn-block" type="submit">ADD MEMBER</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries.countries,
    cities: state.cities.cities,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMember: (data) => dispatch(addMember(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCity)