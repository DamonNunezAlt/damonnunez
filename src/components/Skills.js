import React from 'react'
import './Skills.css'
import {Row,Col,Container} from 'react-bootstrap'
import {BiLogoHtml5} from 'react-icons/bi'
import {BiLogoCss3} from 'react-icons/bi'
import {BiLogoJavascript} from 'react-icons/bi'
import {BiLogoReact} from 'react-icons/bi'
import {BiLogoBootstrap} from 'react-icons/bi'
import {BiLogoGithub} from 'react-icons/bi'
import {BiTrain} from 'react-icons/bi'
import {BiLogoNodejs} from 'react-icons/bi'
import {BiLogoPostgresql} from 'react-icons/bi'
import {FaSnowflake} from 'react-icons/fa'
import {GrMysql} from 'react-icons/gr'
import {SiAxios} from 'react-icons/si'
import { Fade } from 'react-reveal'
const Skills = () => {
  return (
    <div className='skillsSection'>
         <Fade top distance='20%' duration = {1500} >
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
                    <div className='iconic'>
                        <BiLogoGithub size='5rem' color='black'/>
                        <p className='caption'>GitHub</p>
                    </div>
                </div>
                </div>
                </Col>
                <Col sm={12} md={12} lg={6}>
                    <div className='outerBorder'>
                        <h1 className='skillType'>Back-End!</h1>
                        <div className='iconic-container'>
                        <div className='iconic'>
                        <BiTrain size='5rem' color='lightblue'/>
                            <p className='caption'> Express</p>
                        </div>
                        <div className='iconic'>
                            <BiLogoNodejs size='5rem' color='lightgreen'/>
                            <p className='caption'> Node.Js</p>
                            </div>
                            <div className='iconic'>
                                <BiLogoPostgresql size='5rem' color='blue'/>
                                <p className='caption'>PostgreSQL</p>
                            </div>
                        </div>
                        <div className='iconic-container'>
                            <div className='iconic'>
                                <FaSnowflake size='5rem' color='orange'/>
                                <p className='caption'> Knex </p>
                            </div>
                            <div className='iconic'>
                                <GrMysql size='5rem' color='lightblue'/>
                                <p className='caption'>MySQL</p>
                            </div>
                            <div className='iconic'>
                                <SiAxios size='5rem' color='red'/>
                                <p className='caption'> Axios </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </Fade>
    </div>
  )
}

export default Skills