import React from 'react'
import './Contact.css'
import {Row,Col,Container} from 'react-bootstrap'
import Fade from 'react-reveal'
import {BsTelephoneInboundFill} from 'react-icons/bs'
import {AiFillMail} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
const Contact = () => {
  return (
    <div className='contactSection'>
        <Fade top distance='10%' duration = {1300} >
        <Container>
            <Row>
                <Col sm={12} md={12} lg={12}>
                <h1 className='contact' id='contact'><span>Contact Me!</span></h1>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={12} lg={12}>
                <div className='iconic-container'>
                    <div className='iconic'>
                        <BsTelephoneInboundFill size='5rem' color='black'/>
                        <p className='caption'>Phone Me!</p>
                        <p className='hiddenCaption'>347-423-7396</p>
                    </div>
                    <div className='iconic'>
                        <AiFillMail size='5rem' color='red'/>
                        <p className='caption'>Email Me!</p>
                        <p className='hiddenCaption'>damon.j.nunez@gmail.com</p>
                    </div>
                    <div className='iconic'>
                        <BsLinkedin className='clickableIcon' size='5rem' color='lightblue' onClick={() => window.open('https://www.linkedin.com/in/damon-nunez-036497238/')}/>
                        <p className='caption'>My LinkedIn!</p>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
        <Container>
        <Row>
                <Col sm={12} md={12} lg={12} className='mobileExclusive'>
                    <h1 className='contact'>
                        <span className='specialSpan'>
                            Thanks for visiting!👋
                        </span>
                    </h1>
                </Col>
            </Row>
        </Container>
        </Fade>
        </div>
        

    
  )
}

export default Contact