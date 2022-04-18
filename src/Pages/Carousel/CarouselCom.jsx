import React from "react";
import img1 from "../../assets/Images/1.jpg";
import img2 from "../../assets/Images/2.jpg";
import img3 from "../../assets/Images/3.jpg";
import img4 from "../../assets/Images/4.jpg";
import img5 from "../../assets/Images/5.jpg";
import img6 from "../../assets/Images/6.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselCom = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} interval={2700}>
      <div>
        <img src={img4} class="block w-full" alt="Wild Landscape" />
      </div>
      <div>
        <img src={img2} class="block w-full" alt="Camera" />
      </div>
      <div>
        <img src={img3} class="block w-full" alt="Exotic Fruits" />
      </div>
      <div>
        <img src={img1} class="block w-full" alt="Wild Landscape" />
      </div>
      <div>
        <img src={img5} class="block w-full" alt="Camera" />
      </div>
      <div>
        <img src={img6} class="block w-full" alt="Exotic Fruits" />
      </div>
    </Carousel>
  );
};

export default CarouselCom;
