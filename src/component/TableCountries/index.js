import React from 'react';
import { connect } from 'react-redux';

const TableCountries = ({countries}) => {
  return (
    <table className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
          <th>#</th>
          <th>Code</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {
          countries.map((country, idx) => 
            <tr key={idx}>
              <td>{country.id}</td>
              <td>{country.code}</td>
              <td>{country.name}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

const mapStateToProps = state => {
  return {
    countries: state.countries.countries,
  }
}

export default connect(mapStateToProps)(TableCountries)