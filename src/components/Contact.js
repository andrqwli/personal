import React from 'react'
import {Row, Col, Container, Button } from 'react-bootstrap';
import github from '../media/github.png';
import facebook from '../media/facebook.svg';
import linkedin from '../media/linkedin.svg';

export default function Contact() {
    return (
        <div className="page project" id="contact">
            <Container>
                <Row id="contact">
                    <Col xs className="contact">
                        <h2>Get In Touch</h2>
                        <p>I'm currently looking for new opportunities! Whether you have any questions about my background, skills, or experience, or simply just want to say hi, feel free to reach out!</p>
                        <a href="mailto:andrqwli@live.unc.edu">
                            <Button variant="outline-primary">
                                Say Hello
                            </Button>
                        </a>
                        <br/>
                        <div className="button-panel">
                            <a href='https://www.facebook.com/andrew.li.3762584'>
                                <img src={facebook} className="git"/>
                            </a>
                            <a href='https://github.com/andrqwli'>
                                <img src={github} className="git"/>
                            </a>
                            <a href='https://www.linkedin.com/in/andrqwli/'>
                                <img src={linkedin} className="git"/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
