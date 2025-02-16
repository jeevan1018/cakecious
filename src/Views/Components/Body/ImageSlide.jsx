import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const sliderRef = useRef(null);

  const settings= {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, 
    pauseOnHover: false,
  };

  const images = [
    "https://cakecious2.bolvosites.com/header1/wp-content/uploads/sites/3/revslider/slider4/slider-9.jpg",
    "https://cakecious2.bolvosites.com/header1/wp-content/uploads/sites/3/revslider/slider4/slider-10.jpg",
    "https://cakecious2.bolvosites.com/header1/wp-content/uploads/sites/3/revslider/slider4/slider-11.jpg",
  ];

  return (
    <div className="slider">
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index}`} height={"679px"} width={"100%"} />
          </div>
        ))}
      </Slider>
     
        <div className="button-left" onClick={() => sliderRef.current.slickPrev()}><img src="https://cakecious2.bolvosites.com/demo4/wp-content/themes/cakecious/assets/img/to-top.png"/></div>
        <div className="button-right" onClick={() => sliderRef.current.slickNext()}><img src="https://cakecious2.bolvosites.com/demo4/wp-content/themes/cakecious/assets/img/to-top.png"/></div>
   
    </div>
  );
};

export default ImageSlider;
