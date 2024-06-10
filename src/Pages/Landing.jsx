import React from 'react'
import foodImg from '../assets/image.png'
import '../style/landing.css'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'







function Landing() {
  return (
   <><div className="main-container">
      <div className="left-div">
        <h2 className='hed1'>Are you Hyngry ?</h2>
        <h3 className='hed2'>Discover the Best Eats in Town!</h3>
        <Link to="/home" className="button-link">START</Link>

      </div>
      <div className="middle-div">
        <img className="image" src={foodImg} alt="Food" />
      </div>
      <div className="right-div">

      </div>
    </div>
    <Footer />
    </>
  
  )
}

export default Landing
