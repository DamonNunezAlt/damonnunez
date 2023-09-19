import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import './Home.css'
import { Fade } from 'react-reveal'
const Home = () => {
  return (
  <div className='homeSection'>
    <Fade top distance='20%' duration = {1500} >
    <Container>
        <Row>
            <Col sm={12} md={12} lg={8}>
                <div className='col1' id='home'>
                    <h1 className='header'> Hi,<span className='name'>I'm Damon Nunez!</span> </h1>
                    <h3 className='headerCaption'> Full Stack Developer </h3>
                    <p className='paragraph'>
                        <strong>
                        Greetings! I'm a full-stack developer with a background in <a href='https://codenation.org/' target='_blank'> Code Nation </a> and the<a href='https://www.marcylabschool.org/' target='_blank'> Marcy Lab School.</a> I specialize in crafting user-friendly web experiences, from front-end designs to robust back-end solutions. Excited to take on new challenges in the world of development! </strong>
</p>
                <button className='btn'><a className='homeLink' href='#contact'>Contact Me!</a></button>
                </div>
            </Col>
            <Col sm={12} md={12} lg={4}>
                <div className='col2'>
                
                </div>
            </Col>
        </Row>
        </Container>
        </Fade>
        </div>
  )
}

export default Home