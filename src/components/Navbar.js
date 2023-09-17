import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        
            <Row>
                <Col sm={12} md={12} lg={6} className='col'>
                    <h1 className='myName'> Damon.</h1>
                </Col>
                <Col sm={12} md={12} lg={6} className='col'>
                  <div>
                    <nav className='navbar'>
                      <a href='#' className='navList'>Home</a>
                      <a href='#'  className='navList'>About Me</a>
                      <a href='#'  className='navList'>Education</a>
                      <a href='#'  className='navList'>Skills</a>
                      <a href='#'  className='navList'>Contact</a>
                    </nav>
               </div>
                </Col>
            </Row>

    </div>
  )
}

export default Navbar