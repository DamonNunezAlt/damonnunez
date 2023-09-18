import React from 'react'
import './Skills.css'
import {Row,Col,Container} from 'react-bootstrap'
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
                </div>
                </Col>
                <Col sm={12} md={12} lg={6}>
                    <div className='outerBorder'>

                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Skills