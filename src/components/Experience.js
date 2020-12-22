import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import { Courses, Stem, Work } from './Data';
import Coursework from './Coursework';
import Jobs from './Jobs';
import resume from '../media/resume.pdf';

export default function Experience() {
    return (
        <div className='page' id="exp">
            <Container fluid>
                <Row>
                    <Col className="exp column" md={12} lg={6}>
                        <h3>Resume</h3>
                        <div className="resume">
                            <div className="ed">
                                <h4>Education</h4>
                                <h6>The University of North Carolina - Chapel Hill</h6>
                                <p>Computer Science BS | Statistics and Analytics Minor | Expected May 2022</p>
                            </div>
                            <div className="ed">
                                <h4>Experience</h4>
                                {Work.map((obj) => <Jobs {...obj}/>)}
                            </div>
                        </div>
                        <br/>
                        <h3>STEM Courses</h3>
                        <div className="courses">
                            {Stem.map((obj) => <Coursework {...obj}/>)}
                        </div>    
                    </Col>
                    <Col className="exp column" md={12} lg={6}>
                        <h3>COMP Courses</h3>
                        <div className="courses">
                            {Courses.map((obj) => <Coursework {...obj}/>)}
                        </div>
                        <a href={resume}>
                            <Button variant="outline-primary">View Resume</Button>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
