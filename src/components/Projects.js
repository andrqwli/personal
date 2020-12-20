import React from 'react'
import {Proj} from './Data';
import ProjectCard from './ProjectCard';
import {Container, Row, Col, Button} from 'react-bootstrap';

export default function Projects() {
    return (
        <div className="page" id="projects">
            <Container>
                <Row>
                    {Proj.map((obj) => (
                        <Col>
                            <ProjectCard {...obj}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
