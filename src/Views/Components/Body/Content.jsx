import React from 'react'
import "./Body.scss"
import ProductSlider from '../Cakes/CakeComponent'

const Content = () => {
  return (
    <div className='ContentDiv'>
        <h2>Our Featured Cakes</h2>
        <h5>Seldolor sit amet consect etur</h5>
        <div className='cakes-list'>
          <ProductSlider/>
          </div>
      
    </div>
  )
}

export default Content
