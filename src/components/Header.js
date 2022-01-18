import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar className="justify-content-end">
            <Nav.Item>
                <Nav.Link href='#home'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='#exp'>Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='#research'>Research</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='#projects'>Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='#contact'>Contact</Nav.Link>
            </Nav.Item>
        </Navbar>
    )
}
