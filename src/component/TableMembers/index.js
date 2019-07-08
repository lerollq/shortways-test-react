import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { removeMember } from '../../store/actions/members';

class TableMembers extends PureComponent {

  handleRemoveMember = (e) => {
    e.preventDefault();
    this.props.removeMember(e.target.dataset.index)
  }

  getCityNameFromID = (id) => {
    return this.props.cities.find(p => Number(p.id) === Number(id)).name
  }

  render() {
    const { members } = this.props;
    return (
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Address</th>
            <th>City</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            members.map((member, idx) => 
              <tr key={idx}>
                <td>{member.firstName}</td>
                <td>{member.lastName}</td>
                <td>{member.address}</td>
                <td>{this.getCityNameFromID(member.city)}</td>
                <td><button data-index={idx} className="btn btn-secondary" onClick={this.handleRemoveMember}>Remove</button></td>
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
    members: state.members.members,
    cities: state.cities.cities,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeMember: (index) => dispatch(removeMember(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableMembers)