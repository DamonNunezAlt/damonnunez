import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='sticky'>
        
            <Row>
                <Col sm={12} md={12} lg={4} className='col'>
                    <h1 className='myName'> Damon.</h1>
                </Col>
                <Col sm={12} md={12} lg={8} className='col'>
                  <div>
                    <nav className='navbar'>
                      <a href='#home' className='navList'>//Home</a>
                      <a href='#aboutMe'  className='navList'>//About Me</a>
                      <a href='#skills'  className='navList'>//Skills</a>
                      <a href='#'  className='navList'>//Projects</a>
                      <a href='#contact'  className='navList'>//Contact</a>
                    </nav>
               </div>
                </Col>
            </Row>

    </div>
  )
}

export default Navbar