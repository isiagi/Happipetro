import React from "react";
import Banner from "../components/banner/Banner";
import Hero1 from "../components/hero1/Hero1";
import Img from "../components/imgM/Img";
import Join from "../components/join/Join";
import Learn from "../components/learn/Learn";
import MapComponent from "../components/map/map";
import Service from "../components/services/Service";
import Why from "../components/why/Why"
import Team from "./team/Team";

const HomePage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero1 />
      <Banner />
      <Img />
      <Why />
      <Service />
      <Team />
      <Learn />
      <MapComponent />
      <Join />
    </div>
  );
};

export default HomePage;
