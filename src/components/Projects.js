import React from 'react'
import './Projects.css'
import {Row,Col,Container, CardImg} from 'react-bootstrap'
import {Fade} from 'react-reveal'
import { Card } from 'react-bootstrap'
import {BiLogoHtml5} from 'react-icons/bi'
import {BiLogoCss3} from 'react-icons/bi'
import {BiLogoJavascript} from 'react-icons/bi'
import {BiLogoReact} from 'react-icons/bi'
import {BiLogoBootstrap} from 'react-icons/bi'
import {GrMysql} from 'react-icons/gr'
import {SiAxios} from 'react-icons/si'
import {BiTrain} from 'react-icons/bi'
import {BiLogoNodejs} from 'react-icons/bi'
import {BiLogoPostgresql} from 'react-icons/bi'
import Starbucks from '../images/Starbucks.png'
import DreamyCafe from '../images/DreamyCafe.png'
import ClarexiaNews from '../images/ClarexiaNews.png'
const Projects = () => {
  return (
    <div className='projectsSection'>
        <Fade top distance='10%' duration = {1500} >
        <Container>
            <Row>
                <Col sm={12} md={12} lg={12}>
                <h1 className='projects' id='projects'><span> Projects! </span></h1>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={12} lg={4}>
                <div className='projectCardBorder'>
                <Card className='projectCard'>
                    <CardImg className='projectCardImage' src={ClarexiaNews}/>
                    <Card.Body className='projectCardBody'>
                        <Card.Title className='projectCardTitle'> Clarexia News! </Card.Title>
                            <Card.Text className='projectCardText'>
                               Technologies Used:
                            </Card.Text>
                            <div className='iconic-container'>
                                <div className='iconic'>
                                    <BiLogoHtml5 size='3rem' color='darkorange'/>
                                    <p className='caption'>HTML5</p>
                                </div>
                                <div className='iconic'>
                    <BiLogoCss3 size='3rem' color='blue'/>
                    <p className='caption'>CSS</p>
                    </div>

                    <div className='iconic'>
                    <BiLogoJavascript size='3rem' color='yellow'/>
                    <p className='caption'>JavaScript</p>
                    </div>
                            </div>
                            <div className='iconic-container'>
                <div className='iconic'>
                    <BiLogoReact size='3rem' color='lightblue'/>
                    <p className='caption'>React</p>
                    </div>
                    <div className='iconic'>
                        <BiLogoBootstrap size='3rem' color='purple'/>
                        <p className='caption'>Bootstrap</p>
                    </div>
                    <div className='iconic'>
                        <BiTrain size='3rem' color='lightblue'/>
                            <p className='caption'> Express</p>
                        </div>
                    </div>
                    <div className='iconic-container'>
                    <div className='iconic'>
                            <BiLogoNodejs size='3rem' color='lightgreen'/>
                            <p className='caption'> Node.Js</p>
                            </div>
                            <div className='iconic'>
                                <BiLogoPostgresql size='3rem' color='blue'/>
                                <p className='caption'>PostgreSQL</p>
                            </div>
                            <div className='iconic'>
                                <SiAxios size='3rem' color='red'/>
                                <p className='caption'> Axios </p>
                            </div>
                    </div>
                    <div className='iconic-container'>
                    <div className='iconic'>
                                <GrMysql size='5rem' color='lightblue'/>
                                <p className='caption'>MySQL</p>
                            </div>
                    </div>
                    <div className='buttonZone'>
                    <button className='btn' onClick={() => window.open('https://github.com/Damon-Nunez/clarexia-news')}>Source Code!</button>
                    </div>

                    </Card.Body>
                </Card>
                </div>
                </Col>
                <Col sm={12} md={12} lg={4}>
                    <div className='projectCardBorder'>
                    <Card className='projectCard'>
                        <CardImg className='projectCardImage' src={Starbucks}/>
                        <Card.Body className='projectCardBody'>
                            <Card.Title className='projectCardTitle'> Starbucks Clone! </Card.Title>
                            <Card.Text className='projectCardText'>
                            Technologies Used:
                            </Card.Text>
                            <div className='iconic-container'>
                                <div className='iconic'>
                                <BiLogoHtml5 size='3rem' color='darkorange'/>
                                    <p className='caption'>
                                    HTML5
                                    </p>
                                </div>
                                <div className='iconic'>
                                    <BiLogoCss3 size='3rem' color='blue'/>
                                    <p className='caption'>
                                        CSS
                                    </p>
                                </div>
                                <div className='iconic'>
                                    <BiLogoJavascript size='3rem' color='yellow'/>
                                    <p className='caption'>
                                        JavaScript
                                    </p>
                                </div>
                            </div>
                            <div className='iconic-container'>
                                <div className='iconic'>
                                    <BiLogoReact size='3rem' color='lightblue'/>
                                    <p className='caption'>
                                        React
                                    </p>
                                </div>
                                <div className='iconic'>
                                    <BiLogoBootstrap size='3rem' color='purple'/>
                                    <p className='caption'>
                                        Bootstrap
                                    </p>
                                </div>
                            </div>


                            <div className='buttonZone'>
                    <button className='btn' onClick={() => window.open('https://lighthearted-boba-ae20c5.netlify.app/')}>Live Code!</button>
                    </div>
                        </Card.Body>
                    </Card>
                </div>
                </Col>
                <Col sm={12} md={12} lg={4}>
                <div className='projectCardBorder'>
                    <Card className='projectCard'>
                        <CardImg className='projectCardImage' src={DreamyCafe}/>
                        <Card.Body className='projectCardBody'>
                            <Card.Title className='projectCardTitle'> Dreamy Cafe!</Card.Title>
                            <Card.Text className='projectCardText'>
                                Technologies Used:
                            </Card.Text>
                            <div className='iconic-container'>
                                <div className='iconic'>
                                <BiLogoHtml5 size='3rem' color='darkorange'/>
                                    <p className='caption'>
                                    HTML5
                                    </p>
                                </div>
                                <div className='iconic'>
                                    <BiLogoCss3 size='3rem' color='blue'/>
                                    <p className='caption'>
                                        CSS
                                    </p>
                                </div>
                                <div className='iconic'>
                                    <BiLogoJavascript size='3rem' color='yellow'/>
                                    <p className='caption'>
                                        JavaScript
                                    </p>
                                </div>
                            </div>
                            <div className='iconic-container'>
                                <div className='iconic'>
                                    <BiLogoReact size='3rem' color='lightblue'/>
                                    <p className='caption'>
                                        React
                                    </p>
                                </div>
                                <div className='iconic'>
                                    <BiLogoBootstrap size='3rem' color='purple'/>
                                    <p className='caption'>
                                        Bootstrap
                                    </p>
                                </div>
                            </div>
                            <div className='buttonZone'>
                    <button className='btn' onClick={() => window.open('https://dreamycafealt.netlify.app/')}>Live Code!</button>
                    </div>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <h1 className='projects'><span>Bonus!</span></h1>
                    <div className='buttonZone'>
                    <button className='btn' onClick={() => window.open('https://aesthetic-boba-d3a67c.netlify.app/')}>Previous Portfolio!</button>
                    </div>
                </Col>
            </Row>
        </Container>
</Fade>
    </div>
  )
}

export default Projects