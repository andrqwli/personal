import React from 'react'
import {Row, Col, Container, Button } from 'react-bootstrap';

export default function Research() {
    return (
        <div className="page" id="research">
            <Container fluid>
                <Row className="research">
                    <Col className="research">
                        <h3>Research</h3>
                        <a href="https://www.ontotext.com/knowledgehub/fundamentals/what-is-a-knowledge-graph/" without rel="noopener noreferrer" target="_blank">
                            <h6>What is a Knowledge Graph - Ontotext</h6>
                        </a>
                        <a href="https://zenodo.org/record/3898519" without rel="noopener noreferrer" target="_blank">
                            <h6>A Data Engineer's Guide To Semantic Modelling</h6>
                        </a>
                        <a href="https://github.com/turing-knowledge-graphs/teaching/blob/main/city/ReadingList.md" without rel="noopener noreferrer" target="_blank">
                            <h6>Github Repository with Knowledge Graph Resources</h6>
                        </a>
                        <a href="https://github.com/turing-knowledge-graphs/teaching/tree/main/city" without rel="noopener noreferrer" target="_blank">
                            <h6>Github Repository with SWT&KG Course</h6>
                        </a>
                        <a href="https://monkeylearn.com/text-classification/" without rel="noopener noreferrer" target="_blank">
                            <h6>MonkeyLearn - Text classification product/service</h6>
                        </a>
                    

                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}