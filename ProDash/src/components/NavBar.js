import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Trip-A Complete Tourism Solution
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/ProShop"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ProShop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/ProFood"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ProFood
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/ProRooms"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ProRooms
              </NavLink>

            </li><li className="nav-item">
              <NavLink
                exact
                to="/ProTravel"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ProTravel
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
