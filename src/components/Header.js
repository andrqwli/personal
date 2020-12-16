import React from 'react'
import { Nav, NavItem, Navbar } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar className="justify-content-end">
            <Nav.Item>
                <Nav.Link to='#home'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to='#projects'>Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to='#exp'>Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to='#contact'>Contact</Nav.Link>
            </Nav.Item>
        </Navbar>
    )
}
