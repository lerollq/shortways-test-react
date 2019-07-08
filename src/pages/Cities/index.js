import React from 'react';

import TableCities from "../../component/TableCities";
import AddCity from "../../component/AddCity";

export default () => {

    return (
      <div className="container">
        <h2>Cities</h2>
        <hr/>
        <div className="d-flex  flew-wrap justify-content-between">
          <div className="col-12 col-sm-5">
            <TableCities />
          </div>
          <div className="col-12 col-sm-5">
            <AddCity/>
          </div>
        </div>
      </div>
    )
}
