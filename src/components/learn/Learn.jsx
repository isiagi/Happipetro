import { Link } from "react-router-dom";
import "./learn.css";

const Learn = () => {
  return (
    <div className="learn__container">
      <div className="learn__wrapper">
        <div className="learn__head">
          <h2>Learn more about our company</h2>
        </div>
        <div className="learn__tail">
          <Link to="/about">
            <h3>Learn More</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Learn;
