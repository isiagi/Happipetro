import Join from "../join/Join";
import "./service.css";

const Service = () => {
  return (
    <>
      <div className="service__container">
        <div className="service__grid">
          <div className="service__grid__item">
            <h1 style={{ color: "#FFB800" }}>Our Services</h1>
            <p style={{ maxWidth: "500px", color: "#6C6C6C" }}>
              We exceed our customer's expectations in quality, delievery and
              cost through continuous improvement and customer interaction
            </p>
          </div>
          <div className="service__grid__ite">
            <div className="service__item">
              <h2>Whole Supply of Petroleum and Diesel</h2>
            </div>
          </div>
          <div className="service__grid__it">
            <div className="service__item">
              <h2>Retail Supply of Petroleum and Diesel</h2>
            </div>
          </div>
          <div className="service__grid__i">
            <div className="service__item">
              <h2>Oil and Gas Procurement and Logistics</h2>
            </div>
          </div>
        </div>
      </div>
      <Join />
    </>
  );
};

export default Service;
