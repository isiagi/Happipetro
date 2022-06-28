import React from "react";
import { Link, Outlet } from "react-router-dom";
import Join from "../../components/join/Join";
import Service from "../../components/services/Service";
import Team from "../team/Team";
import "./About.css";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about__container">
      <div className="about__wrapper">
        <h1>About Us</h1>
        <div className="about__line"></div>
      </div>
      <div className="about__side">
        <div className="about__ul">
          <ul>
            <li>
              <Link to="/about/mission">Mission</Link>
            </li>
            <li>
              <Link to="/about/vission">Vision</Link>
            </li>
            <li>
              <Link to="/about/commitment">Our Commitment</Link>
            </li>
            <li>
              <Link to="/about/goals">Goals</Link>
            </li>
            <li>
              <Link to="/about/value">Our Core Value</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
      <Team />
      <div className="terms">
        <h3>Items taken under Consideration</h3>
        <ul>
          <li>
            Term of payment on the client side. ie cash on delivery but before
            offloading, cash after delievry or credit
          </li>
          <li>Transportation trems</li>
          <li>Mode of payment; cash or Bank</li>
          <li>Commission Structure</li>
          <li>Time of delivery after placing an order</li>
        </ul>
      </div>
      <Service />
      <Join />
    </div>
  );
};

// Hallen Mpaire
// Operations Manager -
// Happi petro and gas ltd
// tel: 0701746746 / 0781620948

export default About;
