import React from 'react';
import './dash.css';
import { Link } from 'react-router-dom';

const Dash = () => {
  return (
    <div id="grad1">
      <div className="container">
        <marquee className="welcome-text">
          Welcome Admin! Scroll down to explore.
        </marquee>
        <div className="cards">
          <Link to="/add" className="card">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/027/309/403/small_2x/office-employee-with-ai-generated-free-png.png"
              alt="Add Employee"
            />
            <div className="desc">Click Here to Add Employee Details</div>
          </Link>
          <Link to="/edit" className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3589/3589079.png"
              alt="Edit Employee"
            />
            <div className="desc">Click Here to Edit Employee Details</div>
          </Link>
          <Link to="/details" className="card">
            <img
              src="https://static.vecteezy.com/system/resources/previews/021/724/423/non_2x/business-team-of-employees-illustration-vector.jpg"
              alt="Employee Details"
            />
            <div className="desc">Click Here to View Employee Details</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dash;
