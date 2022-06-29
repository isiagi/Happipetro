import "./banner.css";

const Banner = () => {
  return (
    <div className="banner__container">
      <div className="banner__one">
        <h1 style={{color: '#FFB800'}}>The biggest supplier in the country</h1>
      </div>
      <div className="banner__two">
        <p>
          Happi Petro is a registered company situated in Uganda dealing in Oil
          and Gas Exploration, mining, extraction, refining tranpostation,
          distribution and marketing of petroleum / oil products, with a
          clientele of over 15 clients and a aim of serving 1 million liters and
          above per month.
        </p>
      </div>
    </div>
  );
};

export default Banner;
