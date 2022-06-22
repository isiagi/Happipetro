import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  return (
    <div className="nav__container">
      <div className="nav__wrapper">
        <h1>
          <Link to="/">HappiPetro</Link>
        </h1>
        <div className="nav__ul">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="nav__contact">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
