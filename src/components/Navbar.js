import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function AppNavbar() {
    return (
        <Navbar bg="light" expand="lg">
<<<<<<< HEAD
        <Navbar.Brand href="#home">CHENG</Navbar.Brand>
=======
        <Navbar.Brand href="#home">Cheng</Navbar.Brand>
>>>>>>> staging
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
            </Nav>
        </Navbar>
    )
}