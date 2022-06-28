import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="notFound__container">
      <h1>Page Not Found</h1>
      <Link to="/">Go To Home</Link>
    </div>
  );
};

export default NotFound;
