import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { SiCodechef } from "react-icons/si";
import { searchProducts } from '../redux/slice/productSlice';
import { useDispatch } from 'react-redux';


const Header = () => {
  const dispatch=useDispatch()
  return (
    <Navbar expand="lg"  className="w-100 w-100  " style={{zIndex:'10'}}>
    <Container>
      <Navbar.Brand>
       <Link className='fw-bolder' to={'/'} style={{color:'white',textDecoration:'none'}}><SiCodechef style={{fontSize:'50px',color:'yellow'}} />   Meal<span style={{color:'orange'}}>M</span>ap</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link >
            <input onChange={e=>dispatch(searchProducts(e.target.value.toLowerCase()))} style={{width:'500px'}} type="text" className='rounded p-1' placeholder='Search Resturant City Here!!' />
          </Nav.Link>

          
         

          
       
       
          
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header