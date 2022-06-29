import { MdTableRows } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";

import "./nav.css";
import React from "react";

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="nav__container">
      <div className="nav__wrapper">
        <h1>
          <Link to="/">HappiPetro</Link>
        </h1>
        <div className={`${"nav__ul"} ${open ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/mission">About</Link>
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
        {open ? (
          <div className="iconContainer" onClick={() => setOpen(false)}>
            <GiCancel className="toggleIcon" />
          </div>
        ) : (
          <div className="iconContainer" onClick={() => setOpen(true)}>
            <MdTableRows className="toggleIcon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
