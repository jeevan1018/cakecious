import React from 'react'
import "../Body/Body.scss"

const Information = () => {
  return (
    <div className='info-div'>
        <div className='info-div-content'>
        <div>
        <div className='welcome'>Welcome to our Bakery</div>
        <div className='goods'>Baked goods have been around for thousands of years. The art of baking was developed early during the Roman Empire.</div>
        </div>
        <div className='famous'>It was a highly famous art as Roman citizens loved baked goods and demanded for them frequently for important occasions such as feasts and weddings etc. Due to the fame and desire that the art of baking received, around 300 BC, baking was introduced as an occupation and respectable profession for Romans.</div>
        <div className='about-us'>Know more about us</div>
      
    </div>
    <img className='imagegirl' src='https://cakecious2.bolvosites.com/demo4/wp-content/uploads/sites/10/2018/06/welcome-right.jpg' height={"320px"} width={"460px"}/>
    </div>
  )
}

export default Information
