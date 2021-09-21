import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



export default function AppNavbar() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
            <h1 style={{color: "pink"}}>React-Bootstrap</h1>
        </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home" style={{color: "pink"}}>Home</Nav.Link>
                <Nav.Link href="#link" style={{color: "pink"}} >Link</Nav.Link>
            </Nav>
        </Navbar>
    )
}