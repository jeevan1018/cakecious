import React from 'react'
import "../Body/Body.scss"
import 'font-awesome/css/font-awesome.min.css'; 

const Footer = () => {
  return (
    <div className='footer-container'>
<div className='footer-main'>
    <div className='footer-1'>
        <div className='theme'>Cakecious is a WordPress theme for Bakery and related businesses.</div>
        <div className='footer-icons'>
<i class="fa fa-facebook"></i>
        <i class="fa fa-linkedin"></i>
<i class="fa fa-twitter"></i>
<i class="fa fa-google-plus"></i>

            

        </div>
    </div>
 <div className="footer-2">
    <div className='head-f'>Quick Links</div>
    <div className='f-divider'></div>
    <div className='f-content'>Your Account</div>
    <div className='f-content'>Privacy Policy</div>
    <div className='f-content' >Terms & conditions</div>
    
 </div>
 <div className="footer-2">
    <div className='head-f'>Work Times</div>
    <div className='f-content'>Mon Thu : 8 am - 8 pm</div>
    <div className="f-content">Fri : 8 am - 8 pm</div>
    <div className="f-content">Sat : 9am - 4pm</div>
    <div className="f-content">sun : Closed</div>
   
    </div>
    <div className="footer-2">
    <div className='head-f'>Contact Info</div>
    <div className='f-content'>(1800) 574 9687</div>
    <div className='f-content'>Cakecious Store</div>
    <div className='f-content' >256, baker Street, New york, 5245</div>
    <div className="f-content">cakeciousdemo@email.com</div>
    </div>
  
</div>
<div className='copy-write' >
    <div className='copy-text'>
    Cakecious Demo 4 © 2024 All Rights Reserved.	                </div>
    <div className='owner'>Developed By - <span className='owner-name'>Jeevan Palapati</span>
    <div className='owner'>@MasterKnown</div>

    </div>
    
</div>

      
    </div>
  )
}

export default Footer
