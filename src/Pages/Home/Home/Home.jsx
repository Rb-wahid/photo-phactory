import React from "react";
import "tw-elements";
import CarouselCom from "../../Carousel/CarouselCom";
import Footer from "../../Shared/Footer/Footer";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <CarouselCom />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
