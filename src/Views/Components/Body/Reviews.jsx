import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Body.scss";

const products = [
  {
    id: 1,
    name: "Sara Joe",
    review:
      "Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    img: "https://cakecious2.bolvosites.com/demo4/wp-content/uploads/sites/10/2018/06/client-2.png"
  },
  {
    id: 2,
    name: "Sara Joe",
    review:
      "Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    img: "https://cakecious2.bolvosites.com/demo4/wp-content/uploads/sites/10/2018/06/client-2.png"
  },
  {
    id: 3,
    name: "Robert Joe",
    review:
      "Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    img: "https://cakecious2.bolvosites.com/demo4/wp-content/uploads/sites/10/2018/06/client-1.png"
  },
  {
    id: 4,
    name: "Robert Joe",
    review:
      "Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    img: "https://cakecious2.bolvosites.com/demo4/wp-content/uploads/sites/10/2018/06/client-1.png"
  }
];

const ReviewComponent = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,         // Loop infinitely
    slidesToShow: 1,        // Show 1 container at a time
    slidesToScroll: 1,      
    speed: 500,             // Smooth sliding animation
    autoplay: false,        // Slide only on button click
    dots: false,            // Hide default dots
    centerMode: false,      // Ensure full width alignment
    arrows: false           // Use custom buttons instead of default arrows
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="review-slide">
      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div className="review-card" key={product.id}>
            
         
            <img className="img-review" src={product.img} alt={product.name} />

            <span className="review">{product.review}</span>

<div>
              {/* <span className="comma">"</span> */}
            
           
           
              <span className="name">{product.name}</span>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom navigation buttons */}
      <div className="slider-buttons">
        <button onClick={handlePrev} className="prev-btn">❮</button>
        <button onClick={handleNext} className="next-btn">❯</button>
      </div>
    </div>
  );
};

export default ReviewComponent;
