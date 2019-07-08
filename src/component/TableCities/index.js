import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class ListCities extends PureComponent {

  getCountryNameFromID = (id) => {
    return this.props.countries.find(p => Number(p.id) === id).name;
  }

  render() {
    const { cities } = this.props;
    return (
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Country ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            cities.map((city,idx) => 
              <tr key={idx}>
                <td>{city.id}</td>
                <td>{this.getCountryNameFromID(city.country_id)}</td>
                <td>{city.name}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    )  
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities.cities,
    countries: state.countries.countries,
  }
}

export default connect(mapStateToProps)(ListCities)