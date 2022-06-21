import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import img1 from "../../assets/images/4.jpg";
import img2 from "../../assets/images/3.jpg";
import img3 from "../../assets/images/5.jpg";

import "./hero1.css";

const Hero1 = () => {
  const slideImages = [
    {
      url: img1,
      caption: "Enhancing Energy Access",
    },
    {
      url: img2,
      caption: "Whole Supply of Petroleum and Diesel",
    },
    {
      url: img3,
      caption: "Retail Supply of Petroleum and Diesel",
    },
  ];

  return (
    <div>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(${slideImage.url})`,
                minHeight: "100vh",
                width: "100vw",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="slider__text">{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Hero1;
