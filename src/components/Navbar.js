import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function AppNavbar() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">CHENG DYOSA</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
                <Nav.Link href="#link">Products</Nav.Link>
            </Nav>
        </Navbar>
    )
}