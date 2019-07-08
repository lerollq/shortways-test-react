import React from 'react';

import TableMembers from "../../component/TableMembers";
import AddMember from "../../component/AddMember";

export default () => {
  return (
    <div className="container">

      <h2>Members</h2>
      <hr/>
      <div className="d-flex  flew-wrap justify-content-between">
        <div className="col-12 col-sm-5">
          <TableMembers />
        </div>
        <div className="col-12 col-sm-5">
          <AddMember/>
        </div>
      </div>

    </div>
  )
}