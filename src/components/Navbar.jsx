import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-right">
          <ul className="nav-right-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li><Link to="/about">About</Link>
            </li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="nav-left">
          <h4>Name</h4>
        </div>
      </div>
    </>
  );
};

export default Navbar;
