import React from 'react'
import "./Navbar.scss"
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
  return (
    <>
    <div className='header'>
        <div className="header-left">

            <div className='header-phone'>  <i className="fa fa-phone" aria-hidden="true"></i>
    <span className="contact-text">000-111-222</span></div>
            <div className='header-phone'> <i className="fa fa-envelope" aria-hidden="true"></i>
    <span className="contact-text">example@example.com</span></div>

        </div>
        <div className="header-right">
        <ul className="h_social list_style">
          <li>
            <a href="#" className="twitter" title="Twitter">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="facebook" title="Facebook">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" className="pinterest" title="Pinterest">
              <i className="fa fa-pinterest"></i>
            </a>
          </li>
          <li>
            <a href="#" className="instagram" title="Instagram">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
<div style={{width:"1px",height:"20px",backgroundColor:"#fff"}} />
        <ul className="h_search list_style">
          <li style={{marginLeft:"0px"}} className="shop_cart">
            <a
              className="cart-tt"
              href="https://cakecious2.bolvosites.com/demo4/cart/"
              title="View your shopping cart"
            >
              <i className="lnr lnr-cart"></i>
              <span className="tt-cart">0</span>
            </a>
          </li>
          <li>
            <a className="popup-with-zoom-anim" href="#test-search">
              <i className="fa fa-search"></i>
            </a>
          </li>
        </ul>
            
        </div>
      
    </div>
   
    </>
  )
}

export default Navbar
