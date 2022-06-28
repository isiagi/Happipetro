import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import img1 from "../../assets/images/4.jpg";
import img2 from "../../assets/images/3.jpg";
import img3 from "../../assets/images/5.jpg";
import img4 from "../../assets/images/6.jpg";
import img5 from "../../assets/images/1.png";

import "./gallery.css";
import Join from "../../components/join/Join";
import React from "react";

const Gallery = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gallery__container">
      <div className="gallery__head">
        <h1>Gallery</h1>
      </div>
      <div className="gallery__intro">
        <span>About Us</span>
        <p style={{ maxWidth: "700px", color: '#6C6C6C' }}>
          {" "}
          Happi Petro is a registered company situated in Uganda dealing in Oil
          and Gas Exploration, mining, extraction, refining tranpostation,
          distribution and marketing of petroleum / oil products.
        </p>
      </div>
      <div className="gallery__grid">
        <Zoom>
          <img src={img1} alt="" />
        </Zoom>
        <Zoom>
          <img src={img2} alt="" />
        </Zoom>
        <Zoom>
          <img src={img3} alt="" />
        </Zoom>
        <Zoom>
          <img src={img4} alt="" />
        </Zoom>
        <Zoom>
          <img src={img5} alt="" />
        </Zoom>
        <Zoom>
          <img src={img1} alt="" />
        </Zoom>
      </div>
      <Join />
    </div>
  );
};

export default Gallery;
