import React from 'react'
import { Link } from 'react-router-dom'
import { SiCodechef } from "react-icons/si";



const Footer = () => {
  return (
   <div style={{height:'300px',backgroundColor:' #131038'}} className="container-fluid w-100 ">
    <div className="d-flex justify-content-between  ">
        <div style={{width:'400px'}} className='intro mt-5 ms-5 text-white'>
        <h5><SiCodechef style={{fontSize:'50px',color:'yellow'}} /> Meal Map</h5>
        <p>Designed and Built  by Arya KV</p>
        <p>Code licensed by Arya KV</p>
        <p>Currently v5.3.2</p>
        </div>

        <div className="links d-flex flex-column mt-5 text-white">
            <h5>Links</h5>
            <Link to={'/Home'} style={{textDecoration:'none',color:'white'}}>Home</Link>
            


        </div>
         <div className="guids d-flex flex-column mt-5 text-white">
          <h5>Guides</h5>
          <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>React</a>
          <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</a>
          <a href="https://reactrouter.com/en/main" style={{textDecoration:'none',color:'white'}} target='_blank'>React Router</a>


         </div>
         <div className="contact d-flex flex-column mt-5 me-5">
          <h5 className='text-white'>Contact Us</h5>
          <div className="d-flex">
            <input placeholder='Enter your email here' type="text"  className="form-container" />
            <button className="btn btn-success ms-1"><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-twitter"></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-facebook"></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-github"></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-solid fa-phone"></i></a>
          </div>
         </div>
    </div>
    <p className='text-center text-white mt-3'>Copyright © 2024 Meal Map. Built with React. </p>


   </div>
   
  )
}

export default Footer
