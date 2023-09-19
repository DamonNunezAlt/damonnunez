import React from 'react'
import './AboutMe.css'
import {Row,Col,Container} from 'react-bootstrap'
import {Fade} from 'react-reveal'
const AboutMe = () => {
  return (
    <div className='aboutMeSection'>
      <Fade top distance='10%' duration = {1300} >
        <Container>
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <div id='aboutMe'>
                    <h1 className='aboutMe'>About<span>Me! </span></h1>
                    </div>
                </Col>
            </Row>
            <Row>
              <Col sm={12} md={12} lg={6}>
                <div className='border1'>
                <h3 className='sectionTitle'>
                  <strong>   
                  Education!
                  </strong>
                </h3>
                <p className='sectionParagraph'>
                  <strong>
Over the course of the past five years, my journey in the realm of full stack development has been characterized by a dynamic blend of structured education and relentless self-improvement. Beginning with a foundational three-year program at <a href='https://codenation.org/' target='_blank'>Code Nation </a> ,I cultivated a strong grasp of core programming concepts and front-end development. This initial phase laid the groundwork for my subsequent year-long enrollment at the 
<a href='https://www.marcylabschool.org/'> Marcy Lab School, </a> where I delved deeper into the intricacies of full stack development, mastering back-end technologies and honing my problem-solving abilities. Following my formal education, I embarked on a year of intensive self-learning, staying at the forefront of emerging technologies and methodologies, and continuously expanding my skill set to remain adaptable and innovative in the ever-evolving field of full stack development.
                  </strong>
                </p>
                <h3 className='sectionTitle'>
                  <strong>
                    Experience!
                  </strong>
                </h3>
                <p className='sectionParagraph'>
                Professionally, I don't have any experience, but Marcy Lab School has prided itself on its ability to prepare its students for a professional environment. So, while I don't have professional experience yet, I am familiar with the best practices and routines of professional companies. We learned these to better prepare ourselves for our first job.
                </p>
                </div>
              </Col>
              <Col sm={12} md={12} lg={4}>
              <div className='border2'>
                <h3 className='sectionTitle'>
                  <strong>
                  Passions/Interests!
                  </strong>
                </h3>
                <p className='sectionParagraph'>
                  Besides my love for coding and creating websites,
                  I also love to draw and make art for the same reason
                  that I like to code. To create!
                  To make something from scratch and make something beautiful is incredible.
                  I like to cook and go axe throwing. These are just SOME of my hobbies/ things I like to do,
                  but I am always open to new things.
                </p>
                <h3 className='sectionTitle'>
                  <strong>
                    Personal Qualities!
                  </strong>
                </h3>
                <p className='sectionParagraph'>
                  I am a team player. I'm not a social butterfly but I know
                  when to put that aside and get serious about what needs to be done.
                  I am very proactive when it comes to solving problems.
                  I believe that I can be a valuable asset of any team
                  through my tenacity and just my generally personality. I try 
                  to be a fun and funny guy when I can and I love to meet people
                  despite my nerves.
                </p>
              </div>
              </Col>
              <Col sm={12} md={12} lg={2}>
              <div className='border3'>
              <h3 className='sectionTitle'>
                <strong>
                  Future Goals!
                </strong>
              </h3>
              <p className='sectionParagraph'>
                As of right now, It's to join a welcoming team 
                of programmers to learn and grow with. To be able to 
                make real world contributions while developing my career.
              </p>
              </div>
              </Col>
            </Row>
        </Container>
        </Fade>
    </div>
  )
}

export default AboutMe