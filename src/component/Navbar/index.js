import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-sm">
      <a className="navbar-brand" href="#">Shortways</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/members" className="nav-link" href="#">Members <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to="/countries" className="nav-link" href="#">Countries</Link>
          </li>
          <li className="nav-item">
            <Link to="/cities" className="nav-link" href="#">Cities</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}