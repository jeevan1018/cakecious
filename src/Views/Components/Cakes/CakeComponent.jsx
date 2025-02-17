import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.scss"; // Import our custom CSS

const products = [
  {
    id: 1,
    name: "Custom Cake Builder",
    price: 18.0,
    image: "https://cakecious2.bolvosites.com/demo4/wp-content/uploads/sites/10/2020/08/bart-vermeiren-MvprUM2iB3s-unsplash.jpg"
  },
  {
    id: 2,
    name: "Chocolate Cake",
    price: 45.0,
    image: "https://cakecious2.bolvosites.com/demo4/wp-content/uploads/sites/10/2020/08/ella-olsson-uG1jwfpCRhg-unsplash.jpg"
  },
  {
    id: 3,
    name: "Strawberry Cake",
    price: 30.0,
    image: "https://cakecious2.bolvosites.com/demo4/wp-content/uploads/sites/10/2020/08/michele-blackwell-evRB-x0TJkM-unsplash.jpg"
  },
  {
    id: 4,
    name: "Blueberry Cake",
    price: 25.0,
    image: "https://cakecious2.bolvosites.com/demo4/wp-content/uploads/sites/10/2020/08/simon-birt-ywI8xVS3Qvc-unsplash.jpg"
  },
  {
    id: 5,
    name: "Red Velvet Cake",
    price: 35.0,
    image: "https://cakecious2.bolvosites.com/demo4/wp-content/uploads/sites/10/2020/08/yonko-kilasi-Huxy4lSV-m4-unsplash.jpg"
  }
];

const ProductSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,        // Loop infinitely
    slidesToShow: 3,       // Show 3 products at a time
    slidesToScroll: 1,     
    speed: 500,            // Smooth sliding animation
    autoplay: false,       // Slide only on button click
    dots: false,           // Hide default dots
    centerMode: false,     // Ensure full width alignment
    arrows: false,         // Custom buttons used
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="image-container">
              <img src={product.image} alt={product.name} />
              <span className="price-overlay">${product.price.toFixed(2)}</span>
            </div>
            <h3 className="product-name">{product.name}</h3>
            <button className="add-cart">Add to cart</button>
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

export default ProductSlider;
