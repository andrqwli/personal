import React from 'react'
import {Proj} from './Data';
import ProjectCard from './ProjectCard';
import {Container, Row, Col, Button} from 'react-bootstrap';

export default function Projects() {
    return (
        <div className="page" id="projects">
            <Container fluid className="px-lg-5">
                <Row className="px-lg-5 px-sm-3">
                    {Proj.map((obj) => (
                        <Col className="column projects" xl={3} lg={6} md={6} sm={12}>
                            <ProjectCard {...obj}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
