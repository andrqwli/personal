import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import headshot from '../media/headshot.png';
import Button from 'react-bootstrap/Button';

export default function Home() {
    return (
        <div className="page" id="home">
            <Container fluid>
                <Row>
                    <Col className="column home" md={12} lg={6}>
                        <div className="textbox">
                            <h4>Hi, my name is</h4>
                            <h1>Andrew Li.</h1>
                            <h1>I write and build software.</h1>
                            <p>I'm a Computer Science student based in Chapel Hill. I love solving problems, learning new skills, and pushing myself to be the best I can.</p>
                            <a href="#contact">
                                <Button variant="outline-primary">Get In Touch</Button>
                            </a>
                        </div>
                    </Col>
                    <Col className="column home-img" md={12} lg={6}>
                        <div className="img-container">
                            <img src={headshot} alt='headshot'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
