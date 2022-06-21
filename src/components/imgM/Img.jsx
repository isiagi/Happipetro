import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from "../../assets/images/4.jpg";
import img2 from "../../assets/images/3.jpg";
import img3 from "../../assets/images/5.jpg";
import img4 from "../../assets/images/6.jpg";
import img5 from "../../assets/images/1.png";

import "./img.css";

const Img = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={{marginBottom: '15vh'}}>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        arrows={false}
      >
        <div className="carousel__div">
          <img src={img1} alt="" />
        </div>
        <div className="carousel__div">
          <img src={img4} alt="" />
        </div>
        <div className="carousel__div">
          <img src={img5} alt="" />
        </div>
        <div className="carousel__div">
          <img src={img2} alt="" />
        </div>
        <div className="carousel__div">
          <img src={img3} alt="" />
        </div>
        <div className="carousel__div">
          <img src={img1} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Img;
