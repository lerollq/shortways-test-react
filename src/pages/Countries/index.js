import React from 'react';

import TableCountries from "../../component/TableCountries";
import AddCountry from "../../component/AddCountry";

export default () => {
  return (
    <div className="container">

      <h2>Countries</h2>
      <hr/>
      <div className="d-flex  flew-wrap justify-content-between">
        <div className="col-12 col-sm-5">
          <TableCountries />
        </div>
        <div className="col-12 col-sm-5">
          <AddCountry/>
        </div>
      </div>

    </div>
  )
}