import React from 'react';
import {LogData} from "./Data";
import LogEntry from "./LogEntry"
import {Row, Col, Container} from 'react-bootstrap';

export default function Research() {
    return (
        <div className="page" id="research">
            <Container fluid>
                <Row className="research">
                    <Col className="research">
                        <h3>Research</h3>
                        {LogData.map((logEntryData) => <LogEntry {...logEntryData}/>)}
                    

                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}