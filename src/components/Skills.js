import React from 'react'
import './Skills.css'
import {Row,Col,Container} from 'react-bootstrap'
import {BiLogoHtml5} from 'react-icons/bi'
import {BiLogoCss3} from 'react-icons/bi'
import {BiLogoJavascript} from 'react-icons/bi'
import {BiLogoReact} from 'react-icons/bi'
import {BiLogoBootstrap} from 'react-icons/bi'
const Skills = () => {
  return (
    <div className='skillsSection'>
        <Container>
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <div>
                        <h1 className='skills' id='skills'> <span>Skills </span></h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={12} lg={6}>
                <div className='outerBorder'>
                    <h1 className='skillType'>Front-End!</h1>
                <div className='iconic-container'>
                    <div className='iconic'>
                  <BiLogoHtml5 size='5rem' color='darkorange'/>
                  <p className='caption'>HTML5</p>
                 </div>

                    <div className='iconic'>
                    <BiLogoCss3 size='5rem' color='blue'/>
                    <p className='caption'>CSS</p>
                    </div>

                    <div className='iconic'>
                    <BiLogoJavascript size='5rem' color='yellow'/>
                    <p className='caption'>JavaScript</p>
                    </div>
                </div>
                <div className='iconic-container'>
                <div className='iconic'>
                    <BiLogoReact size='5rem' color='lightblue'/>
                    <p className='caption'>React</p>
                    </div>
                    <div className='iconic'>
                        <BiLogoBootstrap size='5rem' color='purple'/>
                        <p className='caption'>Bootstrap</p>
                    </div>
                </div>
                </div>
                </Col>
                <Col sm={12} md={12} lg={6}>
                    <div className='outerBorder'>
                        <h1 className='skillType'>Back-End!</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Skills